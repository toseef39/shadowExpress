import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AboutUs from '../assets/aboutUs.jpg';
import AboutUs2 from '../assets/aboutUs.jpg';
import aboutleft from "../assets/aboutleft.jpg"
import aboutleft2 from "../assets/aboutLeft2.jpg"
import BGWorldmap from "../assets/BG-Worldmap-1.png";
import { FaCar } from "react-icons/fa";
import { FaCarBattery } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { LuShirt } from "react-icons/lu";

// ── Animation Variants ──────────────────────────────────────────
const fadeUp   = { hidden:{opacity:0,y:40}, visible:(i=0)=>({ opacity:1, y:0, transition:{duration:0.6,delay:i*0.15,ease:'easeOut'} }) };
const fadeDown = { hidden:{opacity:0,y:-40}, visible:{ opacity:1, y:0, transition:{duration:0.6,ease:'easeOut'} } };
const fadeLeft = { hidden:{opacity:0,x:-60}, visible:{ opacity:1, x:0, transition:{duration:0.7,ease:'easeOut'} } };
const fadeRight= { hidden:{opacity:0,x:60},  visible:{ opacity:1, x:0, transition:{duration:0.7,ease:'easeOut'} } };

// ── Data ────────────────────────────────────────────────────────
const counters = [
  { prefix:'1,', value:'350', suffix:'', label:'Offices & Logistic Facilities' },
  { prefix:'',   value:'80',  suffix:'+', label:'Countries Worldwide' },
  { prefix:'',   value:'65,000', suffix:'+', label:'Professional Workers' },
];

const tabs = [
  { id:'fast',     label:'Fast Service',     content:'Swift and dependable delivery solutions designed to meet your tightest deadlines — every time.' },
  { id:'accuracy', label:'100% Accuracy',    content:'Every shipment handled with precision — ensuring correct, on-time, and error-free deliveries you can trust.' },
  { id:'safety',   label:'Safety & Guarantee', content:'Your shipments are protected with the highest safety standards and backed by our delivery guarantee — peace of mind from start to finish.' },
];

const sliderImages = [
  'https://shadowxpress.com/wp-content/uploads/2025/06/employees-consult-while-working-in-the-warehouse.jpg',
  'https://shadowxpress.com/wp-content/uploads/2025/06/logistics-storage-and-delivery-warehouse-loading-management.jpg',
  'https://shadowxpress.com/wp-content/uploads/2025/06/loading-to-the-aircraft.jpg',
  'https://shadowxpress.com/wp-content/uploads/2025/06/silhouette-of-a-commercial-truck-driving-on-a-highway-at-sunset-.jpg',
];

const industries = [
  { icon:<FaCar />, title:'Automotive',      front:'We understand the urgency and precision required in the automotive supply chain.',           back:'From parts and accessories to complete vehicle logistics, we ensure fast, secure, and compliant transportation. Our network supports just-in-time delivery.' },
  { icon:'💻', title:'Technology',      front:'We specialize in handling high-value, time-sensitive technology shipments with precision.',   back:'From laptops and mobile devices to servers and components, we ensure secure and timely delivery across the globe.' },
  { icon:'🏥', title:'Healthcare',      front:'We provide specialized logistics solutions for the healthcare sector, where timing is critical.', back:'From medical equipment to pharmaceuticals and lab samples, we handle each shipment with strict compliance and care.' },
  { icon:<FaCarBattery />, title:'Renewable Energy',front:'We support the renewable energy sector with logistics built for scale & safety.',           back:'From solar panels and wind turbine components to batteries and control systems, we manage the transport of complex, high-value equipment.' },
  { icon:<BsBuildings />, title:'Industrial',      front:'End-to-end logistics solutions for heavy machinery, raw materials, and large-scale equipment.',back:'Our expertise covers both domestic and international freight, including oversized and specialized cargo.' },
  { icon:<LuShirt />, title:'Retail / Fashion',front:'Fast, reliable logistics solutions tailored for the fast-moving world of retail and fashion.', back:'From designer apparel to seasonal stock and accessories, we ensure timely, damage-free delivery to stores and customers alike.' },
];

