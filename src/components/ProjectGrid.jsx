export default function ProjectGrid({ projects }) {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="border border-gray-300 rounded-lg p-4 flex flex-col justify-between bg-white shadow-md"
        >
          {/* Project Title */}
          <h3 className="text-lg font-semibold text-gray-800">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="text-gray-600 mt-2">{project.description}</p>

          {/* View Button */}
          <button
            onClick={() => window.open(project.viewLink, "_blank")}
            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
}
