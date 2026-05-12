import { Eye, EyeOff, Pencil, Trash2 } from "lucide-react";

function JobCard({ job, onClick, onDelete, onEdit, onHide }) {
  const {
    role = "Untitled Role",
    company = "Unknown Company",
    status = "Unknown",
    date = "No date",
  } = job;

  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick?.(job);
    }
  }

  return (
    <div
      onClick={() => onClick?.(job)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {/* Job Info */}
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">{role}</h3>
        <p className="text-gray-600">{company}</p>
      </div>

      {/* Footer */}
      <div className="mt-4 flex justify-between items-center">
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full ${getStatusStyles(status)}`}
        >
          {status}
        </span>

        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400">{date}</span>

          {/* Hide Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onHide?.(job.id);
            }}
            className="text-gray-400 hover:text-blue-600 transition"
            aria-label={job.isHidden ? "Unhide job" : "Hide job"}
          >
            {job.isHidden ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>

          {/* Edit Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onEdit?.(job);
            }}
            className="text-gray-400 hover:text-blue-600 transition"
            aria-label="Edit job"
          >
            <Pencil size={18} /> 
          </button>

          {/* Delete Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onDelete?.(job.id);
            }}
            className="text-gray-400 hover:text-red-600 transition"
            aria-label="Delete job"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

function getStatusStyles(status) {
  switch (status) {
    case "Applied":
      return "bg-blue-100 text-blue-700";
    case "Interview":
      return "bg-yellow-100 text-yellow-700";
    case "Rejected":
      return "bg-red-100 text-red-700";
    case "Offer":
      return "bg-green-100 text-green-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

export default JobCard;
