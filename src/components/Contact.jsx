import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <div className=" border border-black-500 p-4 rounded-lg w-full col-span-2 ">
      <h2 className="text-xl font-bold mb-2">Contact</h2>

      <div className="mb-4">
        <div className="mt-1 block w-full border   rounded-md p-2 text-gray-700">
          your.email@example.com
        </div>
      </div>

      <div className="mb-4">
        <div className="mt-1 block w-full border  rounded-md p-2 text-gray-700">
          (123) 456-7890
        </div>
      </div>

      <h3 className="text-sm font-semibold mb-2">Social Links</h3>
      <div className="flex gap-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 l hover:bg-gray-700 transition duration-200"
        >
          <FaGithub className="w-5 h-5 " />
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 hover:bg-gray-700 transition duration-200"
        >
          <FaLinkedin className="w-5 h-5 " />
        </a>
        <a
          href="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 hover:bg-gray-700 transition duration-200"
        >
          <FaInstagram className="w-5 h-5 " />
        </a>
      </div>
    </div>
  );
}
