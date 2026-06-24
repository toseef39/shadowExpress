import { useState } from "react";
import { motion } from "framer-motion";
import PageBanner from "../common/PageBanner";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" } }),
};
const fadeLeft  = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } };
const fadeRight = { hidden: { opacity: 0, x:  50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } };
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

const emptyForm = {
  firstName: "", lastName: "", country: "", passportNumber: "", email: "", occupation: "", message: "",
};

export default function Contact() {
  const [form, setForm]         = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(emptyForm);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

  return (
    <div className="bg-white">
      <PageBanner title="Contact Us" bg="https://shadowxpress.com/wp-content/uploads/2025/07/AdobeStock_316863689-1.jpeg"/>

      {/* ── Contact Info Cards ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-12">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
            <h2 className="text-3xl font-bold text-gray-900">We're Here To Help</h2>
            <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto">
              Need assistance or ready to ship? Our team is just a message or call away — anytime you need us.
            </p>
            <div className="w-16 h-0.5 bg-red-600 mx-auto mt-5" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone */}
            <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Phone</h3>
              <p className="text-gray-500 text-sm mb-3">Call us anytime</p>
              <a href="tel:+16478008569" className="text-red-600 font-semibold hover:text-red-700 transition-colors">
                +1 647 800 8569
              </a>
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Email</h3>
              <p className="text-gray-500 text-sm mb-3">Write to us anytime</p>
              <a href="mailto:info@shadowxpress.com" className="text-red-600 font-semibold hover:text-red-700 transition-colors break-all">
                info@shadowxpress.com
              </a>
            </motion.div>

            {/* Location */}
            <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Location</h3>
              <p className="text-gray-500 text-sm mb-3">Our headquarters</p>
              <p className="text-gray-700 font-semibold">United States</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Message Form ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Info */}
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">Message Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Send A Message
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Have a question, need a quote, or want to know more about our services? Fill in the form and one of our team members will get back to you promptly.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-0.5">Response Time</h4>
                  <p className="text-gray-500 text-sm">We typically respond within 24 hours on business days.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-0.5">Secure & Confidential</h4>
                  <p className="text-gray-500 text-sm">Your information is handled with complete privacy and care.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-0.5">Expert Support</h4>
                  <p className="text-gray-500 text-sm">Our dedicated team is ready to assist you every step of the way.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8">
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium text-center">
                  ✓ Your message has been sent! We'll get back to you shortly.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name *</label>
                    <input type="text" required value={form.firstName} onChange={set("firstName")}
                      placeholder="John"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name *</label>
                    <input type="text" required value={form.lastName} onChange={set("lastName")}
                      placeholder="Smith"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Country *</label>
                  <select required value={form.country} onChange={set("country")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors bg-white">
                    <option value="">Select your country</option>
                    {countries.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Passport Number *</label>
                  <input type="text" required value={form.passportNumber} onChange={set("passportNumber")}
                    placeholder="Enter passport number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors uppercase" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email *</label>
                  <input type="email" required value={form.email} onChange={set("email")}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Occupation *</label>
                  <input type="text" required value={form.occupation} onChange={set("occupation")}
                    placeholder="Your current occupation"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                  <textarea required rows={5} value={form.message} onChange={set("message")}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full py-4 bg-red-600 text-white font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-red-700 transition-colors">
                  Send My Message
                </button>
              </form>
            </div>
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
