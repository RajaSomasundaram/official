import React from "react";
import { Code, Database, Users, Cable, Zap, Smartphone, Globe, Shield } from "lucide-react";
import StarEffect from "@/components/bg-star";

const Skils = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Node.js", "NestJS", "SQL"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Database,
      title: "Tools & Platforms",
      skills: [
        "Azure DevOps",
        "Google Cloud Platform",
        "Firebase",
        "Postman",
        "Git",
        "GitHub",
        "Visual Studio Code (IDE)",
        "Webstorm (IDE)",
        "Slack",
        "Jira",
      ],
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Cable,
      title: "API & Integration",
      skills: ["REST API Development", "OAuth", "Webhooks", "SaaS Integrations", "Triggers & Actions"],
      color: "from-purple-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Problem-Solving ", "Troubleshooting", "Technical Documentation", "Team Collaboration", "Client Demos"],
      color: "from-orange-400 to-orange-500",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Night Sky star with SVG */}
      <StarEffect />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-sky-100 mb-6 animate-fade-in-up">
            Skills<span className="text-emerald-500">.</span>
          </h1>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Combining technical proficiency and collaborative skills to deliver scalable, high-quality solutions across
            web, cloud, and integration platforms.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-sky-100 rounded-2xl shadow-lg border border-sky-100 overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center gap-3 mb-3">
                  <category.icon className="w-8 h-8" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="w-12 h-1 bg-sky-100 rounded-full opacity-80"></div>
              </div>

              {/* Skills List */}
              <div className="p-6">
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-black group-hover:text-gray-800 transition-colors duration-200"
                      style={{
                        animationDelay: `${500 + index * 100 + skillIndex * 50}ms`,
                      }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full flex-shrink-0`}></div>
                      <span className="text-sm lg:text-base font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skils;
