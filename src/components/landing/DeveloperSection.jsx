import { motion } from "framer-motion";
import {
  Database,
  GitBranch,
  LayoutDashboard,
  MousePointerClick,
  Palette,
  Route,
} from "lucide-react";

function DeveloperSection() {
  const highlights = [
    {
      title: "Reusable Components",
      description:
        "Built with separated components for layout, cards, forms, charts, and landing sections.",
      icon: LayoutDashboard,
    },
    {
      title: "Clean Routing",
      description:
        "Landing page is kept outside Layout, while dashboard pages are wrapped inside the app shell.",
      icon: Route,
    },
    {
      title: "Persistent Data",
      description:
        "Uses localStorage to save profile data, theme preference, and application data.",
      icon: Database,
    },
    {
      title: "Interactive Workflows",
      description:
        "Includes clickable stats, filters, modals, drag-and-drop Kanban, and dropdown interactions.",
      icon: MousePointerClick,
    },
    {
      title: "Data-Driven UI",
      description:
        "Stats, cards, charts, and previews are rendered from arrays using map and derived values.",
      icon: GitBranch,
    },
    {
      title: "Theme Support",
      description:
        "Dark and light mode are handled using Tailwind's class strategy with persistent preference.",
      icon: Palette,
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
      id="developers"
      className="px-6 py-24 bg-white scroll-mt-24 dark:bg-gray-950"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              Built like a real frontend project
            </p>

            <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-gray-950 dark:text-white">
              More than just UI screens
            </h2>

            <p className="mt-5 text-gray-600 leading-7 dark:text-gray-300">
              Job Tracker is built with reusable React components, clean
              routing, persistent localStorage data, drag-and-drop workflows,
              analytics, theme switching, and user-focused interactions.
            </p>
          </motion.div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={cardVariants}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-950"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 grid place-items-center dark:bg-blue-950 dark:text-blue-400">
                      <Icon size={18} />
                    </div>

                    <h3 className="mt-4 text-sm font-semibold text-gray-950 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeveloperSection;
