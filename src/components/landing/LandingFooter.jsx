import { BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";

function LandingFooter() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 px-6 py-10">
      <div className="max-w-6xl mx-auto grid gap-4 md:grid-cols-3 items-center">
        <Link
          to="/"
          className="group flex items-center justify-center md:justify-start gap-2"
        >
          <div className="w-9 h-9 rounded-xl bg-blue-500 text-white grid place-items-center transition group-hover:bg-blue-400 group-hover:scale-105">
            <BriefcaseBusiness size={18} />
          </div>

          <span className="inline-block font-semibold text-white transition group-hover:text-blue-400 group-hover:scale-105">
            Trackr
          </span>
        </Link>

        <p className="text-sm text-gray-400 text-center md:whitespace-nowrap">
          Built with React + Tailwind CSS as a frontend portfolio project.
        </p>

        <div className="flex items-center justify-center md:justify-end gap-5 text-sm text-gray-400">
          <a href="#features" className="hover:text-blue-400 transition">
            Features
          </a>
          <a href="#developers" className="hover:text-blue-400 transition">
            Built With
          </a>
          <Link to="/dashboard" className="hover:text-blue-400 transition">
            Demo
          </Link>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Trackr. Built as a frontend portfolio
        project.
      </p>
    </footer>
  );
}

export default LandingFooter;
