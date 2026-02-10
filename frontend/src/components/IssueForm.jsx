import { useState } from "react";

export default function IssueForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    category: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // For now just log (backend baad me)
    console.log("Issue Submitted:", formData);

    alert("Issue reported successfully!");

    // Reset form
    setFormData({
      title: "",
      description: "",
      location: "",
      category: "",
    });
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-8 w-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Report a Community Issue
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Issue Title */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Issue Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter issue title"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Description
          </label>
          <textarea
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Describe the issue in detail"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter location"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select category</option>
            <option value="Garbage">Garbage</option>
            <option value="Pothole">Pothole</option>
            <option value="Water Leakage">Water Leakage</option>
            <option value="Street Light">Street Light</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Submit Complaint
        </button>
      </form>
    </div>
  );
}
