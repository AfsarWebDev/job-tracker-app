import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="px-6 py-24 bg-gray-950 border-y border-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto text-center"
      >
        <p className="text-sm font-semibold text-blue-400">
          Ready to organize your job search?
        </p>

        <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-white">
          Start tracking your applications with clarity
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-7">
          Use the demo dashboard to manage applications, track progress, review
          analytics, and keep your job search organized in one place.
        </p>

        <div className="mt-8 flex justify-center">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition"
            >
              Open dashboard demo
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default CTASection;
