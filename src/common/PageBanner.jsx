// import { motion } from "framer-motion";
// import bannerImg from "../assets/aboutUs.jpg";

// export default function PageBanner({ title }) {
//   const servicebg = "https://shadowxpress.com/wp-content/uploads/2025/07/1734369282492.jpg"
//   const teambg = "https://shadowxpress.com/wp-content/uploads/2025/08/imgi_22_Strategies-to-Minimize-Meetings-in-the-Workplace-1.jpg"

//   return (
//     <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
//       <img src={servicebg} alt={title} className="absolute inset-0 w-full h-full object-cover" />
//       <div className="absolute inset-0 bg-black/60" />
//       <motion.h1
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//         className="relative z-10 text-4xl md:text-5xl font-bold text-white tracking-widest uppercase text-center px-4">
//         {title}
//       </motion.h1>
//     </div>
//   );
// }
import { motion } from "framer-motion";
import aboutBg from "../assets/aboutUs.jpg";

const servicebg = "https://shadowxpress.com/wp-content/uploads/2025/07/1734369282492.jpg";
const teambg = "https://shadowxpress.com/wp-content/uploads/2025/08/imgi_22_Strategies-to-Minimize-Meetings-in-the-Workplace-1.jpg";

// saari images aik jagah, key ke saath
const backgrounds = {
  service: servicebg,
  team: teambg,
  about: aboutBg,
};

export default function PageBanner({ title, bg = "service" }) {
  // agar koi direct URL de de to wo chale, warna key se uthao, warna service default
  const bgImage = backgrounds[bg] || bg || servicebg ;

  return (
    <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
      <img src={bgImage} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/60" />
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 text-4xl md:text-5xl font-bold text-white tracking-widest uppercase text-center px-4"
      >
        {title}
      </motion.h1>
    </div>
  );
}