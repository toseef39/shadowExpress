// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import aboutImg from "../assets/aboutUs.jpg";
// import aboutleft from "../assets/aboutleft.jpg"
// import aboutleft2 from "../assets/aboutleft2.jpg"
// import BGWorldmap from "../assets/BG-Worldmap-1.png";
// import { FaCar } from "react-icons/fa";
// import { FaCarBattery } from "react-icons/fa";
// import { BsBuildings } from "react-icons/bs";
// import { LuShirt } from "react-icons/lu";
// import fly1 from "../assets/fly1.jpg";
// import fly2 from "../assets/fly2.jpg";
// import fly3 from "../assets/fly3.jpg";
// import fly4 from "../assets/fly4.jpg";
// import fly5 from "../assets/fly5.jpg";
// import fly6 from "../assets/fly6.jpg";
// import fly7 from "../assets/fly7.jpg";
// import fly8 from "../assets/fly8.jpg";
// import mang1 from "../assets/mang1.avif";
// import mang2 from "../assets/mang2.avif";
// import mang3 from "../assets/mang3.jpg";
// import mang4 from "../assets/mang4.webp";
// import mang5 from "../assets/mang5.webp";
// import mang6 from "../assets/mang6.webp";
// import shaw1 from "../assets/shaw1.png";
// import shaw2 from "../assets/shaw2.png";
// import shaw3 from "../assets/shaw3.png";
// import shaw4 from "../assets/shaw4.png";
// import shaw5 from "../assets/shaw5.png";
// import shaw6 from "../assets/shaw6.png";
// import head1 from "../assets/head1.png";
// import head2 from "../assets/head2.svg";
// import head3 from "../assets/head3.png";
// import head4 from "../assets/head4.webp";
// import head5 from "../assets/head5.png";
// import head6 from "../assets/head6.jpg";

// // ── Animation Variants ──────────────────────────────────────────
// const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" } }),
// };
// const fadeLeft = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } };
// const fadeRight = { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } };

// // ── Data ────────────────────────────────────────────────────────
// const heroSlides = [
//     "https://shadowxpress.com/wp-content/uploads/2025/07/pexels-sevenstormphotography-443383-scaled.jpg",
//     "https://shadowxpress.com/wp-content/uploads/2025/06/loading-to-the-aircraft.jpg",
//     "https://shadowxpress.com/wp-content/uploads/2025/06/logistics-storage-and-delivery-warehouse-loading-management.jpg",
// ];

// const bottombg = "https://shadowxpress.com/wp-content/uploads/2025/06/contact-banner.jpg"

// const highlights = [
//     {
//         icon: (
//             <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
//             </svg>
//         ),
//         title: "Speed You Can Rely On",
//         desc: "Same-day and next-day delivery options to meet your tightest deadlines.",
//     },
//     {
//         icon: (
//             <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//             </svg>
//         ),
//         title: "Real-Time Tracking",
//         desc: "Track your parcels at any time via our live GPS tracking system.",
//     },
//     {
//         icon: (
//             <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//         ),
//         title: "Affordable Pricing",
//         desc: "Clear, competitive rates with no hidden fees — quality service at the right price.",
//     },
// ];

// const stats = [
//     { prefix: "1,", value: "350", suffix: "", label: "Offices & Logistic Facilities" },
//     { prefix: "", value: "80", suffix: "+", label: "Countries Worldwide" },
//     { prefix: "", value: "65,000", suffix: "+", label: "Professional Workers" },
// ];

// const whyUs = [
//     {
//         icon: (
//             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//         ),
//         title: "Customer Satisfaction Tools",
//         desc: "Delivering a smooth, transparent, and reassuring experience at every step.",
//     },
//     {
//         icon: (
//             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
//             </svg>
//         ),
//         title: "Freight Payment Options",
//         desc: "Multiple secure payment methods to fit your business needs and preferences.",
//     },
//     {
//         icon: (
//             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//             </svg>
//         ),
//         title: "Management & Reporting",
//         desc: "Real-time reports and performance insights for complete visibility.",
//     },
//     {
//         icon: (
//             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//             </svg>
//         ),
//         title: "Compliance Solutions",
//         desc: "Our expert team ensures adherence to all local and international standards.",
//     },
// ];

// const IMG_TRUCK = "https://shadowxpress.com/wp-content/uploads/2025/06/silhouette-of-a-commercial-truck-driving-on-a-highway-at-sunset-.jpg";
// const IMG_PLANE = "https://shadowxpress.com/wp-content/uploads/2025/06/loading-to-the-aircraft.jpg";
// const IMG_WAREHOUSE = "https://shadowxpress.com/wp-content/uploads/2025/06/logistics-storage-and-delivery-warehouse-loading-management.jpg";
// const IMG_TEAM = "https://shadowxpress.com/wp-content/uploads/2025/06/employees-consult-while-working-in-the-warehouse.jpg";
// const testimonialBg = "https://shadowxpress.com/wp-content/uploads/2025/06/container-ship-global-business-freight-import-export-logistic-transportation-.jpg";
// const services = [
//     { title: "Air Freight", desc: "Fast, secure solutions for urgent and global shipments.", img: fly1 },
//     { title: "Road Transport", desc: "Reliable, cost-effective local and regional deliveries.", img: fly2 },
//     { title: "Ocean Freight", desc: "Affordable solutions for large-volume international shipments.", img: fly3 },
//     { title: "Rail Freight", desc: "Efficient, eco-friendly transport for heavy cargo.", img: fly4 },
//     { title: "Warehousing", desc: "Secure, scalable storage and distribution solutions.", img: fly5 },
//     { title: "Cargo Insurance", desc: "Comprehensive protection against loss and damage.", img: fly6 },
//     { title: "Engineering", desc: "Supply chain optimization solutions for complex industries.", img: fly7 },
//     { title: "Construction", desc: "Professional logistics services protecting goods during transport.", img: fly8 },
// ];

