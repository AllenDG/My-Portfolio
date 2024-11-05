import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import projects from "@/data/projects.json"; // Adjust the path as needed

export default function RecentProject() {
  return (
    <section className="border border-black-500 p-4 rounded-lg col-span-3 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Recent Projects</h2>
        <Link to="/project" className="hover:underline text-xs">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-black-500 rounded-md p-4 transition-transform duration-200 hover:shadow-lg hover:-translate-y-1"
          >
            {/* Wrap project name in Link for navigation */}
            <Link
              to="/project/"
              className="font-bold hover:underline"
            >
              {project.name}
            </Link>
            <p className="text-sm text-gray-500">{project.description}</p>
            <div className="flex space-x-4 mt-2">
              <Link
                to={project.githubUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="inline-block w-4 h-4 hover:text-gray-800" />
              </Link>
              <Link
                to={project.liveUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt className="inline-block w-4 h-4 hover:text-gray-800" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
