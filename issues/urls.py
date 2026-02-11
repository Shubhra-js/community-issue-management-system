from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),               
    path('report/', views.report_complaint, name='report_complaint'),
]
