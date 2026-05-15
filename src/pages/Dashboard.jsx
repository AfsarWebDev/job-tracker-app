import { useEffect, useState } from "react";
import JobList from "../components/jobs/JobList";
import EditJobForm from "../components/jobs/EditJobForm";
import DashboardStats from "../components/dashboard/DashboardStats";

function Dashboard({ jobs, setJobs }) {
  const [showHiddenJobs, setShowHiddenJobs] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [isAddingJob, setIsAddingJob] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOption, setSortOption] = useState("latest");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  function handleJobClick(job) {
    handleEditJob(job);
  }

  function handleDeleteJob(id) {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  }

  function handleEditJob(job) {
    setEditingJob(job);
    setIsAddingJob(false);
  }

  function handleUpdateJob(updatedJob) {
    setJobs((prevJobs) =>
      prevJobs.map((job) => (job.id === updatedJob.id ? updatedJob : job)),
    );
    setEditingJob(null);
  }

  function handleCancelEdit() {
    setEditingJob(null);
  }

  function handleHideJob(id) {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id ? { ...job, isHidden: !job.isHidden } : job,
      ),
    );
  }

  function handleAddJobClick() {
    setIsAddingJob(true);
    setEditingJob(null);
  }

  function handleAddNewJob(newJob) {
    setJobs((prevJobs) => [newJob, ...prevJobs]);
    setIsAddingJob(false);
  }

  function handleCancelAdd() {
    setIsAddingJob(false);
  }

  function handleClearFilters() {
    setSearchTerm("");
    setStatusFilter("All");
    setSortOption("latest");
  }

  function handleStatusFilterFromStats(status) {
    setStatusFilter(status);
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
            Here's how your job hunt is going.
          </p>
        </div>
        <div>
          <button
            onClick={handleAddJobClick}
            className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            + Add New Job
          </button>
        </div>
      </div>

      <DashboardStats
        jobs={jobs}
        onCardClick={handleStatusFilterFromStats}
        statusFilter={statusFilter}
      />

      <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 md:gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by role or company"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="col-span-2 lg:col-span-4 h-10 rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-500"
        />

        <select
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value)}
          className="lg:col-span-2 h-10 rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
        >
          <option value="All">All Statuses</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Rejected">Rejected</option>
          <option value="Offer">Offer</option>
        </select>

        <select
          value={sortOption}
          onChange={(event) => setSortOption(event.target.value)}
          className="lg:col-span-2 h-10 rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="company-asc">Company A-Z</option>
          <option value="company-desc">Company Z-A</option>
        </select>

        <button
          type="button"
          onClick={handleClearFilters}
          className="h-10 rounded-lg border border-gray-300 bg-white px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 transition dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          Clear Filters
        </button>

        <button
          type="button"
          onClick={() => setShowHiddenJobs((prev) => !prev)}
          className="h-10 rounded-lg border border-gray-300 bg-white px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 transition dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          {showHiddenJobs ? "Hide Hidden" : "Show Hidden"}
        </button>
      </div>

      {editingJob && (
        <EditJobForm
          key={editingJob.id}
          mode="edit"
          job={editingJob}
          onSave={handleUpdateJob}
          onCancel={handleCancelEdit}
        />
      )}

      {isAddingJob && (
        <EditJobForm
          key="add-job-form"
          mode="add"
          job={{
            id: Date.now() + Math.random(),
            role: "",
            company: "",
            status: "Applied",
            date: "",
            isHidden: false,
          }}
          onSave={handleAddNewJob}
          onCancel={handleCancelAdd}
        />
      )}

      <JobList
        jobs={jobs}
        onJobClick={handleJobClick}
        onDeleteJob={handleDeleteJob}
        onEditJob={handleEditJob}
        onHideJob={handleHideJob}
        showHiddenJobs={showHiddenJobs}
        searchTerm={debouncedSearchTerm}
        statusFilter={statusFilter}
        sortOption={sortOption}
      />
    </div>
  );
}

export default Dashboard;