// const team = [
//     { name: "John Maczine", title: "Chief Executive Officer", img: mang1 },
//     { name: "Rebecca Slavin", title: "Chief Executive Officer", img: mang2 },
//     { name: "Kevin Clayton", title: "Shipping Director", img: mang3 },
//     { name: "Jagmohan Singh", title: "HR Manager", img: mang4 },
//     { name: "Susan Castro", title: "Legal Officer", img: mang5 },
//     { name: "Darryl Hatch", title: "General Manager", img: mang6 },
// ];

// const testimonials = [
//     { quote: "Outstanding service! My urgent documents were delivered within hours. Truly impressive!", name: "John Mitchell", location: "Toronto" },
//     { quote: "The reliability is unmatched. They are always on time and incredibly professional.", name: "Sen Mathew", location: "Victoria" },
//     { quote: "They handled all customs clearance and delivered right on schedule. Couldn't be happier!", name: "Richar Swas", location: "Edmonton" },
// ];

// const insights = [
//     { title: "The Future of Supply Chain Management", date: "June 10, 2025", img: shaw1 },
//     { title: "How Air Freight is Reshaping Global Trade", date: "June 8, 2025", img: shaw2 },
//     { title: "Top 5 Tips for Efficient Warehousing", date: "June 5, 2025", img: shaw3 },
//     { title: "Road Transport: Going the Extra Mile", date: "June 3, 2025", img: shaw4 },
//     { title: "Understanding Cargo Insurance Coverage", date: "June 1, 2025", img: shaw5 },
//     { title: "Sustainability in Modern Logistics", date: "May 29, 2025", img: shaw6 },
// ];

// const partners = [
//     { img: head1 }, { img: head2 }, { img: head3 }, { img: head4 }, { img: head5 }, { img: head6 }];

// const industries = [
//     { icon: <FaCar />, title: "Automotive", front: "We understand the urgency and precision required in the automotive supply chain.", back: "From parts and accessories to complete vehicle logistics, we ensure fast, secure, and compliant transportation." },
//     { icon: "💻", title: "Technology", front: "We specialize in handling high-value, time-sensitive technology shipments with precision.", back: "From laptops and mobile devices to servers and components, we ensure secure and timely delivery." },
//     { icon: "🏥", title: "Healthcare", front: "We provide specialized logistics for the healthcare sector, where timing is critical.", back: "From medical equipment to pharmaceuticals and lab samples, we handle each shipment with strict compliance." },
//     { icon: <FaCarBattery />, title: "Renewable Energy", front: "We support the renewable energy sector with logistics built for scale and safety.", back: "From solar panels and wind turbine components to batteries, we manage complex, high-value equipment." },
//     { icon: <BsBuildings />, title: "Industrial", front: "End-to-end logistics solutions for heavy machinery, raw materials, and large-scale equipment.", back: "Our expertise covers both domestic and international freight, including oversized and specialized cargo." },
//     { icon: <LuShirt />, title: "Retail / Fashion", front: "Fast, reliable logistics tailored for the fast-moving world of retail and fashion.", back: "From designer apparel to seasonal stock, we ensure timely, damage-free delivery to stores and customers." },
// ];

// // ── Sub-components ──────────────────────────────────────────────
// function HeroSlider() {
//     const [current, setCurrent] = useState(0);
//     useEffect(() => {
//         const t = setInterval(() => setCurrent(p => (p + 1) % heroSlides.length), 5000);
//         return () => clearInterval(t);
//     }, []);
//     return (
//         <div className="absolute inset-0">
//             {heroSlides.map((src, i) => (
//                 <img key={i} src={src} alt=""
//                     className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
//                 />
//             ))}
//             <div className="absolute inset-0 bg-black/65" />
//         </div>
//     );
// }

// function FlipCard({ icon, title, front, back }) {
//     const [flipped, setFlipped] = useState(false);
//     return (
//         <div className="relative h-64 cursor-pointer" style={{ perspective: "1000px" }}
//             onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}>
//             <div className="relative w-full h-full transition-transform duration-500"
//                 style={{ transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
//                 <div className="absolute inset-0 bg-[#FFFFFF] rounded-lg flex flex-col items-center justify-center p-6 text-center"
//                     style={{ backfaceVisibility: "hidden" }}>
//                     <span className="text-4xl mb-4">{icon}</span>
//                     <h3 className="text-[#EA0305] font-bold text-lg mb-3">{title}</h3>
//                     <p className="text-gray-600 text-sm leading-relaxed">{front}</p>
//                 </div>
//                 <div className="absolute inset-0 bg-red-600 rounded-lg flex flex-col items-center justify-center p-6 text-center"
//                     style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
//                     <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
//                     <p className="text-white text-sm leading-relaxed mb-4">{back}</p>
//                     <button className="border border-white text-white text-xs px-4 py-2 rounded hover:bg-white hover:text-red-600 transition-colors">
//                         Contact Us
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// function ServiceCard({ title, desc, img, index }) {
//     return (
//         <motion.div variants={fadeUp} custom={index}
//             initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
//             className="group relative overflow-hidden rounded-lg bg-gray-900">
//             <img src={img} alt={title}
//                 className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
//             <div className="absolute bottom-0 left-0 right-0 p-5">
//                 <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
//                 <p className="text-gray-300 text-sm mb-3 leading-relaxed">{desc}</p>
//                 <a href="#contact" className="text-red-400 text-sm font-semibold hover:text-red-300 transition-colors flex items-center gap-1">
//                     Contact Us
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                     </svg>
//                 </a>
//             </div>
//         </motion.div>
//     );
// }

