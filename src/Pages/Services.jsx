import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageBanner from "../common/PageBanner";
import BGWorldmap from "../assets/BG-Worldmap-1.png";
import cons1 from "../assets/cons1.jpg"
import cons2 from "../assets/cons2.jpg"
import cons3 from "../assets/con3.avif"
import cons4 from "../assets/cons4.jpg"
import cons5 from "../assets/cons5.png"
import cons6 from "../assets/cons6.jpg"
import cons7 from "../assets/cons7.jpg"
import cons8 from "../assets/cons8.jpg"
import cons9 from "../assets/cons9.jpeg"
import conss9 from "../assets/conss9.jpg"
import cons10 from "../assets/cons10.jpg"
import cons11 from "../assets/cons11.jpg"
import conss12 from "../assets/conss12.webp"
import cons12 from "../assets/conss12.webp"
import cons13 from "../assets/cons13.jpg"
import con13 from "../assets/con13.jpg"
import cons14 from "../assets/cons14.jpg"
import cons15 from "../assets/cons15.avif"
import cons16 from "../assets/cons16.jpeg"
import cons17 from "../assets/cons17.jpg"
import cons18 from "../assets/cons1.jpg"
import cons19 from "../assets/cons1.jpg"
import cons20 from "../assets/cons1.jpg"
// import servicebg from "../assets/"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

const IMG_TRUCK = "https://shadowxpress.com/wp-content/uploads/2025/06/silhouette-of-a-commercial-truck-driving-on-a-highway-at-sunset-.jpg";
const IMG_PLANE = "https://shadowxpress.com/wp-content/uploads/2025/06/loading-to-the-aircraft.jpg";
const IMG_WAREHOUSE = "https://shadowxpress.com/wp-content/uploads/2025/06/logistics-storage-and-delivery-warehouse-loading-management.jpg";
const IMG_TEAM = "https://shadowxpress.com/wp-content/uploads/2025/06/employees-consult-while-working-in-the-warehouse.jpg";
const servicebg = "https://shadowxpress.com/wp-content/uploads/2025/07/1734369282492.jpg"
const bottombg = "https://shadowxpress.com/wp-content/uploads/2025/06/contact-banner.jpg"
const jobs = [
  { title: "Construction", salary: "$6,488", img: cons1 },
  { title: "Engineering", salary: "$6,243", img: cons2 },
  { title: "HTV Driver", salary: "$4,550", img: cons3 },
  { title: "LTV Driver", salary: "$3,282", img: cons4 },
  { title: "Security Guard", salary: "$3,250", img: cons5 },
  { title: "Packing", salary: "$2,823", img: cons9 },
  { title: "Office Boy", salary: "$2,850", img: cons6 },
  { title: "Factory Worker", salary: "$2,950", img: cons8 },
  { title: "Warehouse Worker", salary: "$3,280", img: conss9 },
  { title: "Sales Man", salary: "$3,350", img: cons11 },
  { title: "Delivery Person", salary: "$3,373", img: conss12 },
  { title: "Housekeeping", salary: "$3,073", img: cons12 },
  { title: "Plumber", salary: "$3,780", img: con13 },
  { title: "Electrician", salary: "$3,850", img: cons13 },
  { title: "Farm Worker", salary: "$2,750", img: cons14 },
  { title: "Cook", salary: "$3,173", img: cons15 },
  { title: "Painter", salary: "$3,073", img: cons16 },
  { title: "Carpenter", salary: "$3,475", img: cons17 },
];

const industries = [
  { icon: "🚗", title: "Automotive", front: "We understand the urgency and precision required in the automotive supply chain.", back: "From parts and accessories to complete vehicle logistics, we ensure fast, secure, and compliant transportation." },
  { icon: "💻", title: "Technology", front: "We specialize in handling high-value, time-sensitive technology shipments with precision.", back: "From laptops and mobile devices to servers and components, we ensure secure and timely delivery." },
  { icon: "🏥", title: "Healthcare", front: "We provide specialized logistics for the healthcare sector, where timing is critical.", back: "From medical equipment to pharmaceuticals and lab samples, we handle each shipment with strict compliance." },
  { icon: "⚡", title: "Renewable Energy", front: "We support the renewable energy sector with logistics built for scale and safety.", back: "From solar panels and wind turbine components to batteries, we manage complex, high-value equipment." },
  { icon: "🏭", title: "Industrial", front: "End-to-end logistics solutions for heavy machinery, raw materials, and large-scale equipment.", back: "Our expertise covers both domestic and international freight, including oversized and specialized cargo." },
  { icon: "👕", title: "Retail / Fashion", front: "Fast, reliable logistics tailored for the fast-moving world of retail and fashion.", back: "From designer apparel to seasonal stock, we ensure timely, damage-free delivery to stores and customers." },
];

