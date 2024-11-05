import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectGrid({ projects }) {
  return (
    <section className="border border-black-500 p-4 rounded-lg col-span-3 w-full">
      <div className="flex justify-between items-center mb-4">
        
      </div>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-black-500 rounded-md p-4 transition-transform duration-200 hover:shadow-lg hover:-translate-y-1"
          >
            {/* Project Title */}
            <h3 className="font-bold text-gray-800">{project.title}</h3>

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
