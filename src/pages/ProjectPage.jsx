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
          className={`py-2 px-4 rounded-lg text-white ${
            filter === "Mockup" ? "bg-blue-500" : "bg-gray-300"
          }`}
        >
          Mockups
        </button>
        <button
          onClick={() => setFilter("System")}
          className={`py-2 px-4 rounded-lg text-white ${
            filter === "System" ? "bg-blue-500" : "bg-gray-300"
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
