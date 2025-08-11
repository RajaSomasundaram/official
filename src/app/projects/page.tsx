import MyProjects from "@/components/MyProjects";
import { Metadata } from "next";
import { Code, Zap, Shield, Lock } from "lucide-react";
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

const Projects = () => {
  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:px-28 relative w-[100%] m-auto bg-[#051117]">
      {/* Enhanced Header Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Night Sky star with SVG */}
        <StarEffect />

        {/* Main Content */}
        <div className="relative z-10">
          {/* Icon and Title Row */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-emerald-500 rounded-xl">
              <Code className="text-sky-100" size={32} />
            </div>
            <div>
              <h1 className="text-4xl lg:text-8xl md:text-6xl font-bold text-sky-100">
                My <span className="text-emerald-500">Best</span> Creations
              </h1>
            </div>
          </div>

          {/* Enhanced Description */}
          <div className="max-w-4xl">
            <p className="text-sky-100 text-xl lg:text-2xl px-2 border-l-4 lg:border-l-8 border-emerald-500 mb-8">
              Designing and Developing Robust and Stylish Web Applications for a Decade and Counting
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {/* <div className="bg-sky-100 p-6 rounded-xl shadow-lg border-2 border-emerald-600">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="text-green-500" size={24} />
                  <h3 className="text-lg font-semibold text-gray-800">Projects Completed</h3>
                </div>
                <p className="text-3xl font-bold text-green-500">3+</p>
              </div> */}

              <div className="bg-sky-100 p-6 rounded-xl shadow-lg border-2 border-emerald-600">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="text-green-500" size={24} />
                  <h3 className="text-lg font-semibold text-gray-800">Technologies</h3>
                </div>
                <p className="text-3xl font-bold text-green-500">8+</p>
              </div>

              <div className="bg-sky-100 p-6 rounded-xl shadow-lg border-2 border-emerald-600">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="text-green-500" size={24} />
                  <h3 className="text-lg font-semibold text-gray-800">Years Experience</h3>
                </div>
                <p className="text-3xl font-bold text-green-500">2.5+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <MyProjects />

      {/* Professional Note Section */}
      <section className="py-16">
        <StarEffect />
        <div className="bg-transparent rounded-2xl p-8 lg:p-12 border border-sky-100">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-emerald-500 rounded-xl">
                <Shield className="text-sky-100" size={24} />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-sky-100">A Note About My Work</h2>
            </div>

            <div className="space-y-4 text-sky-100 leading-relaxed">
              <p className="text-lg">
                While {`I've`} highlighted key projects here, this portfolio showcases only a part of my overall work.
                Many of my most impactful solutions are not publicly displayed due to:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <Lock className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-sky-100 mb-1">Client Privacy</h3>
                    <p className="text-sm text-sky-100">
                      Some projects involve sensitive client data, proprietary workflows, or exclusive integration logic
                      that cannot be shared openly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-sky-100 mb-1">Security Protocols</h3>
                    <p className="text-sm text-sky-100">
                      Enterprise-grade applications often come with strict security guidelines that limit public
                      demonstration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Code className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-sky-100 mb-1">Complex Integrations</h3>
                    <p className="text-sm text-sky-100">
                      Many of my integration projects involve advanced system architectures, API orchestration, and
                      automation pipelines that are hard to fully present here.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Zap className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-sky-100 mb-1">Active Development</h3>
                    <p className="text-sm text-sky-100">
                      Some high-impact tools and migration platforms are still in active development or under NDA
                      agreements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-transparent rounded-lg border-l-4 border-emerald-500">
                <p className="text-sky-100 font-medium">
                  💡 <strong>Want to explore more?</strong> {`I'm`} happy to share additional case studies, migration
                  workflows, and technical deep dives during our conversation to demonstrate my experience in delivering
                  scalable, enterprise-level solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
