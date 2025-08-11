import { Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import profileImg from "../../../public/Raja_S.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import { LINKS } from "@/components/helpers";
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

const Contact = () => {
  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:px-28 relative w-[100%] m-auto bg-[#051117]">
      {/* Hero Section with Enhanced Design */}
      <section className="py-28 relative overflow-hidden">
        {/* Background Night Sky star with SVG */}
        <StarEffect />
        {/* Main Content */}
        <div className="relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Text Section with Enhanced Typography */}
            <div className="text-center lg:text-left lg:w-1/2 space-y-8">
              {/* Header with Animation */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-7xl md:text-6xl font-bold leading-tight animate-fade-in-up">
                  <span className="bg-gradient-to-r from-emerald-500 to-purple-700 bg-clip-text text-transparent animate-fade-in-up delay-200">
                    Get In
                  </span>
                  <span className="text-sky-100 animate-fade-in-up delay-300">Touch</span>
                  <span className="text-emerald-500 animate-fade-in-up delay-400">.</span>
                </h1>
              </div>

              {/* Enhanced Description */}
              <div className="space-y-6">
                <p className="text-sky-100 text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-2xl animate-fade-in-up delay-500">
                  Ready to bring your ideas to life? {`Let's`} collaborate on your next project.
                  {`I'm`} here to help you create{" "}
                  <span className="text-emerald-500 font-semibold">amazing digital experiences</span> that your users
                  will love.
                </p>

                {/* Contact Highlights */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up delay-600">
                  <span className="bg-sky-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium border border-emerald-200">
                    Quick Response
                  </span>
                  <span className="bg-sky-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium border border-emerald-200">
                    Free Consultation
                  </span>
                  <span className="bg-sky-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium border border-emerald-200">
                    Flexible Pricing
                  </span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 animate-fade-in-up delay-700">
                {/* Email */}
                <a
                  href={LINKS.Email}
                  className="group flex items-center gap-4 p-4 bg-transparent rounded-xl shadow-sm border border-sky-100 hover:shadow-md transition-all duration-300 hover:border-purple-200"
                >
                  <div className="p-3 bg-sky-100 rounded-lg hover:bg-emerald-200 transition-colors duration-200">
                    <Mail className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-sky-100 font-medium">Email</p>
                    <p className="text-sky-100 font-semibold">raja2003ss@gmail.com</p>
                  </div>
                </a>

                {/* Phone */}
                {/* <Link
                  href={LINKS.Phone}
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-purple-200"
                >
                  <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors duration-200">
                    <Phone className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500 font-medium">Phone</p>
                    <p className="text-gray-800 font-semibold">+91 72029-17242</p>
                  </div>
                </Link> */}
                {/* Location */}
                <div className="flex items-center gap-4 p-4 bg-transparent rounded-xl shadow-sm border border-sky-100">
                  <div className="p-3 bg-sky-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-sky-100 font-medium">Location</p>
                    <p className="text-sky-100 font-semibold">Bhavani(TK),Erode(DT),Tamilnadu,India</p>
                  </div>
                </div>
                {/* Availability */}
                <div className="flex items-center gap-4 p-4 bg-transparent rounded-xl shadow-sm border border-sky-100">
                  <div className="p-3 bg-sky-100 rounded-lg ">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-sky-100 font-medium">Availability</p>
                    <p className="text-sky-100 font-semibold">Available for new projects</p>
                  </div>
                </div>
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

      {/* Call to Action Section */}
      <section className="py-16 animate-fade-in-up delay-800">
        <div className="bg-transparent rounded-2xl p-8 lg:p-12 border border-sky-100">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageCircle className="w-8 h-8 text-emerald-500" />
              <h2 className="text-2xl lg:text-3xl font-bold text-sky-100">{`Let's`} Start Your Project</h2>
            </div>
            <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
              Whether you have a specific project in mind or just want to discuss possibilities,
              {`I'm`} here to help. {`Let's`} create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={LINKS.Email}
                className="group px-8 py-4 bg-emerald-600 text-sky-100 rounded-xl hover:bg-emerald-500 font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                Send Message
              </a>

              <Link
                href={LINKS.Resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-transparent border-2 border-emerald-500 text-emerald-500 rounded-xl hover:bg-emrald-500 hover:text-sky-100 font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Download Resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
