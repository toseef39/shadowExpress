import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar        from "./common/Shadowxpressnavbar";
import Footer        from "./Pages/Footer";
import Home          from "./component/Home";
import About         from "./component/About";
import Services      from "./Pages/Services";
import Team          from "./Pages/Team";
import FindJobStatus from "./Pages/FindJobStatus";
import ApplyNow      from "./Pages/ApplyNow";
import Contact       from "./Pages/Contact";
import Admin              from "./Pages/Admin";
import AppointmentLetter  from "./Pages/AppointmentLetter";

const WA_NUMBER = "16478008569";

function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg viewBox="0 0 32 32" fill="white" className="w-8 h-8">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.472 2.027 7.774L0 32l8.469-2.001A15.938 15.938 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.766-1.851l-.485-.288-5.027 1.187 1.234-4.895-.317-.503A13.237 13.237 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.354-1.162-2.719-1.295-.365-.133-.63-.199-.896.199-.265.398-1.029 1.295-1.261 1.56-.232.265-.465.298-.863.1-.398-.2-1.681-.619-3.202-1.977-1.183-1.057-1.982-2.362-2.214-2.76-.232-.398-.025-.613.175-.811.179-.178.398-.465.598-.697.199-.232.265-.398.398-.664.133-.265.066-.498-.033-.697-.1-.199-.896-2.161-1.228-2.959-.323-.776-.651-.671-.896-.683l-.763-.013c-.265 0-.697.1-1.062.498-.365.398-1.394 1.362-1.394 3.323s1.427 3.854 1.626 4.12c.199.265 2.808 4.286 6.803 6.014.951.41 1.693.655 2.271.839.954.303 1.823.26 2.51.158.766-.114 2.354-.962 2.686-1.891.332-.929.332-1.727.232-1.892-.099-.165-.365-.265-.763-.465z"/>
      </svg>
    </a>
  );
}

function Layout() {
  const { pathname } = useLocation();
  const hideChrome = pathname.startsWith("/admin") || pathname.startsWith("/appointment-letter");

  return (
    <>
      {!hideChrome && <Navbar />}
      <Routes>
        <Route path="/"                                    element={<Home />}               />
        <Route path="/about"                               element={<About />}              />
        <Route path="/services"                            element={<Services />}           />
        <Route path="/team"                                element={<Team />}               />
        <Route path="/find-job-status"                     element={<FindJobStatus />}      />
        <Route path="/apply"                               element={<ApplyNow />}           />
        <Route path="/contact"                             element={<Contact />}            />
        <Route path="/admin"                               element={<Admin />}              />
        <Route path="/appointment-letter/:passportNumber"  element={<AppointmentLetter />}  />
      </Routes>
      {!hideChrome && <Footer />}
      {!hideChrome && <WhatsAppButton />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
