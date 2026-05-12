import { motion } from "framer-motion";
import {
  BarChart3,
  KanbanSquare,
  Moon,
  Search,
  Settings,
  TrendingUp,
} from "lucide-react";

function FeaturesSection() {
  const features = [
    {
      title: "Application Dashboard",
      description:
        "View total applications, interviews, offers and rejected jobs in one clean dashboard.",
      icon: BarChart3,
    },
    {
      title: "Kanban Job Board",
      description:
        "Organize applications by status using a drag-and-drop Kanban workflow.",
      icon: KanbanSquare,
    },
    {
      title: "Smart Search & Filters",
      description:
        "Quickly find applications by company, role, status, and sorting options.",
      icon: Search,
    },
    {
      title: "Analytics & Insights",
      description:
        "Understand your job search with charts, conversion metrics, and success insights.",
      icon: TrendingUp,
    },
    {
      title: "Dark / Light Mode",
      description:
        "Switch themes with a clean Tailwind class strategy and persistent preference.",
      icon: Moon,
    },
    {
      title: "User Settings",
      description:
        "Manage profile data, restore demo jobs, clear data safely, and get feedback with toasts.",
      icon: Settings,
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="features"
      className="scroll-mt-24 px-6 py-24 bg-gray-50 dark:bg-gray-950"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            Features
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-gray-950 dark:text-white">
            Everything you need to manage your job search
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-7 dark:text-gray-300">
            Track applications, organize job status, review analytics, and
            manage your job hunt from one clean dashboard.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition duration-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-600"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 grid place-items-center dark:bg-blue-950 dark:text-blue-400">
                  <Icon size={20} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-gray-950 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturesSection;
