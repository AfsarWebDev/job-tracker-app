import { motion } from "framer-motion";
import { Briefcase, Clock3, CheckCircle2, BarChart3 } from "lucide-react";

function DashboardPreview() {
  const columns = [
    {
      title: "Applied",
      jobs: ["Frontend Developer", "React Developer"],
    },
    {
      title: "Interview",
      jobs: ["UI Developer"],
    },
    {
      title: "Offer",
      jobs: ["Junior Frontend"],
    },
    {
      title: "Rejected",
      jobs: ["React Developer"],
    },
  ];

  const stats = [
    {
      label: "Applied",
      value:
        columns.find((column) => column.title === "Applied")?.jobs.length || 0,
      note: "+3 this week",
      icon: Briefcase,
    },
    {
      label: "Interview",
      value:
        columns.find((column) => column.title === "Interview")?.jobs.length || 0,
      note: "2 upcoming",
      icon: Clock3,
    },
    {
      label: "Offer",
      value:
        columns.find((column) => column.title === "Offer")?.jobs.length || 0,
      note: "Negotiating",
      icon: CheckCircle2,
    },
    {
      label: "Rejected",
      value:
        columns.find((column) => column.title === "Rejected")?.jobs.length || 0,
      note: "Keep improving",
      icon: BarChart3,
    },
  ];

  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl border border-gray-200 bg-white shadow-2xl shadow-blue-100/50 overflow-hidden dark:border-gray-800 dark:bg-gray-900 dark:shadow-none"
        >
          {/* Browser Top Bar */}
          <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />

              <span className="ml-3 text-xs text-gray-500 dark:text-gray-400">
                trackr.app/dashboard
              </span>
            </div>

            <span className="hidden sm:block text-xs text-gray-400 dark:text-gray-500">
              Job Tracker Preview
            </span>
          </div>

          {/* Preview Body */}
          <div className="p-6 bg-white dark:bg-gray-900">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-gray-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {stat.label}
                      </p>

                      <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 grid place-items-center dark:bg-blue-950 dark:text-blue-400">
                        <Icon size={16} />
                      </div>
                    </div>

                    <p className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-400 mt-1 dark:text-gray-500">
                      {stat.note}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="grid md:grid-cols-4 gap-4 mt-6">
              {columns.map((column) => (
                <div
                  key={column.title}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-4 min-h-48 dark:border-gray-800 dark:bg-gray-950"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                      {column.title}
                    </h3>

                    <span className="rounded-full bg-white border border-gray-200 px-2 py-0.5 text-xs text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
                      {column.jobs.length}
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    {column.jobs.map((job) => (
                      <div
                        key={job}
                        className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
                      >
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {job}
                        </p>
                        <p className="text-xs text-gray-500 mt-1 dark:text-gray-400">
                          Frontend role
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default DashboardPreview;