// // ── Main Component ──────────────────────────────────────────────
// const Home = () => {
//     const [name, setName] = useState("");

//     return (
//         <div className="bg-white">

//             {/* ── 1. Hero ── */}
//             <section className="relative min-h-screen flex items-center">
//                 <HeroSlider />
//                 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                         className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-4">
//                         Fast · Secure · Affordable
//                     </motion.p>
//                     <motion.h1
//                         initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.7, delay: 0.3 }}
//                         className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
//                         Connect Your Business To A{" "}
//                         <span className="text-red-500">World Of Possibilities</span>
//                     </motion.h1>
//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.4 }}
//                         className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
//                         Fast, secure, and affordable courier services for all delivery needs — from urgent parcels to bulk shipments.
//                     </motion.p>
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.5 }}
//                         className="flex flex-wrap gap-4">
//                         <a href="#track"
//                             className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-wide hover:bg-red-700 transition-colors rounded">
//                             <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                             </svg>
//                             Track Shipment
//                         </a>
//                         <a href="#job-status"
//                             className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wide hover:bg-white hover:text-gray-900 transition-colors rounded">
//                             <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                             </svg>
//                             Find Job Status
//                         </a>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* ── 2. Highlights Band ── */}
//             <section className="bg-gray-900">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700">
//                         {highlights.map((h, i) => (
//                             <motion.div key={h.title} variants={fadeUp} custom={i}
//                                 initial="hidden" whileInView="visible" viewport={{ once: true }}
//                                 className="flex items-start gap-4 px-8 py-8">
//                                 <div className="shrink-0 w-14 h-14 bg-red-600/20 rounded-full flex items-center justify-center">
//                                     {h.icon}
//                                 </div>
//                                 <div>
//                                     <h3 className="text-white font-bold text-base mb-1">{h.title}</h3>
//                                     <p className="text-gray-400 text-sm leading-relaxed">{h.desc}</p>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ── 3. About Teaser ── */}
//             <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//                     <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
//                         className="relative h-[420px]">
//                         <div className="absolute top-0 right-0 left-0 h-[400px] rounded-lg overflow-hidden shadow-lg">
//                             <img src={aboutleft} alt="Logistics operations" className="w-full h-full object-cover" />
//                         </div>
//                         <div className="absolute bottom-0 right-0 w-[270px] h-[250px] rounded-lg overflow-hidden shadow-xl border-9 border-white">
//                             <img src={aboutleft2} alt="Our team" className="w-full h-full object-cover" />
//                         </div>
//                         <div className="absolute top-4 left-10 z-10 bg-white rounded-lg px-15 py-10 text-red-600 shadow-lg">
//                             <p className="text-4xl font-black">25+</p>
//                             <p className="text-sm font-semibold mt-1 leading-tight">Years of<br />Experience</p>
//                         </div>
//                     </motion.div>

//                     <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
//                         <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-3 italic">About Company</p>
//                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
//                             Logistics dedicated to <span className="text-red-600">your company</span>
//                         </h2>
//                         <p className="text-gray-600 leading-relaxed mb-4">
//                             We provide customized courier and logistics solutions tailored to your business needs. From daily pick-ups to bulk shipments, our team ensures smooth and timely deliveries.
//                         </p>
//                         <p className="text-gray-600 leading-relaxed mb-8">
//                             With a presence in 80+ countries and 1,350+ offices worldwide, we are your trusted global logistics partner — handling everything from customs to last-mile delivery.
//                         </p>
//                         <Link to="/about"
//                             className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-widest text-sm hover:bg-red-700 transition-colors rounded">
//                             Discover More
//                             <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                             </svg>
//                         </Link>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* ── 4. Stats Banner ── */}
//             <section className="relative py-20  overflow-hidden">
//                 <img src={IMG_WAREHOUSE} alt="" className="absolute inset-0 w-full h-full object-cover" />
//                 <div className="absolute inset-0 bg-black/78" />
//                 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                         <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
//                             <h2 className="text-3xl md:text-5xl font-medium text-white mb-4">Our Company In Numbers</h2>

