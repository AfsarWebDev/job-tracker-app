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
    console.log("Clicked job:", job);
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
      <div className="flex justify-between items-center mb-4">
        <div>
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-gray-500 mt-2">
        Here's how your job hunt is going.
      </p>
      </div>
      <div>
        <button
          onClick={handleAddJobClick}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
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

      <div className="grid gap-4 mb-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-12">
        <input
          type="text"
          placeholder="Search by role or company"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="col-span-1 sm:col-span-2 lg:col-span-5 w-full border border-gray-300 rounded-lg px-4 py-2"
        />

        <select
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value)}
          className="col-span-1 lg:col-span-2 w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
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
          className="col-span-1 lg:col-span-2 w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="company-asc">Company A-Z</option>
          <option value="company-desc">Company Z-A</option>
        </select>

        <button
          type="button"
          onClick={handleClearFilters}
          className="col-span-1 sm:col-span-2 lg:col-span-3 w-full lg:w-auto border border-gray-300 rounded-lg px-4 py-2 bg-white hover:bg-gray-50 transition"
        >
          Clear Filters
        </button>
      </div>

      <button
        type="button"
        onClick={() => setShowHiddenJobs((prev) => !prev)}
        className="col-span-1 sm:col-span-2. lg:col-span-3 mb-4 px-4 py-2 rounded-lg border-gray-300 bg-white text-medium hover:bg-gray-50 transition"
      >
        {showHiddenJobs ? "Hide Hidden Jobs" : "Show Hidden Jobs"}
      </button>

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
