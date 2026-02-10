import { useState } from "react";
import IssueForm from "./components/IssueForm";

export default function App() {
  const [role, setRole] = useState("Citizen");

  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* Navbar */}
      <header className="w-full bg-indigo-700 text-white px-10 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Community Issue Reporting System
        </h1>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="text-black px-3 py-1 rounded-md"
        >
          <option>Citizen</option>
          <option>Authority</option>
          <option>Worker</option>
        </select>
      </header>

      {/* Main Content */}
      <main className="p-10">
        {/* Citizen View */}
        {role === "Citizen" && (
          <div className="max-w-4xl mx-auto">
            <IssueForm />
          </div>
        )}

        {/* Authority View */}
        {role === "Authority" && (
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Authority Dashboard
            </h2>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">
                Garbage Overflow
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                Status: Pending
              </p>

              <select className="border rounded px-3 py-2">
                <option>Assign Worker</option>
                <option>Worker A</option>
                <option>Worker B</option>
              </select>
            </div>
          </div>
        )}

        {/* Worker View */}
        {role === "Worker" && (
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Worker Tasks
            </h2>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">
                Street Light Repair
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Status: Assigned
              </p>

              <select className="border rounded px-3 py-2 mr-4">
                <option>Update Status</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>

              <button className="bg-green-600 text-white px-4 py-2 rounded">
                Update
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-gray-300 text-center py-4">
        © 2026 Community Issue Reporting System
      </footer>
    </div>
  );
}
