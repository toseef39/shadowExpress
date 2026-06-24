import { useState } from "react";
import { motion } from "framer-motion";
import PageBanner from "../common/PageBanner";
import mang1 from "../assets/mang1.avif"
import mang2 from "../assets/mang2.avif"
import mang3 from "../assets/mang3.jpg"
import mang4 from "../assets/mang4.webp"
import mang5 from "../assets/mang5.webp"
import mang6 from "../assets/mang6.webp"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" } }),
};

const team = [
  { name: "John Maczine",   title: "Chief Executive Officer", img:mang1 },
  { name: "Rebecca Slavin", title: "Chief Executive Officer", img:mang2},
  { name: "Kevin Clayton",  title: "Shipping Director",      img:mang3},
  { name: "Jagmohan Singh", title: "HR Manager",             img: mang4},
  { name: "Darryl Hatch",   title: "General Manager",        img:mang6},
  { name: "Susan Castro",   title: "Legal Officer",          img:mang5},
];
const bottombg = "https://shadowxpress.com/wp-content/uploads/2025/06/contact-banner.jpg"


const departments = ["General Inquiry", "HR Department", "Operations", "Logistics", "Finance", "Legal"];

const socialIcons = [
  <svg key="fb" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>,
  <svg key="tw" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>,
  <svg key="yt" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>,
];

export default function Team() {
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", department: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ firstName: "", lastName: "", phone: "", email: "", department: "", message: "" });
  };

  return (
    <div className="bg-white">
      <PageBanner title="Our Team" bg="https://shadowxpress.com/wp-content/uploads/2025/08/imgi_22_Strategies-to-Minimize-Meetings-in-the-Workplace-1.jpg" />

      {/* ── Teams Build Dreams ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-14">
          <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">Management</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Teams build dreams</h2>
          <div className="w-16 h-0.5 bg-red-600 mx-auto mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div key={member.name} variants={fadeUp} custom={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {socialIcons.map((icon, idx) => (
                    <a key={idx} href="#"
                      className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-5 text-center border-t border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                <p className="text-red-600 text-sm font-medium mt-1">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Career Contact Form ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-10">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">Work With Us</p>
            <h2 className="text-3xl font-bold text-gray-900">Join Our Team</h2>
            <div className="w-16 h-0.5 bg-red-600 mx-auto mt-5" />
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-white rounded-xl shadow-sm p-8 md:p-10">
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium text-center">
                Your message has been sent successfully. We will get back to you soon!
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name</label>
                  <input type="text" required value={form.firstName}
                    onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))}
                    placeholder="John"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name</label>
                  <input type="text" required value={form.lastName}
                    onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))}
                    placeholder="Smith"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone</label>
                  <input type="tel" required value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    placeholder="+1 234 567 8900"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                  <input type="email" required value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Department</label>
                <select required value={form.department}
                  onChange={e => setForm(f => ({ ...f, department: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors bg-white">
                  <option value="">Select a department</option>
                  {departments.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                <textarea required rows={5} value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Tell us about yourself and why you want to join our team..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none" />
              </div>
              <button type="submit"
                className="w-full py-3.5 bg-red-600 text-white font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-red-700 transition-colors">
                Send Message
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
