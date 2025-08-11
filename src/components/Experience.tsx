import Link from "next/link";
import React from "react";
import { Calendar, MapPin, ExternalLink, CheckCircle } from "lucide-react";
import StarEffect from "@/components/bg-star";
import { LINKS } from "@/components/helpers";

const Experience = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Night Sky star with SVG */}
      <StarEffect />
      <div className="relative z-10 border border-sky-100 p-8 lg:p-12 shadow-sm rounded-2xl">
        {/* Section Header */}
        <div className="text-center lg:text-left mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-sky-100 mb-6 animate-fade-in-up">
            Experience<span className="text-emerald-500">.</span>
          </h1>
          <p className="text-xl text-sky-100 max-w-3xl animate-fade-in-up delay-200">
            Software and Integration Developer with expertise in building scalable web applications and seamless API
            integrations across modern tech stacks.
          </p>
        </div>

        {/* Experience Card */}
        <div className="bg-transparent shadow-sm overflow-hidden animate-fade-in-up delay-300">
          {/* <div className="p-8 lg:p-12"> */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Company Info Section */}
            <div className="lg:w-1/3">
              <div className="space-y-6">
                {/* Company Logo/Name */}
                <div className="space-y-4">
                  <Link
                    href={LINKS.Konnectify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-2xl lg:text-3xl font-bold text-sky-100 hover:text-emerald-500 transition-colors duration-300"
                  >
                    Konnectify
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                  <br />
                  {/* Position Badge */}
                  <div className="inline-block bg-sky-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-600">
                    Software Engineer
                  </div>
                </div>

                {/* Duration & Location */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sky-100">
                    <Calendar className="w-5 h-5 text-emerald-500" />
                    <span className="font-medium">March 2023 - Present</span>
                  </div>
                  <div className="flex items-center gap-3 text-sky-100">
                    <MapPin className="w-5 h-5 text-emerald-500" />
                    <span>Chennai / India</span>
                  </div>
                </div>

                {/* Skills Used */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-sky-100">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Node.js",
                      "Next.js",
                      "NestJS",
                      "Tailwind CSS",
                      "Firebase",
                      "TypeScript",
                      "Azure DevOps",
                      "GCP",
                    ].map((tech, index) => (
                      <span
                        key={tech}
                        className="bg-sky-100 text-black px-3 py-1 rounded-full text-sm font-medium hover:bg-emerald-100 hover:text-emerald-700 transition-colors duration-200"
                        style={{ animationDelay: `${400 + index * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Details */}
            <div className="lg:w-2/3">
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-sky-100">
                  Software Engineer <span className="text-emerald-500">@ Konnectify</span>
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 group">
                    <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <p className="text-sky-100 text-lg leading-relaxed">
                      Designed and implemented custom integrations with third-party applications, ensuring seamless
                      connectivity across platforms. Created and maintained IPaaS connectors for efficient data exchange
                      between SaaS systems.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <p className="text-sky-100 text-lg leading-relaxed">
                      Developed and optimised backend services (Node.js, NestJS) and APIs to support large-scale
                      integration workflows. Built responsive frontend forms (Next.js, React) connected to real-time
                      data processing pipelines.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <p className="text-sky-100 text-lg leading-relaxed">
                      Integrated apps using triggers and webhooks, enabling real-time sync between Slack, ZohoBooks,
                      Google Sheets, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
