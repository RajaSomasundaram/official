import Experience from "@/components/Experience";
import Myplace from "@/components/Myplace";
import MyStory from "@/components/MyStory";
import { Metadata } from "next";
import { User, Target, Heart, Award } from "lucide-react";
import StarEffect from "@/components/bg-star";

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

const About = () => {
  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:px-28 relative w-[100%] m-auto bg-[#051117]">
      {/* Hero Section with Enhanced Design */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Night Sky star with SVG */}
        <StarEffect />

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-8xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in-up">
              About me<span className="text-green-500">.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto animate-fade-in-up delay-200 border-l-4 lg:border-l-8 border-green-500 pl-6 lg:pl-8">
              Developing beautiful and functional websites is what I love doing, and{" "}
              <span className="text-green-500 font-semibold">{`that's`} why I give my all</span> in every new challenge.
            </p>
          </div>

          {/* About Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <User className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Passionate Developer</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {`I'm`} deeply passionate about creating exceptional user experiences and bringing innovative ideas to
                life through code.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-400">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Goal-Oriented</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Every project has a clear objective, and I ensure we achieve it through focused development and
                strategic planning.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">User-Focused</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                I prioritize user experience in every decision, ensuring the end product is both beautiful and
                functional.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-600">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Quality Driven</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                I maintain high standards in code quality, performance, and design to deliver exceptional results.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-purple-50 to-gray-50 rounded-2xl p-8 lg:p-12 border border-purple-100 animate-fade-in-up delay-700">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">My Mission</h2>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
                To create{" "}
                <span className="text-green-500 font-semibold">
                  innovative, accessible, and impactful digital solutions
                </span>{" "}
                that not only meet client requirements but exceed expectations. I believe in the power of technology to
                transform businesses and enhance user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections */}
      <Myplace />
      <MyStory />
      <Experience />
    </main>
  );
};

export default About;
