import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="border border-black-500 p-4 rounded-lg col-span-2  w-full ">
      <h2 className="text-xl font-bold mb-4 ">Contact</h2>

      <div className="mb-4">
        <label className="text-sm font-semibold ">Email</label>
        <div className="mt-1  w-full border border-black-500 rounded-md p-2 text-gray-500 text-sm">
          Allenwalterfiestada@Gmail.com
        </div>
      </div>

      <div className="mb-4" >
        <label className="text-sm font-semibold ">Contact Number</label>
        <div className="mt-1  w-full border border-black-500 rounded-md p-2 text-gray-500 text-sm">
          (639) 487-4276-63
        </div>
      </div>

      <h3 className="text-sm font-semibold mb-4 ">Social Links</h3>
      <div className="flex  gap-6">
        <a
          href="https://github.com/AllenDG"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 hover:bg-gray-200  rounded-full transition duration-200"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/allenwalterdg/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 hover:bg-gray-200  rounded-full transition duration-200"
        >
          <FaLinkedin className="w-6 h-6 " />
        </a>
        <a
          href="https://www.instagram.com/pickaro_/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 hover:bg-gray-200  rounded-full transition duration-200"
        >
          <FaInstagram className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
