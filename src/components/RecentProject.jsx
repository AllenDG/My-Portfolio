import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "@/data/projects.json"; // Adjust the path as needed

export default function RecentProject() {
  return (
    <section className="border border-black-500 p-4 rounded-lg col-span-3 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Recent Projects</h2>
        <a
          href="/project" // Change this to your actual projects page URL
          className="hover:underline text-xs"
        >
          View All
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-black-500 rounded-md p-4 transition-transform duration-200 hover:shadow-lg hover:-translate-y-1"
          >
            <h3 className="font-bold">{project.name}</h3>
            <p className="text-sm text-gray-500">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.githubUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800"
              >
                <FaGithub className="inline-block w-4 h-4" />
              </a>
              <a
                href={project.liveUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800"
              >
                <FaExternalLinkAlt className="inline-block w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
