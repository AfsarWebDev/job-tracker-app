import { Briefcase, CheckCircle, Send, Users, XCircle } from "lucide-react";

function DashboardStats({ jobs, onCardClick, statusFilter }) {
  const totalJobs = jobs.length;
  const appliedJobs = jobs.filter((job) => job.status === "Applied").length;
  const interviewJobs = jobs.filter((job) => job.status === "Interview").length;
  const offerJobs = jobs.filter((job) => job.status === "Offer").length;
  const rejectedJobs = jobs.filter((job) => job.status === "Rejected").length;

  const stats = [
    {
      label: "Total Jobs",
      value: totalJobs,
      borderColor: "border-gray-300",
      textColor: "text-gray-800",
      ringColor: "ring-gray-300",
      bgColor: "bg-gray-50",
      icon: Briefcase,
      filterValue: "All",
    },
    {
      label: "Applied",
      value: appliedJobs,
      borderColor: "border-blue-500",
      textColor: "text-blue-600",
      ringColor: "ring-blue-300",
      bgColor: "bg-blue-50",
      icon: Send,
      filterValue: "Applied",
    },
    {
      label: "Interviews",
      value: interviewJobs,
      borderColor: "border-yellow-500",
      textColor: "text-yellow-600",
      ringColor: "ring-yellow-300",
      bgColor: "bg-yellow-50",
      icon: Users,
      filterValue: "Interview",
    },
    {
      label: "Offers",
      value: offerJobs,
      borderColor: "border-green-500",
      textColor: "text-green-600",
      ringColor: "ring-green-300",
      bgColor: "bg-green-50",
      icon: CheckCircle,
      filterValue: "Offer",
    },
    {
      label: "Rejected",
      value: rejectedJobs,
      borderColor: "border-red-500",
      textColor: "text-red-600",
      ringColor: "ring-red-300",
      bgColor: "bg-red-50",
      icon: XCircle,
      filterValue: "Rejected",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const isActive = statusFilter === stat.filterValue;

        return (
          <div
            key={stat.label}
            onClick={() => onCardClick(stat.filterValue)}
            className={`cursor-pointer relative rounded-lg shadow-md p-4 border-l-4 transition duration-200 hover:shadow-lg hover:-translate-y-1 ${stat.borderColor} 
            ${
              isActive
                ? `${stat.bgColor} dark:bg-gray-800 ring-2 ring-offset-2 dark:ring-offset-gray-900 ${stat.ringColor} shadow-lg`
                : "bg-white dark:bg-gray-800 shadow-md hover:bg-gray-50 dark:hover:bg-gray-600"
            }`}
          >
            <p className="text-sm font-medium text-gray-500 dark:text-gray-300">{stat.label}</p>
            <h3 className={`text-2xl font-bold mt-2 ${stat.textColor}`}>
              {stat.value}
            </h3>
            <Icon
              className={`absolute top-3 right-3 w-6 h-6 ${stat.textColor}`}
            />
          </div>
        );
      })}
    </div>
  );
}

export default DashboardStats;
