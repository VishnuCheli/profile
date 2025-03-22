import React from "react";

import HBLogo from "../assets/HB.png"; // Replace with actual GMU logo
import GTLogo from "../assets/GT.png"; // Add another university if needed

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center py-8"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-6 w-full">
        {/* Section Header - Left Aligned */}
        <div className="mb-8 w-full">
          <p className="text-4xl font-bold inline border-b-4 border-[#82d0cb] text-left">
            Experience
          </p>
        </div>

        {/* Experience Tiles - Stacked */}
        <div className="flex flex-col gap-8">
          {/* George Mason University Tile */}
          <div className="bg-[#112240] p-6 rounded-lg shadow-md flex items-center gap-6">
            {/* Logo */}
            <img
              className="w-24 h-24 bg-[#0000] object-contain"
              src={HBLogo}
              alt="Highbrow Technology Inc. Logo"
            />

            {/* Details */}
            <div>
              {/* Company & Location - Grid Layout */}
              <div className="grid grid-cols-2 sm:grid-cols-2">
                <h3 className="text-2xl font-semibold text-white">
                  Highbrow Technology Inc.
                </h3>
                <h3 className="text-md font-semibold text-white text-right">
                  Remote, USA
                </h3>
              </div>

              <p className="text-gray-400 text-lg">Software Developer</p>
              <p className="text-gray-400 text-sm">August, 2024 - Present</p>

              {/* Coursework Tiles */}
              {/* Bullet Points */}
              <ul className="list-disc list-inside mt-3 text-gray-300 text-sm space-y-4">
                <li>
                  Collaborated with cross-functional teams to annotate and
                  curate over 500K data points for LLM training using RLHF,
                  achieving a data accuracy rate of 98%.
                </li>
                <li>
                  Developed Python ETL pipelines with Pandas and NumPy to
                  categorize data and identify duplicates across 500+ datasets,
                  reducing redundancy and improving review efficiency by 40%.
                </li>
                <li>
                  Implemented an automation tool using browser dev tools for
                  network inspection, enabling real-time spreadsheet updates
                  with &lt;1% error rate, eliminating manual data retrieval,
                  improving productivity, and providing precise task metrics
                  across 'pending', 'completed', and 'reviewed' stages.
                </li>
                <li>
                  Engineered API-driven AI workflows, integrating query
                  classification, response scoring, and fallback handling,
                  enhancing real-time data retrieval success by 25%. Optimized
                  RESTful API interactions with Requests and FastAPI, structured
                  data processing with JSON and Pandas.
                </li>
              </ul>
            </div>
          </div>

          {/* Another Institution Tile (If Applicable) */}
          <div className="bg-[#112240] p-6 rounded-lg shadow-md flex items-center gap-6">
            {/* Logo */}
            <img
              className="w-24 h-24 bg-[#ffff] object-contain"
              src={GTLogo}
              alt="Gustovalley Technovations LLC Logo"
            />

            {/* Details */}
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-2">
                <h3 className="text-2xl font-semibold text-white">
                  Gustovalley Technovations LLC
                </h3>
                <h3 className="text-md font-semibold text-white text-right">
                  Hosur, India
                </h3>
              </div>
              <p className="text-gray-400 text-lg">Full Stack, Intern</p>
              <p className="text-gray-400 text-sm">
                November, 2020 - January, 2021
              </p>

              {/* Coursework Tiles */}
              {/* Bullet Points */}
              <ul className="list-disc list-inside mt-3 text-gray-300 text-sm space-y-4">
                <li>
                  Developed a full-stack web application using Angular
                  (TypeScript) and Laravel (PHP), optimizing Blade template
                  rendering and managing 100K+ records in MySQL via phpMyAdmin.
                  Used VS Code, Git, and CoreFTP for deployment, ensuring 99.9%
                  uptime.
                </li>
                <li>
                  Implemented a JWT-based authentication system with RBAC and
                  middleware protections, reducing unauthorized access and
                  cutting login response time by at least 50%, supporting 10K+
                  concurrent users. Integrated Mailtrap for email testing and
                  Slack for collaboration.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
