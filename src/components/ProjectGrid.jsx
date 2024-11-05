import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectGrid({ projects }) {
  return (
    <section className=" p-4 rounded-lg col-span-3 w-full">
     
      <div className="grid grid-cols-1  sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-black-500 rounded-md p-3 transition-transform duration-200 hover:shadow-lg hover:-translate-y-1 mb-4" // Add mb-4 for mobile margin
          >
            {/* Project Title */}
            <h3 className="font-bold">{project.title}</h3>

            {/* Project Description */}
            <p className="text-sm text-gray-500 mt-2">{project.description}</p>

            {/* GitHub and Vercel Links */}
            <div className="flex space-x-4 mt-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800"
              >
                <FaExternalLinkAlt className="w-5 h-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
