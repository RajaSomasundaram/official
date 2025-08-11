import React from "react";
import { BookOpen, GraduationCap, Briefcase, Heart, Star } from "lucide-react";
import StarEffect from "@/components/bg-star";
// import Link from "next/link";
// import { Download } from "lucide-react";

const MyStory = () => {
  const storyTimeline = [
    {
      year: "2018 - 2020",
      title: "Higher Secondary Education",
      description:
        "Completed Higher Secondary Certificate (H.S.C) at Government Vinobha Higher Secondary School, Erode, building a strong foundation in analytical thinking and problem-solving skills.",
      icon: BookOpen,
      color: "from-purple-500 to-green-500",
    },
    {
      year: "2020 - 2023",
      title: "Undergraduate Studies",
      description:
        "Earned a Bachelor of Science in Computer System Design from Kongu Engineering College, Erode, gaining hands-on experience in software development, programming, and project building.",
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
    },
    {
      year: "2023 - 2025",
      title: "Postgraduate Studies",
      description:
        "Pursuing a Master of Computer Applications (MCA) at Sengunthar Engineering College, Erode, focusing on advanced software engineering, integration solutions, and scalable web application development.",
      icon: Briefcase,
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Night Sky star with SVG */}
      <StarEffect />

      <div className="relative z-10">
        {/* 1. Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-sky-100 mb-6 animate-fade-in-up">
            My Story<span className="text-emerald-500">.</span>
          </h1>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto animate-fade-in-up delay-200">
            A journey of passion, learning, and growth in the world of frontend development, from humble beginnings to
            creating impactful digital solutions.
          </p>
        </div>

        {/* 2. Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-200 to-emerald-600 transform -translate-x-1"></div>

          <div className="space-y-12">
            {storyTimeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={item.year} className="relative lg:grid lg:grid-cols-2 lg:gap-8 ">
                  {/* Card */}
                  <div className={`${isEven ? "lg:col-start-2" : "lg:col-start-1"} lg:text-left`}>
                    <div className="bg-transparent rounded-2xl shadow-lg border-2 border- border-sky-100 p-6 lg:p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                      <div
                        className={`inline-block bg-gradient-to-r border-2 border-sky-100 ${item.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}
                      >
                        {item.year}
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-sky-100 mb-3">{item.title}</h3>
                      <p className="text-sky-100 text-base lg:text-lg leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Icon fixed in center line */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-lg border-4 border-sky-100`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up delay-1000">
          <div className="bg-transparent rounded-2xl p-8 lg:p-12 border border-sky-100">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-emerald-500 animate-pulse" />
              <h3 className="text-2xl lg:text-3xl font-bold text-sky-100">Driven by Innovation</h3>
            </div>
            <p className="text-sky-100 text-lg mb-8 max-w-5xl mx-auto">
              Every project is an opportunity to explore new ideas, learn from challenges, and deliver solutions that
              truly make a difference.I’m passionate about building scalable, user-focused applications that combine
              innovation with real-world impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-emerald-500 font-semibold">
                <Star className="w-5 h-5" />
                <span>Let’s build your next big idea together.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