const whyUs = [
  { title: "Customer Satisfaction Tools", desc: "Delivering a smooth, transparent, and reassuring experience at every step." },
  { title: "Freight Payment Options", desc: "Multiple secure payment methods to fit your business needs and preferences." },
  { title: "Management & Reporting", desc: "Real-time reports and performance insights for complete visibility." },
  { title: "Compliance Solutions", desc: "Our expert team ensures adherence to all local and international standards." },
];

const testimonials = [
  { quote: "Outstanding service! My urgent documents were delivered within hours. Truly impressive!", name: "John Mitchell", location: "Toronto" },
  { quote: "The reliability is unmatched. They are always on time and incredibly professional.", name: "Sen Mathew", location: "Victoria" },
  { quote: "They handled all customs clearance and delivered right on schedule. Couldn't be happier!", name: "Richar Swas", location: "Edmonton" },
];

function FlipCard({ icon, title, front, back }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="relative h-64 cursor-pointer" style={{ perspective: "1000px" }}
      onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}>
      <div className="relative w-full h-full transition-transform duration-500"
        style={{ transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
        <div className="absolute inset-0 bg-gray-800 rounded-lg flex flex-col items-center justify-center p-6 text-center"
          style={{ backfaceVisibility: "hidden" }}>
          <span className="text-4xl mb-4">{icon}</span>
          <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{front}</p>
        </div>
        <div className="absolute inset-0 bg-red-600 rounded-lg flex flex-col items-center justify-center p-6 text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
          <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
          <p className="text-white text-sm leading-relaxed mb-4">{back}</p>
          <Link to="/contact" className="border border-white text-white text-xs px-4 py-2 rounded hover:bg-white hover:text-red-600 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="bg-white">
      <PageBanner title="Our Services" />

      {/* ── Job Listings Grid ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-14">
          <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">Employment Opportunities</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What We Offer</h2>
          <div className="w-16 h-0.5 bg-red-600 mx-auto mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, i) => (
            <motion.div key={job.title} variants={fadeUp} custom={i % 6}
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group">
              <div className="overflow-hidden h-52">
                <img src={job.img} alt={job.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-gray-900 font-bold text-lg mb-2">{job.title}</h3>
                <p className="text-gray-500 text-sm mb-1">Average base salary</p>
                <p className="text-red-600 font-bold text-xl mb-1">{job.salary}</p>
                <p className="text-gray-400 text-xs mb-4">Pay per: Month</p>
                <Link to="/apply"
                  className="inline-block w-full text-center px-4 py-2.5 bg-red-600 text-white text-sm font-bold uppercase tracking-wide rounded hover:bg-red-700 transition-colors">
                  Apply Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="relative py-20 overflow-hidden">
        <img src={servicebg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-100/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-4">
            <h2 className="text-3xl font-bold text-red-600 mb-3">
              Whatever your industry, we are your global freight forwarder
            </h2>
            <div className="w-16 h-0.5 bg-red-600 mx-auto mt-4" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {industries.map((ind, i) => (
              <motion.div key={ind.title} variants={fadeUp} custom={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <FlipCard {...ind} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-14">
            <p className="text-red-500 font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Reasons to trust Shadow Xpress</h2>
            <div className="w-16 h-0.5 bg-red-600 mx-auto mt-5" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w, i) => (
              <motion.div key={w.title} variants={fadeUp} custom={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-gray-800 hover:bg-red-600 rounded-lg p-6 text-center group transition-colors duration-300">
                <div className="w-16 h-16 bg-red-600 group-hover:bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-base mb-3">{w.title}</h3>
                <p className="text-gray-400 group-hover:text-white/80 text-sm leading-relaxed transition-colors duration-300">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-14">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Clients Say</h2>
            <div className="w-16 h-0.5 bg-red-600 mx-auto mt-5" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} variants={fadeUp} custom={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-8">
                <svg className="w-10 h-10 text-red-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
