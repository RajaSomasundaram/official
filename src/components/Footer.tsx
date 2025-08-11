// import { Download } from "lucide-react";
// import Menubar from "./Menubar";
import SocialsMenu from "./SocialsMenu";
import Link from "next/link";
// import StarEffect from "@/components/bg-star";

const Footer = () => {
  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:px-28 black- relative bg-[#051117] w-full m-auto py-16">
      {/* Background Night Sky star with SVG */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          // Small stars
          { top: "10%", left: "20%", size: 8, delay: "0s" },
          { top: "30%", left: "72%", size: 8, delay: "0.5s" },
          { top: "50%", left: "40%", size: 8, delay: "1s" },
          { top: "25%", left: "52%", size: 8, delay: "1.2s" },
          { top: "60%", left: "85%", size: 8, delay: "0.3s" },
          { top: "40%", left: "15%", size: 8, delay: "1.8s" },
          { top: "75%", left: "45%", size: 8, delay: "2.3s" },
          { top: "95%", left: "99%", size: 8, delay: "2.3s" },
          // Medium stars (3)
          { top: "20%", left: "35%", size: 12, delay: "0.4s" },
          { top: "55%", left: "25%", size: 12, delay: "1.6s" },
          // Big stars (2)
          { top: "5%", left: "89%", size: 18, delay: "0.7s" },
          { top: "80%", left: "32%", size: 18, delay: "1.4s" },
          { top: "10%", left: "54%", size: 18, delay: "0.7s" },
          { top: "90%", left: "71%", size: 18, delay: "0.4s" },
        ].map((star, i) => (
          <svg
            key={i}
            className="absolute twinkle"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
            }}
            width={star.size}
            height={star.size}
            viewBox="0 0 24 24"
            fill="url(#starGradient)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="starGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0.4" />
              </radialGradient>
            </defs>
            <path d="M12 2L14.09 8.26L20.97 8.91L15.45 13.14L17.27 19.9L12 16.77L6.73 19.9L8.55 13.14L3.03 8.91L9.91 8.26L12 2Z" />
          </svg>
        ))}
      </div>
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center md:text-left mb-4">
        {/* Left Section */}
        <section className="flex flex-col items-center md:items-start">
          <h1 className="text-xl md:text-2xl font-semibold text-sky-50">Interested in working together?</h1>
          <div className="mt-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <Link
              href="/contact"
              className="group px-6 py-2 bg-emerald-600 text-black rounded-xl hover:bg-emerald-500 font-semibold transition-all duration-300 transform hover:shadow-lg flex items-center gap-2"
            >
              Get In Touch
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </div>
        </section>

        {/* Center Section - Social Icons */}
        <section className="flex justify-center">
          <SocialsMenu />
        </section>

        {/* Right Section */}
        <section className="flex flex-col items-center md:items-end">
          <h3 className="text-[17px] text-sky-100 text-center md:text-end">
            ©2025 All Rights Reserved.
            <br />
            Made with 💚 by Rajs Somasundaram
          </h3>
        </section>
      </div>
    </main>
  );
};

export default Footer;