//                         </motion.div>
//                         <div className="grid grid-cols-3 gap-6">
//                             {stats.map((s, i) => (
//                                 <motion.div key={s.label} variants={fadeUp} custom={i}
//                                     initial="hidden" whileInView="visible" viewport={{ once: true }}
//                                     className="text-center border-l border-white/20 pl-6 first:border-0 first:pl-0">
//                                     <p className="text-3xl md:text-4xl font-black text-red-500">{s.prefix}{s.value}{s.suffix}</p>
//                                     <p className="text-white/70 text-sm mt-2 leading-tight">{s.label}</p>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* ── 5. Why Choose Us ── */}
//             <section className="bg-gray-900 py-20">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
//                         className="text-center mb-14">
//                         <p className="text-red-500 font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
//                         <h2 className="text-3xl md:text-4xl font-bold text-white">Reasons to trust Shadow Xpress</h2>
//                         <div className="w-16 h-0.5 bg-red-600 mx-auto mt-5" />
//                     </motion.div>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                         {whyUs.map((w, i) => (
//                             <motion.div key={w.title} variants={fadeUp} custom={i}
//                                 initial="hidden" whileInView="visible" viewport={{ once: true }}
//                                 className="bg-gray-800 hover:bg-red-600 rounded-lg p-6 text-center group transition-colors duration-300">
//                                 <div className="w-16 h-16 bg-red-600 group-hover:bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
//                                     {w.icon}
//                                 </div>
//                                 <h3 className="text-white font-bold text-base mb-3">{w.title}</h3>
//                                 <p className="text-gray-400 group-hover:text-white/80 text-sm leading-relaxed transition-colors duration-300">{w.desc}</p>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ── 6. Services Grid ── */}
//             <section id="services" className="py-20 bg-white">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
//                         className="text-center mb-14">
//                         <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
//                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
//                         <div className="w-16 h-0.5 bg-red-600 mx-auto mt-5" />
//                     </motion.div>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                         {services.map((s, i) => (
//                             <ServiceCard key={s.title} {...s} index={i} />
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ── 7. Industries (Flip Cards) ── */}
//             <section className="relative py-20 overflow-hidden">
//                 <img src={BGWorldmap} alt="" className="absolute inset-0 w-full h-full object-cover" />
//                 <div className="absolute inset-0 bg-gray-100/80" />
//                 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
//                         className="text-center mb-4">
//                         <h2 className="text-5xl font-medium text-red-600 mb-3">
//                             Whatever your industry, we are your global freight forwarder
//                         </h2>
//                      <div className="w-16 h-0.5 bg-red-600 mx-auto mt-4" />
//                     </motion.div>
//                     <div className="grid text-[#EA0305] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
//                         {industries.map((ind, i) => (
//                             <motion.div key={ind.title}  variants={fadeUp} custom={i}
//                                 initial="hidden" whileInView="visible" viewport={{ once: true }}>
//                                 <FlipCard {...ind} />
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ── 8. Team ── */}
//             <section id="team" className="bg-gray-50 py-20">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
//                         className="text-center mb-14">
//                         <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">Our Team</p>
//                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet the Management</h2>
//                         <div className="w-16 h-0.5 bg-red-600 mx-auto mt-5" />
//                     </motion.div>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {team.map((member, i) => (
//                             <motion.div key={member.name} variants={fadeUp} custom={i}
//                                 initial="hidden" whileInView="visible" viewport={{ once: true }}
//                                 className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
//                                 <div className="relative overflow-hidden">
//                                     <img
//                                         src={member.img}
//                                         alt={member.name}
//                                         className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
//                                     />
//                                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
//                                     <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
//                                         {[
//                                             <svg key="fb" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>,
//                                             <svg key="tw" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>,
//                                             <svg key="yt" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" /></svg>,
//                                         ].map((svg, idx) => (
//                                             <a key={idx} href="#"
//                                                 className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors">
//                                                 {svg}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 </div>
//                                 <div className="p-5 text-center">
//                                     <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
//                                     <p className="text-red-600 text-sm font-medium mt-1">{member.title}</p>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ── 9. Shadow Insights ── */}
//             <section className="py-20 bg-white">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
//                         className="text-center mb-14">
//                         <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">Latest News</p>
//                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Shadow Insights</h2>
//                         <div className="w-16 h-0.5 bg-red-600 mx-auto mt-5" />
//                     </motion.div>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {insights.map((article, i) => (
//                             <motion.div key={article.title} variants={fadeUp} custom={i}
//                                 initial="hidden" whileInView="visible" viewport={{ once: true }}
//                                 className="group cursor-pointer">
//                                 <div className="overflow-hidden rounded-lg mb-4">
//                                     <img src={article.img} alt={article.title}
//                                         className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
//                                 </div>
//                                 <p className="text-gray-400 text-xs mb-2 uppercase tracking-wide">{article.date}</p>
//                                 <h3 className="text-gray-900 font-bold text-base leading-snug mb-3 group-hover:text-red-600 transition-colors">{article.title}</h3>
//                                 <a href="#" className="text-red-600 text-sm font-semibold hover:text-red-700 flex items-center gap-1">
//                                     Read More
//                                     <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                                     </svg>
//                                 </a>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ── 10. Testimonials ── */}
//             {/* <section className="bg-gray-900 py-20">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
//                         className="text-center mb-14">
//                         <p className="text-red-500 font-semibold text-sm uppercase tracking-widest mb-3">Testimonials</p>
//                         <h2 className="text-3xl md:text-4xl font-bold text-white">What they say about us</h2>
//                         <div className="w-16 h-0.5 bg-red-600 mx-auto mt-5" />
//                     </motion.div>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {testimonials.map((t, i) => (
//                             <motion.div key={t.name} variants={fadeUp} custom={i}
//                                 initial="hidden" whileInView="visible" viewport={{ once: true }}
//                                 className="bg-gray-800 rounded-lg p-8">
//                                 <svg className="w-10 h-10 text-red-600/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
//                                     <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
//                                 </svg>
//                                 <p className="text-gray-300 leading-relaxed mb-6 italic">"{t.quote}"</p>
//                                 <div className="flex items-center gap-3">
//                                     <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
//                                         {t.name[0]}
//                                     </div>
//                                     <div>
//                                         <p className="text-white font-bold text-sm">{t.name}</p>
//                                         <p className="text-gray-400 text-xs">{t.location}</p>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section> */}
//             <section className="relative py-20 overflow-hidden">
//     {/* background image + dark overlay */}
//     <img src={testimonialBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
//     <div className="absolute inset-0 bg-red-900/90" />

