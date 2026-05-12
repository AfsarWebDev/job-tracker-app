import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Settings({ jobs, setJobs, name, setName }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const demoJobs = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "Google",
      status: "Applied",
      date: "2 days ago",
      isHidden: false,
    },
    {
      id: 2,
      role: "React Developer",
      company: "Amazon",
      status: "Interview",
      date: "1 day ago",
      isHidden: false,
    },
    {
      id: 3,
      role: "UI Developer",
      company: "Meta",
      status: "Rejected",
      date: "3 days ago",
      isHidden: false,
    },
    {
      id: 4,
      role: "Frontend Engineer",
      company: "Netflix",
      status: "Offer",
      date: "Today",
      isHidden: false,
    },
    {
      id: 5,
      role: "Web Developer",
      company: "Oracle",
      status: "Applied",
      date: "1 day ago",
      isHidden: false,
    },
    {
      id: 6,
      role: "Frontend Intern",
      company: "Adobe",
      status: "Applied",
      date: "4 days ago",
      isHidden: false,
    },
    {
      id: 7,
      role: "React Engineer",
      company: "Flipkart",
      status: "Interview",
      date: "2 days ago",
      isHidden: false,
    },
    {
      id: 8,
      role: "UI Engineer",
      company: "Swiggy",
      status: "Interview",
      date: "Today",
      isHidden: false,
    },
    {
      id: 9,
      role: "Frontend Dev",
      company: "Zomato",
      status: "Offer",
      date: "Yesterday",
      isHidden: false,
    },
    {
      id: 10,
      role: "Web Engineer",
      company: "Paytm",
      status: "Rejected",
      date: "5 days ago",
      isHidden: false,
    },
    {
      id: 11,
      role: "React Dev",
      company: "Infosys",
      status: "Applied",
      date: "3 days ago",
      isHidden: false,
    },
    {
      id: 12,
      role: "Frontend Enginner",
      company: "Wipro",
      status: "Applied",
      date: "Today",
      isHidden: false,
    },
    {
      id: 13,
      role: "UI Developer",
      company: "TCS",
      status: "Applied",
      date: "Yesterday",
      isHidden: false,
    },
    {
      id: 14,
      role: "Web Engineer",
      company: "Paytm",
      status: "Rejected",
      date: "3 days ago",
      isHidden: false,
    },
    {
      id: 15,
      role: "UI Developer",
      company: "Ola",
      status: "Rejected",
      isHidden: false,
    },
  ];

  const [showConfirm, setShowConfirm] = useState(false);
  const [toast, setToast] = useState("");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    function handleEsc(event) {
      if (event.key === "Escape") {
        setShowConfirm(false);
      }
    }
    if (showConfirm) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [showConfirm]);

  function handleRestoreData() {
    setJobs(demoJobs);
    localStorage.setItem("jobs", JSON.stringify(demoJobs));

    setToast("Demo data restored");
    setTimeout(() => setToast(""), 2000);
  }

  function handleClearData() {
    setJobs([]);
    localStorage.removeItem("jobs");

    setToast("All applications cleared");
    setTimeout(() => setToast(""), 2000);
  }

  function handleSaveProfile() {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    setToast("Profile saved successfully");
    setTimeout(() => setToast(""), 2000);
  }

  return (
    <div>
      {toast && (
        <div className="fixed top-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          {toast}
        </div>
      )}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-500 mt-2">Manage your profile and data.</p>

        <div className="bg-white rounded-lg shadow-sm border p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-800">Profile</h3>
          <p className="text-sm text-gray-500 mt-1">
            Your display name and email.
          </p>

          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <button
            onClick={handleSaveProfile}
            className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition hover:shadow-md"
          >
            Save changes
          </button>
        </div>

        {/* Appearance */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-900">Appearance</h3>
          <p className="text-sm text-gray-500 mt-1">Choose your theme.</p>

          <div className="flex gap-3 mt-6">
            {/* Dark Button */}
            <button
              onClick={() => setTheme("dark")}
              className={`px-4 py-2 rounded-lg border ${
                theme === "dark"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "border-gray-300 bg-white hover:bg-gray-200 transition"
              }`}
            >
              Dark
            </button>

            {/* Light Button */}
            <button
              onClick={() => setTheme("light")}
              className={`px-4 py-2 rounded-lg border ${
                theme === "light"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "border border-gray-300 bg-white hover:bg-gray-200 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
              }`}
            >
              Light
            </button>
          </div>
        </div>

        {/* Data */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Data
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Manage your application data.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <button
              onClick={handleRestoreData}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
            >
              Restore demo data
            </button>

            <button
              onClick={() => setShowConfirm(true)}
              className="px-4 py-2 rounded-lg border border-red-300 text-red-600 hover:bg-red-50 dark:border-red-500 dark:text-red-400 dark:hover:bg-red-900/30 transition"
            >
              Clear all applications
            </button>
          </div>
        </div>

        <AnimatePresence>
          {showConfirm && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowConfirm(false)}
            >
              {/* Confirmation Modal */}
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-red-200 dark:border-red-500 p-6 w-full max-w-md mx-4"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-lg font-semibold text-red-600">
                  Clear all applications?
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  This action will remove all saved job applications.
                </p>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    onClick={() => setShowConfirm(false)}
                    className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      handleClearData();
                      setShowConfirm(false);
                    }}
                    className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                  >
                    Yes, clear all
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Settings;
