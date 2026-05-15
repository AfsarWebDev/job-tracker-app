import { DndContext, useDroppable, useDraggable } from "@dnd-kit/core";

const statuses = ["Applied", "Interview", "Offer", "Rejected"];

function DroppableColumn({ status, children }) {
  const { setNodeRef } = useDroppable({
    id: status,
  });

  return (
    <div
      ref={setNodeRef}
      className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 min-h-96 flex flex-col"
    >
      {children}
    </div>
  );
}

function DraggableJobCard({ job, children }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: job.id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
}
function Applications({ jobs, setJobs }) {
  function handleStatusChange(id, newStatus) {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id ? { ...job, status: newStatus } : job,
      ),
    );
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over) return;

    const jobId = active.id;
    const newStatus = over.id;

    if (!statuses.includes(newStatus)) return;

    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId ? { ...job, status: newStatus } : job,
      ),
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Applications
        </h2>
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-2">
          Manage and track your job applications by status.
        </p>
      </div>

      <DndContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
          {statuses.map((status) => {
            const filteredJobs = jobs.filter((job) => job.status === status);

            return (
              <DroppableColumn key={status} status={status}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-700 dark:text-gray-200">
                    {status}
                  </h3>
                  <span className="text-xs text-gray-600 bg-gray-200 dark:bg-gray-700 dark:text-gray-100 px-2 py-1 rounded-full">
                    {filteredJobs.length}
                  </span>
                </div>

                {filteredJobs.length === 0 ? (
                  <p className="text-sm text-gray-400 dark:text-gray-500">
                    No Jobs
                  </p>
                ) : (
                  <div className="flex flex-col gap-3 mt-2">
                    {filteredJobs.map((job) => (
                      <DraggableJobCard key={job.id} job={job}>
                        <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition">
                          <p className="font-semibold text-gray-800 dark:text-white">
                            {job.role}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {job.company}
                          </p>
                          <span className="inline-block mt-3 text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-200">
                            {job.status}
                          </span>
                          <select
                            value={job.status}
                            onChange={(e) =>
                              handleStatusChange(job.id, e.target.value)
                            }
                            className="mt-3 w-full border border-gray-300 dark:border-gray-600 rounded-lg px-2 py-1 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200"
                          >
                            <option value="Applied">Applied</option>
                            <option value="Interview">Interview</option>
                            <option value="Offer">Offer</option>
                            <option value="Rejected">Rejected</option>
                          </select>
                        </div>
                      </DraggableJobCard>
                    ))}
                  </div>
                )}
              </DroppableColumn>
            );
          })}
        </div>
      </DndContext>
    </div>
  );
}

export default Applications;
