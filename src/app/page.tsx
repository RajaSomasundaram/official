import { Download } from "lucide-react";
import Image from "next/image";
import profileImg from "../../public/Raja_S.png";
import Link from "next/link";
import MyStory from "@/components/MyStory";
import Skils from "@/components/Skils";
import Experience from "@/components/Experience";
import { Metadata } from "next";
import StarEffect from "@/components/bg-star";
import { LINKS } from "@/components/helpers";

export const metadata: Metadata = {
  title: "Raja | Software Engineer Portfolio",
  description:
    "I build scalable web applications and seamless API integrations using modern technologies like Node.js, Next.js, and cloud platforms.",
  keywords: [
    "React Developer",
    "Next.js Developer",
    "React Ionic Developer",
    "JavaScript Expert",
    "TypeScript Developer",
    "Web Application Developer",
    "Responsive Web Design",
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#051117",
};

const Home = () => {
  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:px-28 relative w-[100%] m-auto bg-[#051117]">
      <section className="py-44 relative overflow-hidden">
        {/* Background Night Sky star with SVG */}
        <StarEffect />

        {/* Main Content */}
        <div className="relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <div className="text-center lg:text-left lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <p className="text-2xl lg:text-3xl text-sky-100 font-medium animate-fade-in-up">
                  Hey, {"I'm"} Raja <span className="inline-block animate-bounce">👋🏻</span>
                </p>

                {/* Main Heading with Gradient */}
                <h1 className="text-4xl lg:text-7xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-emerald-500 to-purple-500 bg-clip-text text-transparent animate-fade-in-up delay-200">
                    Software
                  </span>
                  <br />
                  <span className="text-sky-100 animate-fade-in-up delay-400">Developer</span>
                </h1>
              </div>

              {/* Enhanced Description */}
              <div className="space-y-6">
                <p className="text-sky-100 text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-2xl animate-fade-in-up delay-500">
                  I build scalable web applications and seamless API integrations using modern technologies like{" "}
                  <span className="text-emerald-600 font-semibold"> Node.js, Next.js, and cloud platforms. </span>
                </p>

                <div className="flex flex-wrap gap-4"></div>
              </div>

              {/* Enhanced Button Section */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-700">
                <Link
                  href={LINKS.Contact}
                  className="group px-8 py-4 bg-emerald-600 text-black rounded-xl hover:bg-emerald-500 font-semibold transition-all duration-300 transform hover:shadow-lg flex items-center gap-2"
                >
                  Get In Touch
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </Link>

                <Link
                  href={LINKS.Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-transparent border-2 border-gray-300 text-sky-100 rounded-xl hover:border-emerald-600 hover:text-emerald-500 font-semibold transition-all duration-300 transform flex items-center gap-2"
                >
                  <Download size={20} />
                  Download CV
                </Link>
              </div>
            </div>

            {/* Enhanced Image Section */}
            <div className="relative flex items-center justify-center w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 animate-fade-in-up delay-300">
              {/* Main Image Container */}
              <div className="relative w-full h-full border-4 border-transparent shadow-xl overflow-hidden">
                <Image
                  src={profileImg}
                  alt="Raja_Somasundaram"
                  className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections */}
      <Experience />
      {/* <ProjectBanner /> */}
      <Skils />
      <MyStory />
    </main>
  );
};

export default Home;
