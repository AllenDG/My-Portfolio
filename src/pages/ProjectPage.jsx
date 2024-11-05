import { useState, useEffect } from "react";
import mockups from "@/data/mockups.json"; // Adjust the path based on your project structure
import systems from "@/data/systems.json"; // Adjust the path based on your project structure
import ProjectGrid from "@/components/ProjectGrid"; // Adjust the path based on your project structure

export default function ProjectPage() {
  const [filter, setFilter] = useState("Mockup"); // Default to Mockup
  const [projects, setProjects] = useState([]); // State to manage all projects

  useEffect(() => {
    // Combine mockups and systems into a single project list
    setProjects([...mockups, ...systems]);
  }, []);

  // Filter projects based on the selected type
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.type === filter);

  return (
    <main className="w-full max-w-3xl mx-auto">
      {/* Button group for filtering projects */}
      <div className="flex justify-center mb-4 space-x-4 mt-10">
        <button
          onClick={() => setFilter("Mockup")}
          className={`py-2 px-4 rounded-lg transition-colors duration-200 ${
            filter === "Mockup"
              ? "bg-black text-white"
              : "bg-white text-black border border-gray hover:bg-gray-200"
          }`}
        >
          Mockups
        </button>
        <button
          onClick={() => setFilter("System")}
          className={`py-2 px-4 rounded-lg transition-colors duration-200 ${
            filter === "System"
              ? "bg-black text-white"
              : "bg-white text-black border border-gray hover:bg-gray-200"
          }`}
        >
          Systems
        </button>
      </div>

      {/* Use the ProjectGrid component to display the projects */}
      <ProjectGrid projects={filteredProjects} />
    </main>
  );
}
