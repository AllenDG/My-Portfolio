import { useState, useEffect } from "react";
import mockups from "@/data/mockups.json"; // Adjust the path based on your project structure
import systems from "@/data/systems.json"; // Adjust the path based on your project structure

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

      {/* Project grid layout */}
      <div className="grid grid-cols-3 gap-4 p-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-300 rounded-lg p-4 flex flex-col justify-between bg-white shadow-md"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {project.title}
            </h3>
            <span className="mt-2 inline-block text-xs font-bold text-white bg-blue-500 rounded-full px-2 py-1">
              {project.type}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
