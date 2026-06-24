import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageBanner from "../common/PageBanner";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

const bottombg = "https://shadowxpress.com/wp-content/uploads/2025/06/contact-banner.jpg"

const countries = [
  "Afghanistan","Albania","Algeria","Angola","Argentina","Australia","Austria","Azerbaijan","Bahrain",
  "Bangladesh","Belgium","Brazil","Bulgaria","Cambodia","Canada","Chile","China","Colombia","Croatia",
  "Czech Republic","Denmark","Ecuador","Egypt","Ethiopia","Finland","France","Germany","Ghana","Greece",
  "Hungary","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Japan","Jordan","Kazakhstan",
  "Kenya","Kuwait","Lebanon","Libya","Malaysia","Mexico","Morocco","Netherlands","New Zealand","Nigeria",
  "Norway","Oman","Pakistan","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia",
  "Saudi Arabia","Serbia","Singapore","Somalia","South Africa","South Korea","Spain","Sri Lanka",
  "Sudan","Sweden","Switzerland","Syria","Taiwan","Tanzania","Thailand","Tunisia","Turkey","Uganda",
  "Ukraine","United Arab Emirates","United Kingdom","United States","Uzbekistan","Vietnam","Yemen","Zimbabwe",
];

const occupations = [
  "Construction","Engineering","HTV Driver","LTV Driver","Security Guard","Packing","Office Boy",
  "Factory Worker","Warehouse Worker","Sales Man","Delivery Person","Housekeeping","Plumber",
  "Electrician","Farm Worker","Cook","Painter","Carpenter","Other",
];

const empty = { fullName: "", passportNumber: "", country: "", occupation: "", email: "" };

export default function ApplyNow() {
  const [form, setForm]       = useState(empty);
  const [photo, setPhoto]     = useState(null);
  const [photoName, setPhotoName] = useState("");
  const [status, setStatus]   = useState("idle"); // idle | loading | success | error | duplicate
  const [serverMsg, setServerMsg] = useState("");

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

  const handleFile = (setter, nameSetter) => (e) => {
    const file = e.target.files[0];
    if (file) { setter(file); nameSetter(file.name); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setServerMsg("");

    const data = new FormData();
    data.append("fullName",       form.fullName);
    data.append("passportNumber", form.passportNumber);
    data.append("country",        form.country);
    data.append("occupation",     form.occupation);
    data.append("email",          form.email);
    if (photo) data.append("photo", photo);

    try {
      const res  = await fetch("/api/applications", { method: "POST", body: data });
      const json = await res.json();

      if (res.status === 201) {
        setStatus("success");
        setForm(empty);
        setPhoto(null);
        setPhotoName("");
      } else if (res.status === 409) {
        setStatus("duplicate");
        setServerMsg(json.error);
      } else {
        setStatus("error");
        setServerMsg(json.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerMsg("Could not reach the server. Make sure the backend is running.");
    }
  };

  return (
    <div className="bg-white">
      <PageBanner title="Apply Now" bg="https://shadowxpress.com/wp-content/uploads/2025/07/image-of-screen-with-job-application-page-over-blue-background-2G6X51K-1.jpg"/>

      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center mb-10">
          <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">Join Our Network</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Job Application Form</h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto">
            Fill in your details and upload your documents. Our team will review your application and respond within 3–5 business days.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} custom={1} initial="hidden" animate="visible"
          className="bg-white rounded-xl shadow-md border border-gray-100 p-8 md:p-10">

          {/* Success */}
          {status === "success" && (
            <div className="mb-6 p-5 bg-green-50 border border-green-200 rounded-xl text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-green-700 font-bold text-base mb-1">Application Submitted!</h3>
              <p className="text-green-600 text-sm mb-3">
                Your application has been received. Use your passport number to track its status.
              </p>
              <Link to="/find-job-status"
                className="inline-block px-5 py-2 bg-green-600 text-white text-sm font-bold rounded-lg hover:bg-green-700 transition-colors">
                Track My Application
              </Link>
            </div>
          )}

          {/* Duplicate */}
          {status === "duplicate" && (
            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 text-sm font-medium">{serverMsg}</p>
              <Link to="/find-job-status" className="text-red-600 text-sm font-semibold hover:underline mt-1 inline-block">
                → Check your application status
              </Link>
            </div>
          )}

          {/* Error */}
          {status === "error" && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{serverMsg}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
              <input type="text" required value={form.fullName} onChange={set("fullName")}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500" />
            </div>

            {/* Passport Number */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Passport Number *</label>
              <input type="text" required value={form.passportNumber} onChange={set("passportNumber")}
                placeholder="e.g. A1234567"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 uppercase" />
              <p className="text-gray-400 text-xs mt-1">You will use this to track your application status.</p>
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Country *</label>
              <select required value={form.country} onChange={set("country")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-white">
                <option value="">Select your country</option>
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* Occupation */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Occupation *</label>
              <select required value={form.occupation} onChange={set("occupation")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-white">
                <option value="">Select occupation</option>
                {occupations.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email *</label>
              <input type="email" required value={form.email} onChange={set("email")}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500" />
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Passport Size Photo * <span className="text-gray-400 font-normal">(JPG/PNG, max 5 MB)</span>
              </label>
              <label className={`flex items-center gap-3 w-full px-4 py-3 border-2 border-dashed rounded-lg cursor-pointer transition-colors group ${photo ? "border-green-400 bg-green-50" : "border-gray-300 hover:border-red-400"}`}>
                <svg className={`w-5 h-5 shrink-0 transition-colors ${photo ? "text-green-500" : "text-gray-400 group-hover:text-red-500"}`}
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className={`text-sm truncate ${photo ? "text-green-700 font-medium" : "text-gray-500"}`}>
                  {photoName || "Click to upload photo"}
                </span>
                <input type="file" required accept="image/jpeg,image/png,image/webp" className="hidden"
                  onChange={handleFile(setPhoto, setPhotoName)} />
              </label>
            </div>

            <button type="submit" disabled={status === "loading"}
              className="w-full py-4 bg-red-600 text-white font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
              {status === "loading" ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                  </svg>
                  Submitting…
                </>
              ) : "Submit Application"}
            </button>
          </form>
        </motion.div>
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
