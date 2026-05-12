import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section id="about" className="relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-medium text-gray-600 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
          <span className="text-blue-600 dark:text-blue-400">✦</span>
          Built for frontend developers
        </div>

        <h1 className="mt-8 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-950 dark:text-white">
          Track your job hunt
          <span className="block text-blue-500 dark:text-blue-400">
            like a pro.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 leading-8 dark:text-gray-300">
          A simple, fast job application tracker built for job seekers. Manage
          applications, track status, and understand your job search with clean
          analytics.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Get started free
            <ArrowRight size={16} />
          </Link>

          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
          >
            View dashboard demo
          </Link>
        </div>

        <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
          No sign up required. Demo data included.
        </p>
      </motion.div>
    </section>
  );
}

export default HeroSection;
