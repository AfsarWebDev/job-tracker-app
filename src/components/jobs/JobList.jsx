import JobCard from "./JobCard";

function JobList({
  jobs,
  onJobClick,
  onDeleteJob,
  onEditJob,
  onHideJob,
  showHiddenJobs,
  searchTerm,
  statusFilter,
  sortOption,
}) {
  const hiddenFilteredJobs = showHiddenJobs
    ? jobs.filter((job) => job.isHidden)
    : jobs.filter((job) => !job.isHidden);

  const searchedJobs = hiddenFilteredJobs.filter((job) => {
    const searchValue = searchTerm.toLowerCase();

    return (
      job.role.toLowerCase().includes(searchValue) ||
      job.company.toLowerCase().includes(searchValue)
    );
  });

  const filteredJobs =
    statusFilter === "All"
      ? searchedJobs
      : searchedJobs.filter((job) => job.status === statusFilter);

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    switch (sortOption) {
      case "latest":
        return b.id - a.id;

      case "oldest":
        return a.id - b.id;

      case "company-asc":
        return a.company.localeCompare(b.company);

      case "company-desc":
        return b.company.localeCompare(a.company);

      default:
        return 0;
    }
  });

  if (sortedJobs.length === 0) {
    const isSearching = searchTerm || statusFilter !== "All";

    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <h3 className="text-lg font-semibold text-gray-800">
          {isSearching
            ? "No matching jobs found"
            : showHiddenJobs
              ? "No hidden jobs"
              : "No job applications yet"}
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          {isSearching
            ? "Try adjusting your search or filters."
            : showHiddenJobs
              ? "Hidden jobs will appear here."
              : "Start by adding your first job application."}
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {sortedJobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          onClick={onJobClick}
          onDelete={onDeleteJob}
          onEdit={onEditJob}
          onHide={onHideJob}
        />
      ))}
    </div>
  );
}

export default JobList;
