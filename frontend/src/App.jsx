import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-700">
          Community Issue Management
        </h1>
        <div className="space-x-4">
          <NavBtn label="Home" onClick={() => setPage("home")} />
          <NavBtn label="Report Issue" onClick={() => setPage("report")} />
          <NavBtn label="Citizen" onClick={() => setPage("citizen")} />
          <NavBtn label="Admin" onClick={() => setPage("admin")} />
          <NavBtn label="Worker" onClick={() => setPage("worker")} />
        </div>
      </nav>

      {/* Content */}
      <div className="p-10">
        {page === "home" && <Home />}
        {page === "report" && <IssueForm />}
        {page === "citizen" && <CitizenDashboard />}
        {page === "admin" && <AdminPanel />}
        {page === "worker" && <WorkerPanel />}
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function NavBtn({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-sm font-medium text-gray-700 hover:text-indigo-600"
    >
      {label}
    </button>
  );
}

/* ---------------- HOME ---------------- */

function Home() {
  return (
    <Section title="Welcome">
      <p className="text-gray-600 text-lg">
        A web-based platform to report, track, and resolve community issues
        efficiently with transparency and accountability.
      </p>
    </Section>
  );
}

/* ---------------- ISSUE FORM ---------------- */

function IssueForm() {
  return (
    <Section title="Report a Community Issue">
      <form className="space-y-4">
        <Input label="Issue Title" placeholder="Garbage overflow near Block A" />
        <Textarea label="Description" />
        <Select label="Category" options={["Garbage", "Road", "Water", "Electricity"]} />
        <Input label="Location" placeholder="Area / Landmark" />

        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700">
          Submit Issue
        </button>
      </form>
    </Section>
  );
}

/* ---------------- CITIZEN ---------------- */

function CitizenDashboard() {
  return (
    <Section title="My Reported Issues">
      <IssueCard status="Pending" />
      <IssueCard status="In Progress" />
      <IssueCard status="Resolved" />
    </Section>
  );
}

/* ---------------- ADMIN ---------------- */

function AdminPanel() {
  return (
    <Section title="Admin Panel">
      <IssueCard status="New Issue" />
      <IssueCard status="Assigned to Worker" />
    </Section>
  );
}

/* ---------------- WORKER ---------------- */

function WorkerPanel() {
  return (
    <Section title="Worker Tasks">
      <IssueCard status="Assigned Task" />
      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
        Mark as Resolved
      </button>
    </Section>
  );
}

/* ---------------- REUSABLE UI ---------------- */

function Section({ title, children }) {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        {title}
      </h2>
      {children}
    </div>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-1">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border rounded px-4 py-2"
      />
    </div>
  );
}

function Textarea({ label }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-1">{label}</label>
      <textarea
        rows="4"
        className="w-full border rounded px-4 py-2"
      />
    </div>
  );
}

function Select({ label, options }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-1">{label}</label>
      <select className="w-full border rounded px-4 py-2">
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function IssueCard({ status }) {
  return (
    <div className="border rounded-lg p-4 mb-4 bg-gray-50">
      <h3 className="font-semibold text-gray-800">
        Issue: Streetlight not working
      </h3>
      <p className="text-sm text-gray-600">
        Status: <span className="font-medium">{status}</span>
      </p>
    </div>
  );
}
