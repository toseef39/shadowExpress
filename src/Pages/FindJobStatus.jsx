import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import PageBanner from "../common/PageBanner";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" } }),
};
const bottombg = "https://shadowxpress.com/wp-content/uploads/2025/06/contact-banner.jpg"


// const mockStatuses = {
//   "A1234567": { name: "John Mitchell",  status: "Approved",    job: "HTV Driver",      date: "2025-06-10" },
//   "B9876543": { name: "Sen Mathew",     status: "Under Review", job: "Warehouse Worker", date: "2025-06-08" },
//   "C5551234": { name: "Richar Swas",    status: "Pending",     job: "Security Guard",  date: "2025-06-05" },
// };

const STATUS_STYLES = {
  Pending:  { pill: "bg-yellow-100 text-yellow-700 border-yellow-300", icon: "⏳", bar: "bg-yellow-400" },
  Approved: { pill: "bg-green-100  text-green-700  border-green-300",  icon: "✅", bar: "bg-green-500"  },
  Rejected: { pill: "bg-red-100    text-red-700    border-red-300",    icon: "❌", bar: "bg-red-500"    },
};
const mockStatuses = {
  "A1234567": { name: "John Mitchell",  status: "Approved",    job: "HTV Driver",      date: "2025-06-10" },
  "B9876543": { name: "Sen Mathew",     status: "Under Review", job: "Warehouse Worker", date: "2025-06-08" },
  "C5551234": { name: "Richar Swas",    status: "Pending",     job: "Security Guard",  date: "2025-06-05" },
};

function fmt(iso) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function FindJobStatus() {
  const navigate = useNavigate();
  const [passport, setPassport] = useState("");
  const [state,    setState]    = useState("idle");
  const [result,   setResult]   = useState(null);
  const [errMsg,   setErrMsg]   = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setState("loading");
    setResult(null);
    setErrMsg("");

    try {
      const res  = await fetch(`/api/applications/status/${encodeURIComponent(passport.trim())}`);
      const json = await res.json();

      if (res.ok) {
        if (json.status === "Approved") {
          // Go directly to the appointment letter page
          navigate(`/appointment-letter/${encodeURIComponent(passport.trim())}`);
          return;
        }
        setResult(json);
        setState("found");
      } else if (res.status === 404) {
        setState("notfound");
      } else {
        setState("error");
        setErrMsg(json.error ?? "Something went wrong.");
      }
    } catch {
      setState("error");
      setErrMsg("Could not reach the server. Make sure the backend is running.");
    }
  };

  const style = result ? (STATUS_STYLES[result.status] ?? STATUS_STYLES.Pending) : null;

  return (
    <div className="bg-white">
      <PageBanner title="Find Job Status" bg="https://shadowxpress.com/wp-content/uploads/2025/06/istockphoto-1279104620-612x612-1.jpg" />

      <section className="py-24 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center mb-10">
          <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">Track Your Application</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Check Your Job Status</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Enter the passport number you used when applying to see your current application status.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} custom={1} initial="hidden" animate="visible"
          className="bg-white rounded-xl shadow-md border border-gray-100 p-8 md:p-10">

          <form onSubmit={handleSearch} className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Enter Passport Number:</label>
              <input
                type="text"
                required
                value={passport}
                onChange={e => { setPassport(e.target.value); setState("idle"); }}
                placeholder="e.g. A1234567"
                className="w-full px-4 py-3.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 uppercase tracking-wider"
              />
            </div>
            <button type="submit" disabled={state === "loading"}
              className="w-full py-3.5 bg-red-600 text-white font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-red-700 transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
              {state === "loading" ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                  </svg>
                  Searching…
                </>
              ) : "Search Status"}
            </button>
          </form>

          {/* Not found */}
          {state === "notfound" && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-50 border border-red-200 rounded-lg text-center">
              <p className="text-red-700 text-sm font-medium mb-2">
                No application found for passport <strong className="uppercase">{passport}</strong>.
              </p>
              <Link to="/apply" className="text-red-600 text-sm font-semibold hover:underline">→ Apply Now</Link>
            </motion.div>
          )}

          {/* Server error */}
          {state === "error" && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-gray-700 text-sm">{errMsg}</p>
            </motion.div>
          )}

          {/* Pending / Rejected result */}
          {state === "found" && result && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <div className={`rounded-xl border-2 p-5 mb-4 ${style.pill.replace("text-", "border-").split(" ")[2]} bg-white`}>
                <div className="flex items-center justify-between flex-wrap gap-3 mb-1">
                  <span className="text-lg font-black text-gray-900">Application Status</span>
                  <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold border ${style.pill}`}>
                    {style.icon} {result.status}
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5 mt-3">
                  <div className={`h-1.5 rounded-full transition-all ${style.bar}`}
                    style={{ width: result.status === "Pending" ? "33%" : "100%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                  <h3 className="font-bold text-gray-800 text-sm">Application Details</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                    ["Applicant Name",   result.fullName],
                    ["Passport Number",  result.passportNumber],
                    ["Country",          result.country],
                    ["Applied Position", result.occupation],
                    ["Applied On",       fmt(result.appliedAt)],
                    ["Last Updated",     fmt(result.updatedAt)],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between items-center px-5 py-3 text-sm">
                      <span className="text-gray-500 font-medium">{label}</span>
                      <span className="text-gray-900 font-semibold text-right max-w-[60%]">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {result.adminNote && (
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800 text-xs font-semibold uppercase tracking-wide mb-1">Note from Admin</p>
                  <p className="text-blue-700 text-sm">{result.adminNote}</p>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>

        <p className="text-center text-gray-400 text-xs mt-6">
          Haven't applied yet?{" "}
          <Link to="/apply" className="text-red-600 font-semibold hover:underline">Apply Now</Link>
        </p>
      </section>

      {/* ── Newsletter ── */}
      {/* <section className="py-14 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Subscribe Our Newsletter</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-lg mx-auto">
              A newsletter is a regularly distributed publication, often via email, that contains news, updates, or information related to a specific topic or organization.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Your Name"
                className="flex-1 px-5 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:border-red-500" />
              <button type="submit"
                className="px-8 py-3 bg-red-600 text-white font-bold uppercase tracking-wide text-sm rounded hover:bg-red-700 transition-colors">
                Sign Up
              </button>
            </form>
          </motion.div>
        </div>
      </section>
      {/* ── Newsletter ── */}
      <section className="relative py-20 border-t border-gray-200 overflow-hidden">
                    <img src={bottombg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className="text-6xl font-medium text-white mb-3">Subscribe Our Newsletter</h2>
                        <p className="text-white text-lg leading-relaxed mb-6 max-w-lg mx-auto">
                          A newsletter is a regularly distributed publication, often via email, that contains news, updates, or information related to a specific topic or organization.
                        </p>
                        <form className="flex flex-col sm:flex-row max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
                          <input type="text" placeholder="Your Name"
                            className="flex-1 px-5 py-3 border bg-white border-red-600 rounded text-sm focus:outline-none focus:border-red-500" />
                          <button type="submit"
                            className="px-8 py-3 bg-red-600 text-white font-bold uppercase tracking-wide text-sm rounded hover:bg-red-700 transition-colors">
                            Sign Up
                          </button>
                        </form>
                      </motion.div>
                    </div>
                  </section>
    </div>
  );
}
