import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import {
  Lightbulb,
  TrendingUp,
  AlertTriangle,
  Briefcase,
  Send,
  Users,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { motion } from "framer-motion";

function Analytics({ jobs }) {
  console.log("jobs", jobs);
  const totalApplications = jobs.length;
  const applied = jobs.filter((job) => job.status === "Applied").length;
  const interview = jobs.filter((job) => job.status === "Interview").length;
  const offer = jobs.filter((job) => job.status === "Offer").length;
  const rejected = jobs.filter((job) => job.status === "Rejected").length;

  const stats = [
    {
      label: "Total Jobs",
      value: totalApplications,
      borderColor: "border-gray-300",
      textColor: "text-gray-800",
      icon: Briefcase,
    },
    {
      label: "Applied",
      value: applied,
      borderColor: "border-blue-500",
      textColor: "text-blue-600",
      icon: Send,
    },
    {
      label: "Interviews",
      value: interview,
      borderColor: "border-yellow-500",
      textColor: "text-yellow-600",
      icon: Users,
    },
    {
      label: "Offers",
      value: offer,
      borderColor: "border-green-500",
      textColor: "text-green-600",
      icon: CheckCircle,
    },
    {
      label: "Rejected",
      value: rejected,
      borderColor: "border-red-500",
      textColor: "text-red-600",
      icon: XCircle,
    },
  ];

  const chartData = [
    {
      name: "Applied",
      value: applied,
      percentage:
        totalApplications > 0
          ? ((applied / totalApplications) * 100).toFixed(1)
          : "0.0",
    },
    {
      name: "Interview",
      value: interview,
      percentage:
        totalApplications > 0
          ? ((interview / totalApplications) * 100).toFixed(1)
          : "0.0",
    },
    {
      name: "Offer",
      value: offer,
      percentage:
        totalApplications > 0
          ? ((offer / totalApplications) * 100).toFixed(1)
          : "0.0",
    },
    {
      name: "Rejected",
      value: rejected,
      percentage:
        totalApplications > 0
          ? ((rejected / totalApplications) * 100).toFixed(1)
          : "0.0",
    },
  ];

  const statusColors = {
    Applied: "#3b82f6",
    Interview: "#eab308",
    Offer: "#22c55e",
    Rejected: "#ef4444",
  };
  const overallRateNumber =
    totalApplications > 0 ? (offer / totalApplications) * 100 : 0;
  const overallRate = overallRateNumber.toFixed(1);
  const conversionRate = applied > 0 ? ((offer / applied) * 100).toFixed(1) : 0;

  let insightMessage = null;
  let InsightIcon = Lightbulb;
  let confidenceScore = 70;
  let insightColor = "text-blue-600";
  let insightBorder = "border-blue-500";

  const maxStatus = chartData.reduce((prev, curr) =>
    curr.value > prev.value ? curr : prev,
  );

  if (overallRate >= 20) {
    InsightIcon = TrendingUp;
    confidenceScore = 90;
    insightColor = "text-green-600";
    insightBorder = "border-green-500";

    insightMessage = (
      <>Strong offer converson. Your applications are performing well.</>
    );
  } else if (rejected > applied) {
    InsightIcon = AlertTriangle;
    confidenceScore = 85;
    insightColor = "text-red-600";
    insightBorder = "border-red-500";

    insightMessage = (
      <>
        High rejection rate. Condider improving{" "}
        <span className="font-semibold text-red-500">resume</span> or targeting.
      </>
    );
  } else if (maxStatus.name === "Applied") {
    InsightIcon = Lightbulb;
    confidenceScore = 80;
    insightColor = "text-blue-600";
    insightBorder = "border-blue-500";

    insightMessage = (
      <>
        Most applications are still in{" "}
        <span className="font-semibold text-blue-600">Applied</span> stage.
        Focus on follow-ups.
      </>
    );
  } else if (maxStatus.name === "Interview") {
    InsightIcon = TrendingUp;
    confidenceScore = 75;
    insightColor = "text-yellow-600";
    insightBorder = "border-yellow-500";

    insightMessage = (
      <>
        Good progress - many{" "}
        <span className="font-semibold text-yellow-600">Interviews</span>. Push
        towards offers.
      </>
    );
  } else {
    InsightIcon = Lightbulb;
    confidenceScore = 65;
    insightColor = "text-gray-600";
    insightBorder = "border-gray-400";

    insightMessage = (
      <>Steady progress. Keep applying and refining your approach.</>
    );
  }

  function CustomTooltip({ active, payload }) {
    if (!active || !payload || payload.length === 0) return null;
    const data = payload[0].payload;
    const color = statusColors[data.name];

    return (
      <div className="bg-white border border-gray-200 shadow-sm px-3 py-2">
        <p className="font-light" style={{ color }}>
          {data.name}: {data.value} ({data.percentage}%)
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>

      <p className="text-gray-500 mt-2">Your job hunt funnel at a glance.</p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className={`bg-white rounded-lg shadow-sm border-l-4 p-4 ${stat.borderColor}`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">{stat.label}</p>
                <Icon size={24} className={stat.textColor} />
              </div>

              <h3 className={`text-2xl font-bold mt-2 ${stat.textColor}`}>
                {stat.value}
              </h3>
            </div>
          );
        })}
      </div>

      {/* Conversion Section */}
      <h3 className="text-lg font-semibold text-gray-800 mt-8">
        Conversion Metrics
      </h3>

      {/* Conversion Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-500">Overall Success Rate</p>
          <h3 className="text-2xl font-bold mt-2 text-blue-600">
            {overallRate}%
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            Based on total applications
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-500">Conversion Rate</p>
          <h3 className="text-2xl font-bold mt-2 text-green-600">
            {conversionRate}%
          </h3>
          <p className="text-xs text-gray-400 mt-1">Applied → Offer</p>
        </div>
      </div>

      {/* Chart Section */}
      <h3 className="text-lg font-semibold text-gray-800 mt-8">
        Applications Insights
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
        {/* Bar Chart */}
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <h3 className="text-md font-semibold text-gray-800 mb-4">
            Applications by Status
          </h3>

          <div className="w-full h-64 outline-none [&_*]:outline-none">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  cursor={false}
                  content={<CustomTooltip />}
                  wrapperStyle={{ outline: "none" }}
                />
                <Bar dataKey="value" cursor="pointer" activeBar={false}>
                  {chartData.map((entry, index) => (
                    <Cell key={index} fill={statusColors[entry.name]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart Section */}
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <h3 className="text-md font-semibold text-gray-800 mb-4">
            Status Distribution
          </h3>
          <div className="w-full h-64 outline-none [&_*]:outline-none">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={3}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={index} fill={statusColors[entry.name]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name, props) => {
                    const percentage = props.payload.percentage;
                    return [`${value} (${percentage}%)`, name];
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Legend Section */}
      <div className="bg-white rounded-lg shadow-sm border p-4 mt-6">
        <h3 className="text-md font-semibold text-gray-800 mb-4">
          Status Legned
        </h3>

        <div className="flex flex-wrap items-center gap-8">
          {chartData.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: statusColors[item.name] }}
              ></span>
              <span className="text-sm text-gray-600">{item.name}</span>
              <span className="text-sm text-gray-600">{item.value}</span>
              <span className="text-xs text-gray-400">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Insights Section */}
      <h3 className="text-lg font-semibold text-gray-800 mt-8">Insights</h3>

      {/* Insight Card */}
      <motion.div
        key={confidenceScore}
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity:0, y: -10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`bg-white rounded-lg shadow-sm border-l-[6px] ${insightBorder} p-4 mt-4 transition-all duration-300 ease-out`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className={`mt-1 ${insightColor}`}>
              <InsightIcon size={22} />
            </div>

            <div>
              <p className="text-sm text-gray-500">Insight</p>
              <h3 className="text-lg font-semibold text-gray-900 mt-2">
                {insightMessage}
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Based on your current offer rate from total applications.
              </p>
            </div>
          </div>

          <div className="text-right shrink-0">
            <p className="text-xs text-gray-400">Confidence</p>
            <p className={`text-lg font-bold ${insightColor}`}>
              {confidenceScore}%
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default Analytics;