//     <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
//             className="text-center mb-14">
//             <p className="text-red-500 font-semibold text-sm uppercase tracking-widest mb-3">Testimonials</p>
//             <h2 className="text-3xl md:text-4xl font-bold text-white">What they say about us</h2>
//             <div className="w-16 h-0.5 bg-red-600 mx-auto mt-5" />
//         </motion.div>

//         {/* carousel track */}
//         <div className="overflow-hidden">
//             <motion.div
//                 className="flex gap-8 w-max"
//                 animate={{ x: ["0%", "-50%"] }}
//                 transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
//             >
//                 {[...testimonials, ...testimonials].map((t, i) => (
//                     <div key={i}
//                         className=" backdrop-blur-sm rounded-lg p-8 shrink-0">
    
//                         <p className="text-gray-300 leading-relaxed mb-6 italic">"{t.quote}"</p>
//                         <div className="flex gap-3">
//                             <div>
//                                 <p className="text-whitefont-bold text-sm">{t.name}</p>
//                                 <p className="text-red-600 text-xs">{t.location}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </motion.div>
//         </div>
//     </div>
// </section>


//             {/* ── 11. Partners ── */}
//             <section className="py-16 bg-[#F9F9F9]">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
//                     <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
//                         className="text-center mb-10">
//                         <h2 className="text-2xl font-bold text-gray-900">Our Partners</h2>
//                         <div className="w-12 h-0.5 bg-red-600 mx-auto mt-4" />
//                     </motion.div>

//                     <div
//                         className="overflow-hidden"
//                         style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}
//                     >
//                         <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
//                             {[...partners, ...partners].map((p, i) => (
//                                 <div key={i}
//                                     className="flex items-center justify-center h-60 min-w-[350px]   px-5">
//                                     <img src={p.img} alt={`partner-${i}`} className="h-17 w-auto object-contain" />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* ── 12. Newsletter ── */}
//             <section className="relative py-20 border-t border-gray-200 overflow-hidden">
//                     <img src={bottombg} alt="" className="absolute inset-0 w-full h-full object-cover" />
//                     <div className="absolute inset-0 bg-white/10" />
//                     <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
//                         <h2 className="text-6xl font-medium text-white mb-3">Subscribe Our Newsletter</h2>
//                         <p className="text-white text-lg leading-relaxed mb-6 max-w-lg mx-auto">
//                           A newsletter is a regularly distributed publication, often via email, that contains news, updates, or information related to a specific topic or organization.
//                         </p>
//                         <form className="flex flex-col sm:flex-row max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
//                           <input type="text" placeholder="Your Name"
//                             className="flex-1 px-5 py-3 border bg-white border-red-600 rounded text-sm focus:outline-none focus:border-red-500" />
//                           <button type="submit"
//                             className="px-8 py-3 bg-red-600 text-white font-bold uppercase tracking-wide text-sm rounded hover:bg-red-700 transition-colors">
//                             Sign Up
//                           </button>
//                         </form>
//                       </motion.div>
//                     </div>
//                   </section>

//         </div>
//     );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import aboutImg from "../assets/aboutUs.jpg";
import aboutleft from "../assets/aboutleft.jpg"
import aboutleft2 from "../assets/aboutLeft2.jpg"
import BGWorldmap from "../assets/BG-Worldmap-1.png";
import { FaCar } from "react-icons/fa";
import { FaCarBattery } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { LuShirt } from "react-icons/lu";
import fly1 from "../assets/fly1.jpg";
import fly2 from "../assets/fly2.jpg";
import fly3 from "../assets/fly3.jpg";
import fly4 from "../assets/fly4.jpg";
import fly5 from "../assets/fly5.jpg";
import fly6 from "../assets/fly6.jpg";
import fly7 from "../assets/fly7.jpg";
import fly8 from "../assets/fly8.jpg";
import mang1 from "../assets/mang1.avif";
import mang2 from "../assets/mang2.avif";
import mang3 from "../assets/mang3.jpg";
import mang4 from "../assets/mang4.webp";
import mang5 from "../assets/mang5.webp";
import mang6 from "../assets/mang6.webp";
import shaw1 from "../assets/shaw1.png";
import shaw2 from "../assets/shaw2.png";
import shaw3 from "../assets/shaw3.png";
import shaw4 from "../assets/shaw4.png";
import shaw5 from "../assets/shaw5.png";
import shaw6 from "../assets/shaw6.png";
import head1 from "../assets/head1.png";
import head2 from "../assets/head2.svg";
import head3 from "../assets/head3.png";
import head4 from "../assets/head4.webp";
import head5 from "../assets/head5.png";
import head6 from "../assets/head6.jpg";

// ── Animation Variants ──────────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" } }),
};
const fadeLeft = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } };
const fadeRight = { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } };

// ── Data ────────────────────────────────────────────────────────
const heroSlides = [
    "https://shadowxpress.com/wp-content/uploads/2025/07/pexels-sevenstormphotography-443383-scaled.jpg",
    "https://shadowxpress.com/wp-content/uploads/2025/06/loading-to-the-aircraft.jpg",
    "https://shadowxpress.com/wp-content/uploads/2025/06/logistics-storage-and-delivery-warehouse-loading-management.jpg",
];

const bottombg = "https://shadowxpress.com/wp-content/uploads/2025/06/contact-banner.jpg"

