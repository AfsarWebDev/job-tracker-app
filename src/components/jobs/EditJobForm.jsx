import { useEffect, useState } from "react";

function EditJobForm({ mode, job, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    id: job.id,
    role: job.role,
    company: job.company,
    status: job.status,
    date: job.date,
    isHidden: job.isHidden,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    function handleEsc(event) {
      if (event.key === "Escape") {
        onCancel();
      }
    }

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onCancel]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.role.trim()) {
      newErrors.role = "Role is required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    if (!formData.date.trim()) {
      newErrors.date = "Date is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const isValid = validateForm();

    if (!isValid) return;

    onSave(formData);
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center"
      onClick={onCancel}
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-md p-6 w-full max-w-md mb-6 border-2 border-blue-500"
      >
        <h3 className="text-xl font-semibold mb-4">
          {mode === "add" ? "Add New Job" : "Edit Job"}
        </h3>

        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className={`w-full border rounded-lg px-3 py-2
            ${errors.role ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.role && (
            <p className="text-sm text-red-500 mt-1">{errors.role}</p>
          )}
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={`w-full border rounded-lg px-3 py-2 ${
              errors.company ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.company && (
            <p className="text-sm text-red-500 mt-1">{errors.company}</p>
          )}
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Rejected">Rejected</option>
            <option value="Offer">Offer</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={`w-full border rounded-lg px-3 py-2 ${
              errors.date ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.date && (
            <p className="text-sm text-red-500 mt-1">{errors.date}</p>
          )}
        </div>

        <div className="flex gap-4 mt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            {mode === "add" ? "Add Job" : "Save Changes"}
          </button>

          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border rounded-lg"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditJobForm;