// ── Flip Card ───────────────────────────────────────────────────
function FlipCard({ icon, title, front, back }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="relative h-64 cursor-pointer"
      style={{ perspective:'1000px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{ transformStyle:'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-[#FFFFFF] rounded-lg flex flex-col items-center justify-center p-6 text-center"
          style={{ backfaceVisibility:'hidden' }}
        >
          <span className="text-4xl mb-4">{icon}</span>
          <h3 className=" font-bold text-lg text-[#EA0305] mb-3">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{front}</p>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 bg-red-600 rounded-lg flex flex-col items-center justify-center p-6 text-center"
          style={{ backfaceVisibility:'hidden', transform:'rotateY(180deg)' }}
        >
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

// ── Image Slider ────────────────────────────────────────────────
function ImageSlider() {
  const [current, setCurrent] = useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p+1) % sliderImages.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative overflow-hidden rounded-lg h-80">
      {sliderImages.map((src, i) => (
        <img key={i} src={src} alt={`slide-${i}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i===current?'opacity-100':'opacity-0'}`}
        />
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {sliderImages.map((_,i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i===current?'bg-red-600':'bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  );
}

// ── Main Component ──────────────────────────────────────────────
const About = () => {
  const [activeTab, setActiveTab] = useState('fast');

  return (
    <div className="bg-white">

      {/* ── 1. Hero Banner ── */}
      <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <img src={AboutUs} alt="About Us" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <motion.h1
          initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:0.7, ease:'easeOut' }}
          className="relative z-10 text-4xl md:text-5xl font-bold text-white tracking-widest uppercase"
        >
          About Us
        </motion.h1>
      </div>

      {/* ── 2. About Company ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Image collage */}
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{once:true,amount:0.3}}
            className="relative h-[480px]">

            {/* Stat card top-left */}
            <motion.div
              initial={{opacity:0,scale:0.85}} whileInView={{opacity:1,scale:1}}
              transition={{duration:0.5,delay:0.35}} viewport={{once:true}}
              className="absolute top-4 left-10 z-10 bg-white rounded-lg p-6 w-48 shadow-md"
            >
              <p className="text-5xl font-bold text-red-600">25+</p>
              <p className="text-sm text-red-500 font-semibold mt-2">Years of Experience</p>
            </motion.div>

            {/* Main image — top right */}
            <div className="absolute top-0 left-0 right-0 h-[400px] rounded-lg overflow-hidden">
              <img src={aboutleft} alt="Logistics containers" className="w-full h-full object-cover" />
            </div>

            

            {/* Bottom right — small overlap */}
            <motion.div
              initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}}
              transition={{duration:0.6,delay:0.3}} viewport={{once:true}}
              className="absolute bottom-0 right-0 w-[340px] h-[230px] rounded-lg overflow-hidden border-8 border-white shadow-lg"
            >
              <img src={aboutleft2} alt="Logistics workers" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          {/* Right — Text */}
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{once:true,amount:0.3}}>
            <motion.p variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{once:true}}
              className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-3 italic">
              About Company
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{once:true}}
              className="text-3xl md:text-4xl font-bold text-red-600 leading-tight mb-5">
              Logistics that is dedicated to your company
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{once:true}}
              className="text-gray-600 leading-relaxed mb-8">
              We provide customized courier and logistics solutions tailored to your business needs.
              From daily pick-ups to bulk shipments, our team ensures smooth and timely deliveries.
              Let us handle the logistics so you can focus on growing your business.
            </motion.p>

            {/* Global Service */}
            <motion.div variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{once:true}}
              className="flex items-start gap-4 mb-6">
              <div className="shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 496 512">
                  <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm200 248c0 22.5-3.9 44.2-10.8 64.4h-20.3c-4.3 0-8.4-1.7-11.4-4.8l-32-32.6c-4.5-4.6-4.5-12.1.1-16.7l12.5-12.5v-8.7c0-3-1.2-5.9-3.3-8l-9.4-9.4c-2.1-2.1-5-3.3-8-3.3h-16c-6.2 0-11.3-5.1-11.3-11.3 0-3 1.2-5.9 3.3-8l9.4-9.4c2.1-2.1 5-3.3 8-3.3h32c6.2 0 11.3-5.1 11.3-11.3v-9.4c0-6.2-5.1-11.3-11.3-11.3h-36.7c-8.8 0-16 7.2-16 16v4.5c0 6.9-4.4 13-10.9 15.2l-31.6 10.5c-3.3 1.1-5.5 4.1-5.5 7.6v2.2c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8s-3.6-8-8-8H247c-3 0-5.8 1.7-7.2 4.4l-9.4 18.7c-2.7 5.4-8.2 8.8-14.3 8.8H194c-8.8 0-16-7.2-16-16V199c0-4.2 1.7-8.3 4.7-11.3l20.1-20.1c4.6-4.6 7.2-10.9 7.2-17.5 0-3.4 2.2-6.5 5.5-7.6l40-13.3c1.7-.6 3.2-1.5 4.4-2.7l26.8-26.8c2.1-2.1 3.3-5 3.3-8 0-6.2-5.1-11.3-11.3-11.3H258l-16 16v8c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-20c0-2.5 1.2-4.9 3.2-6.4l28.9-21.7c1.9-.1 3.8-.3 5.7-.3C358.3 56 448 145.7 448 256z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-gray-900 font-bold text-base mb-1">Global Service</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Ship worldwide with confidence through our trusted international network. We handle customs, tracking, and timely delivery to over 100 countries.</p>
              </div>
            </motion.div>

            {/* Local Service */}
            <motion.div variants={fadeUp} custom={4} initial="hidden" whileInView="visible" viewport={{once:true}}
              className="flex items-start gap-4 mb-8">
              <div className="shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-gray-900 font-bold text-base mb-1">Local Service</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Fast and reliable delivery within your city or region. Ideal for urgent parcels, retail orders, and daily business needs.</p>
              </div>
            </motion.div>

            <motion.button variants={fadeUp} custom={5} initial="hidden" whileInView="visible" viewport={{once:true}}
              whileHover={{scale:1.03}} whileTap={{scale:0.97}}
              className="bg-red-600 text-white text-sm font-bold uppercase tracking-widest px-8 py-4 rounded hover:bg-red-700 transition-colors">
              Discover More
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Company In Numbers ── */}
      <section className="relative py-20 overflow-hidden">
        <img src={aboutleft} alt="bg" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once:true}}>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our Company In Number</h2>
            </motion.div>
            <div className="grid grid-cols-3 gap-6">
              {counters.map((c,i) => (
                <motion.div key={c.label} variants={fadeUp} custom={i}
                  initial="hidden" whileInView="visible" viewport={{once:true}}
                  className="text-center border-l border-white/30 pl-6 first:border-0 first:pl-0">
                  <p className="text-3xl md:text-4xl font-bold text-red-500">{c.prefix}{c.value}{c.suffix}</p>
                  <p className="text-white/80 text-sm mt-2">{c.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Vision & Strategy ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Tabs */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once:true}}>
            <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-2">Vision & Strategy</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Logistic beyond expectation</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              We don't just deliver goods — we deliver reliability, speed, and service that exceed industry standards and customer expectations.
            </p>
            {/* Tab buttons */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
              {tabs.map(t => (
                <button key={t.id} onClick={() => setActiveTab(t.id)}
                  className={`px-5 py-2.5 text-sm font-semibold transition-colors border-b-2 -mb-px
                    ${activeTab===t.id ? 'border-red-600 text-red-600' : 'border-transparent text-gray-600 hover:text-red-600'}`}>
                  {t.label}
                </button>
              ))}
            </div>
            <motion.p key={activeTab} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.3}}
              className="text-gray-600 leading-relaxed">
              {tabs.find(t=>t.id===activeTab)?.content}
            </motion.p>
          </motion.div>

          {/* Right — Auto Image Slider */}
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{once:true}}>
            <ImageSlider />
          </motion.div>
        </div>
      </section>

      {/* ── 5. Industries / Flip Cards ── */}
      <section className="relative py-20 overflow-hidden">
        <img src={BGWorldmap} alt="bg" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#eee]/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once:true}}
            className="text-center mb-4">
            <h1 className="text-3xl md:text-3xl font-bold text-[#EA0305] mb-3">
              Whatever your industry, we are your global freight forwarder
            </h1>
            <div className="w-16 h-0.5 bg-red-600 mx-auto mt-4" />
          </motion.div>
          <div className="grid grid-cols-1 text-[#EA0305] sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {industries.map((ind,i) => (
              <motion.div key={ind.title} variants={fadeUp} custom={i}
                initial="hidden" whileInView="visible" viewport={{once:true}}>
                <FlipCard {...ind} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;