const highlights = [
    {
        icon: (
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "Speed You Can Rely On",
        desc: "Same-day and next-day delivery options to meet your deadlines, every time.",
    },
    {
        icon: (
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: "Real-Time Tracking",
        desc: "Track your parcels at any time via our live GPS tracking system.",
    },
    {
        icon: (
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Affordable Pricing",
        desc: "No hidden fees — just clear, competitive rates for every delivery.",
    },
];

const stats = [
    { prefix: "1,", value: "350", suffix: "", label: "Offices & Logistic Facilities" },
    { prefix: "", value: "80", suffix: "+", label: "Countries Worldwide" },
    { prefix: "", value: "65,000", suffix: "+", label: "Professional Workers" },
];

const whyUs = [
    {
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Customer Satisfaction Tools",
        desc: "Delivering a smooth, transparent, and reassuring experience at every step.",
    },
    {
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
        ),
        title: "Freight Payment Options",
        desc: "Multiple secure payment methods to fit your business needs and preferences.",
    },
    {
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        title: "Management & Reporting",
        desc: "Real-time reports and performance insights for complete visibility.",
    },
    {
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: "Compliance Solutions",
        desc: "Our expert team ensures adherence to all local and international standards.",
    },
];

const IMG_TRUCK = "https://shadowxpress.com/wp-content/uploads/2025/06/silhouette-of-a-commercial-truck-driving-on-a-highway-at-sunset-.jpg";
const IMG_PLANE = "https://shadowxpress.com/wp-content/uploads/2025/06/loading-to-the-aircraft.jpg";
const IMG_WAREHOUSE = "https://shadowxpress.com/wp-content/uploads/2025/06/logistics-storage-and-delivery-warehouse-loading-management.jpg";
const IMG_TEAM = "https://shadowxpress.com/wp-content/uploads/2025/06/employees-consult-while-working-in-the-warehouse.jpg";
const testimonialBg = "https://shadowxpress.com/wp-content/uploads/2025/06/container-ship-global-business-freight-import-export-logistic-transportation-.jpg";
const services = [
    { title: "Air Freight", desc: "Fast, secure solutions for urgent and global shipments.", img: fly1 },
    { title: "Road Transport", desc: "Reliable, cost-effective local and regional deliveries.", img: fly2 },
    { title: "Ocean Freight", desc: "Affordable solutions for large-volume international shipments.", img: fly3 },
    { title: "Rail Freight", desc: "Efficient, eco-friendly transport for heavy cargo.", img: fly4 },
    { title: "Warehousing", desc: "Secure, scalable storage and distribution solutions.", img: fly5 },
    { title: "Cargo Insurance", desc: "Comprehensive protection against loss and damage.", img: fly6 },
    { title: "Engineering", desc: "Supply chain optimization solutions for complex industries.", img: fly7 },
    { title: "Construction", desc: "Professional logistics services protecting goods during transport.", img: fly8 },
];

const team = [
    { name: "John Maczine", title: "Chief Executive Officer", img: mang1 },
    { name: "Rebecca Slavin", title: "Chief Executive Officer", img: mang2 },
    { name: "Kevin Clayton", title: "Shipping Director", img: mang3 },
    { name: "Jagmohan Singh", title: "HR Manager", img: mang4 },
    { name: "Susan Castro", title: "Legal Officer", img: mang5 },
    { name: "Darryl Hatch", title: "General Manager", img: mang6 },
];

const testimonials = [
    { quote: "Outstanding service! My urgent documents were delivered within hours. Truly impressive!", name: "John Mitchell", location: "Toronto" },
    { quote: "The reliability is unmatched. They are always on time and incredibly professional.", name: "Sen Mathew", location: "Victoria" },
    { quote: "They handled all customs clearance and delivered right on schedule. Couldn't be happier!", name: "Richar Swas", location: "Edmonton" },
];

const insights = [
    { title: "The Future of Supply Chain Management", date: "June 10, 2025", img: shaw1 },
    { title: "How Air Freight is Reshaping Global Trade", date: "June 8, 2025", img: shaw2 },
    { title: "Top 5 Tips for Efficient Warehousing", date: "June 5, 2025", img: shaw3 },
    { title: "Road Transport: Going the Extra Mile", date: "June 3, 2025", img: shaw4 },
    { title: "Understanding Cargo Insurance Coverage", date: "June 1, 2025", img: shaw5 },
    { title: "Sustainability in Modern Logistics", date: "May 29, 2025", img: shaw6 },
];

const partners = [
    { img: head1 }, { img: head2 }, { img: head3 }, { img: head4 }, { img: head5 }, { img: head6 }];

const industries = [
    { icon: <FaCar />, title: "Automotive", front: "We understand the urgency and precision required in the automotive supply chain.", back: "From parts and accessories to complete vehicle logistics, we ensure fast, secure, and compliant transportation." },
    { icon: "💻", title: "Technology", front: "We specialize in handling high-value, time-sensitive technology shipments with precision.", back: "From laptops and mobile devices to servers and components, we ensure secure and timely delivery." },
    { icon: "🏥", title: "Healthcare", front: "We provide specialized logistics for the healthcare sector, where timing is critical.", back: "From medical equipment to pharmaceuticals and lab samples, we handle each shipment with strict compliance." },
    { icon: <FaCarBattery />, title: "Renewable Energy", front: "We support the renewable energy sector with logistics built for scale and safety.", back: "From solar panels and wind turbine components to batteries, we manage complex, high-value equipment." },
    { icon: <BsBuildings />, title: "Industrial", front: "End-to-end logistics solutions for heavy machinery, raw materials, and large-scale equipment.", back: "Our expertise covers both domestic and international freight, including oversized and specialized cargo." },
    { icon: <LuShirt />, title: "Retail / Fashion", front: "Fast, reliable logistics tailored for the fast-moving world of retail and fashion.", back: "From designer apparel to seasonal stock, we ensure timely, damage-free delivery to stores and customers." },
];

// ── Sub-components ──────────────────────────────────────────────
function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate()
    useEffect(() => {
        const t = setInterval(() => setCurrent(p => (p + 1) % heroSlides.length), 5000);
        return () => clearInterval(t);
    }, []);
    return (
        <div className="absolute inset-0">
            {heroSlides.map((src, i) => (
                <img key={i} src={src} alt=""
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
                />
            ))}
            <div className="absolute inset-0 bg-black/65" />
        </div>
    );
}

function FlipCard({ icon, title, front, back }) {
    const [flipped, setFlipped] = useState(false);
    return (
        <div className="relative h-64 cursor-pointer" style={{ perspective: "1000px" }}
            onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}>
            <div className="relative w-full h-full transition-transform duration-500"
                style={{ transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
                <div className="absolute inset-0 bg-[#FFFFFF] rounded-lg flex flex-col items-center justify-center p-6 text-center"
                    style={{ backfaceVisibility: "hidden" }}>
                    <span className="text-4xl mb-4">{icon}</span>
                    <h3 className="text-[#EA0305] font-bold text-lg mb-3">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{front}</p>
                </div>
                <div className="absolute inset-0 bg-red-600 rounded-lg flex flex-col items-center justify-center p-6 text-center"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                    <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                    <p className="text-white text-sm leading-relaxed mb-4">{back}</p>
                    <button className="border border-white text-white text-xs px-4 py-2 rounded hover:bg-white hover:text-red-600 transition-colors">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}

function ServiceCard({ title, desc, img, index }) {
    return (
        <motion.div variants={fadeUp} custom={index}
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="group relative overflow-hidden rounded-lg bg-gray-900">
            <img src={img} alt={title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">{desc}</p>
                <Link to="/contact" href="#contact" className="text-red-400 text-sm font-semibold hover:text-red-300 transition-colors flex items-center gap-1">
                    Contact Us
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </motion.div>
    );
}

// One testimonial at a time, auto-advancing with fade/slide + clickable dots
function TestimonialSlider({ items }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setCurrent(p => (p + 1) % items.length), 5000);
        return () => clearInterval(t);
    }, [items.length]);

    const active = items[current];

    return (
        <div className="max-w-2xl mx-auto text-center">
            <div className="relative min-h-[220px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <svg className="w-12 h-12 text-white/40 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-white text-xl md:text-2xl leading-relaxed italic mb-6">
                            "{active.quote}"
                        </p>
                        <p className="text-white font-bold text-base">{active.name}</p>
                        <p className="text-red-300 text-sm">{active.location}</p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* dots */}
            <div className="flex justify-center gap-2 mt-8">
                {items.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-white" : "w-2 bg-white/40"}`}
                    />
                ))}
            </div>
        </div>
    );
}

