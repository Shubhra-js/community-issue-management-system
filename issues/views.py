from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Category, Complaint


def home(request):
    return redirect('report_complaint')


@login_required
def report_complaint(request):
    categories = Category.objects.all()

    if request.method == "POST":
        category_id = request.POST.get('category')
        description = request.POST.get('description')

        category = Category.objects.get(id=category_id)

        Complaint.objects.create(
            citizen=request.user,
            category=category,
            description=description
        )

        return redirect('report_complaint')

    return render(request, 'issues/report_complaint.html', {
        'categories': categories
    })
@login_required
def my_complaints(request):
    complaints = Complaint.objects.filter(citizen=request.user).order_by('-created_at')

    return render(request, 'issues/my_complaints.html', {
        'complaints': complaints
    })

