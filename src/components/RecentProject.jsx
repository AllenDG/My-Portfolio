import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function RecentProject() {
  return (
    <section className=" border border-black-500 p-4 rounded-lg  col-span-3 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Recent Projects</h2>
        <a
          href="/projects" // Change this to your actual projects page URL
          className=" hover:underline text-xs"
        >
          View All
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {/* Project 1 */}
        <div className="border border-black-500 rounded-md p-4 transition-transform duration-200 hover:shadow-lg hover:-translate-y-1">
          <h3 className="font-bold">Dormitory</h3>
          <p className="text-sm text-gray-500">
            an app connecting students with affordable nearby housing.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/username/project1"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-800"
            >
              <FaGithub className="inline-block w-4 h-4" />
            </a>
            <a
              href="https://project1.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-800"
            >
              <FaExternalLinkAlt className="inline-block w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="border border-black-500 rounded-md p-4 transition-transform duration-200 hover:shadow-lg hover:-translate-y-1">
          <h3 className="font-bold">Mathwise</h3>
          <p className="text-sm text-gray-500">
            an app that teaches mathematics through engaging games.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/username/project2"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-800"
            >
              <FaGithub className="inline-block w-4 h-4" />
            </a>
            <a
              href="https://project2.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-800"
            >
              <FaExternalLinkAlt className="inline-block w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="border border-black-500 rounded-md p-4 transition-transform duration-200 hover:shadow-lg hover:-translate-y-1">
          <h3 className="font-bold">Parkhub</h3>
          <p className="text-sm text-gray-500">
            an IoT solution that enhances parking efficiency using Arduino
            technology.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/username/project3"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-800"
            >
              <FaGithub className="inline-block w-4 h-4" />
            </a>
            <a
              href="https://project3.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-800"
            >
              <FaExternalLinkAlt className="inline-block w-4 h-4" />
            </a>
          </div>
        </div>
        {/* Project 4 */}
        <div className="border border-black-500 rounded-md p-4  hover:-translate-y-1">
       
         
        </div>
      </div>
    </section>
  );
}
