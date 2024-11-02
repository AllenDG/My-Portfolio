export default function ProjectGrid({ projects }) {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {projects.map((project) => (
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
  );
}
