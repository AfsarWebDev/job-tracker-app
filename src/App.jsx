import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

function App() {
  const defaultJobs = [
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
      role: "Frontend Engineer",
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
      date: "4 days ago",
      isHidden: false,
    },
  ];

  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");

    if (savedJobs) {
      const parsedJobs = JSON.parse(savedJobs);

      if (parsedJobs.length > 0) {
        return parsedJobs;
      }
    }

    return defaultJobs;
  });

  const [name, setName] = useState(localStorage.getItem("name") || "");

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  return (
    <Routes>
      {/* Public Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* App Pages */}
      <Route
        path="/dashboard"
        element={
          <Layout name={name}>
            <Dashboard jobs={jobs} setJobs={setJobs} name={name} />
          </Layout>
        }
      />
      <Route
        path="/applications"
        element={
          <Layout name={name}>
            <Applications jobs={jobs} setJobs={setJobs} />
          </Layout>
        }
      />
      <Route
        path="/analytics"
        element={
          <Layout name={name}>
            <Analytics jobs={jobs} />
          </Layout>
        }
      />
      <Route
        path="/settings"
        element={
          <Layout name={name}>
            <Settings
              jobs={jobs}
              setJobs={setJobs}
              name={name}
              setName={setName}
            />
          </Layout>
        }
      />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