// ── Main Component ──────────────────────────────────────────────
const Home = () => {
    const [name, setName] = useState("");

    return (
        <div className="bg-white">

            {/* ── 1. Hero ── */}
            <section className="relative min-h-screen flex items-center">
                <HeroSlider />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-4">
                        Fast · Secure · Affordable
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
                        Connect Your Business To A{" "}
                        <span className="text-red-500">World Of Possibilities</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
                        Fast, secure, and affordable courier services for all delivery needs — from urgent parcels to bulk shipments.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-nowrap sm-gap-4 gap-3">
                        <Link to="#track"
                            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 text-xs sm:text-base bg-red-600 text-white font-medium uppercase tracking-wide transition-colors">
                            
                            Track Shipment
                        </Link>
                        <Link to="/find-job-status"
                            className="inline-flex items-center gap-2 sm:px-6 px-5 py-2 text-xs sm:text-base bg-[#212121] text-white font-medium uppercase tracking-wide  transition-colors">
                            
                            Find Job Status
                        </Link>
                    </motion.div>
                </div>
            </section>

           
            {/* ── 2. Highlights + Track Shipment ── */}
<section className="relative bg-[#DEDEDE]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left: Highlights */}
            <div className="lg:col-span-7 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {highlights.map((h, i) => (
                        <motion.div key={h.title} variants={fadeUp} custom={i}
                            initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <h3 className="text-[#EA0305] font-medium text-xl mb-3">{h.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{h.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Right: Track Your Shipment card (hero me overlap hota hai) */}
            <div className="lg:col-span-5">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative z-20 lg:-mt-20 bg-[#212121] p-8 pb-20  shadow-2xl lg:min-h-[4px]">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                        Track Your Shipment
                    </h2>
                    <div className="w-full h-0.5 bg-red-600 mb-8" />

                    <form className="flex" onSubmit={e => e.preventDefault()}>
                        <input
                            type="text"
                            placeholder="Track your shipment"
                            className="flex-1 px-4 py-3 bg-white text-gray-800 text-sm focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="px-5 bg-red-600 hover:bg-red-700 transition-colors flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </form>

                    <p className="text-white text-sm font-semibold mt-5 leading-relaxed">
                        Same-day and next-day delivery options to meet your deadlines, every time.
                    </p>
                </motion.div>
            </div>

        </div>
    </div>
</section>

            {/* ── 3. About Teaser ── */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
                        className="relative h-[420px]">
                        <div className="absolute top-0 right-0 left-0 h-[400px] rounded-lg overflow-hidden shadow-lg">
                            <img src={aboutleft} alt="Logistics operations" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute bottom-0 right-0 w-[270px] h-[250px] rounded-lg overflow-hidden shadow-xl border-9 border-white">
                            <img src={aboutleft2} alt="Our team" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-4 left-10 z-10 bg-white rounded-lg px-15 py-10 text-red-600 shadow-lg">
                            <p className="text-4xl font-black">25+</p>
                            <p className="text-sm font-semibold mt-1 leading-tight">Years of<br />Experience</p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                        <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-3 italic">About Company</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
                            Logistics dedicated to <span className="text-red-600">your company</span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We provide customized courier and logistics solutions tailored to your business needs. From daily pick-ups to bulk shipments, our team ensures smooth and timely deliveries.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            With a presence in 80+ countries and 1,350+ offices worldwide, we are your trusted global logistics partner — handling everything from customs to last-mile delivery.
                        </p>
                        <Link to="/about"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-widest text-sm hover:bg-red-700 transition-colors rounded">
                            Discover More
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ── 4. Stats Banner ── */}
            <section className="relative py-20  overflow-hidden">
                <img src={IMG_WAREHOUSE} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/78" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <h2 className="text-3xl md:text-5xl font-medium text-white mb-4">Our Company In Numbers</h2>

                        </motion.div>
                        <div className="grid grid-cols-3 gap-6">
                            {stats.map((s, i) => (
                                <motion.div key={s.label} variants={fadeUp} custom={i}
                                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                                    className="text-center border-l border-white/20 pl-6 first:border-0 first:pl-0">
                                    <p className="text-3xl md:text-4xl font-black text-red-500">{s.prefix}{s.value}{s.suffix}</p>
                                    <p className="text-white/70 text-sm mt-2 leading-tight">{s.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 5. Why Choose Us ── */}
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
                                    {w.icon}
                                </div>
                                <h3 className="text-white font-bold text-base mb-3">{w.title}</h3>
                                <p className="text-gray-400 group-hover:text-white/80 text-sm leading-relaxed transition-colors duration-300">{w.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 6. Services Grid ── */}
            <section id="services" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="text-center mb-14">
                        <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
                        <div className="w-16 h-0.5 bg-red-600 mx-auto mt-5" />
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((s, i) => (
                            <ServiceCard key={s.title} {...s} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 7. Industries (Flip Cards) ── */}
            <section className="relative py-20 overflow-hidden">
                <img src={BGWorldmap} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gray-100/80" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="text-center mb-4">
                        <h2 className="text-5xl font-medium text-red-600 mb-3">
                            Whatever your industry, we are your global freight forwarder
                        </h2>
                     <div className="w-16 h-0.5 bg-red-600 mx-auto mt-4" />
                    </motion.div>
                    <div className="grid text-[#EA0305] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        {industries.map((ind, i) => (
                            <motion.div key={ind.title}  variants={fadeUp} custom={i}
                                initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <FlipCard {...ind} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 8. Team ── */}
            <section id="team" className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="text-center mb-14">
                        <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">Our Team</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet the Management</h2>
                        <div className="w-16 h-0.5 bg-red-600 mx-auto mt-5" />
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member, i) => (
                            <motion.div key={member.name} variants={fadeUp} custom={i}
                                initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
                                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        {[
                                            <svg key="fb" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>,
                                            <svg key="tw" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>,
                                            <svg key="yt" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" /></svg>,
                                        ].map((svg, idx) => (
                                            <a key={idx} href="#"
                                                className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                                                {svg}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-5 text-center">
                                    <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                                    <p className="text-red-600 text-sm font-medium mt-1">{member.title}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 9. Shadow Insights ── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="text-center mb-14">
                        <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">Latest News</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Shadow Insights</h2>
                        <div className="w-16 h-0.5 bg-red-600 mx-auto mt-5" />
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {insights.map((article, i) => (
                            <motion.div key={article.title} variants={fadeUp} custom={i}
                                initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="group cursor-pointer">
                                <div className="overflow-hidden rounded-lg mb-4">
                                    <img src={article.img} alt={article.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <p className="text-gray-400 text-xs mb-2 uppercase tracking-wide">{article.date}</p>
                                <h3 className="text-gray-900 font-bold text-base leading-snug mb-3 group-hover:text-red-600 transition-colors">{article.title}</h3>
                                <a href="#" className="text-red-600 text-sm font-semibold hover:text-red-700 flex items-center gap-1">
                                    Read More
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 10. Testimonials ── */}
            <section className="relative py-20 overflow-hidden">
                <img src={testimonialBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-red-900/90" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="text-center mb-14">
                        <p className="text-red-300 font-semibold text-sm uppercase tracking-widest mb-3">Testimonials</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">What they say about us</h2>
                        <div className="w-16 h-0.5 bg-white mx-auto mt-5" />
                    </motion.div>

                    <TestimonialSlider items={testimonials} />
                </div>
            </section>

            {/* ── 11. Partners ── */}
            <section className="py-16 bg-[#F9F9F9]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-gray-900">Our Partners</h2>
                        <div className="w-12 h-0.5 bg-red-600 mx-auto mt-4" />
                    </motion.div>

                    <div
                        className="overflow-hidden"
                        style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}
                    >
                        <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
                            {[...partners, ...partners].map((p, i) => (
                                <div key={i}
                                    className="flex items-center justify-center h-60 min-w-[350px] ">
                                    <img src={p.img} alt={`partner-${i}`} className="h-20 w-auto object-contains" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 12. Newsletter ── */}
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
};

export default Home;