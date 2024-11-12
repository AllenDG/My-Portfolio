import { useState } from "react";
import { Link } from "react-router-dom"; // For React Router's Link component
import certifications from "@/data/certifications.json"; // Adjust path as needed
import CertificationGrid from "@/components/CertificationGrid"; // Adjust path based on your project structure

export default function CertificationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <main className="w-full max-w-3xl mx-auto p-5">
      <header className="flex items-center mb-6">
        <Link to="/" className="hover:text-black-800 mr-3">
          &larr; Back
        </Link>
      </header>
      <h1 className="text-4xl font-extrabold pb-10">Certifications</h1>

      {/* Certifications Grid */}
      <CertificationGrid
        certifications={certifications}
        openModal={openModal}
      />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
          <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full transform transition-transform duration-300">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              aria-label="Close Modal"
            >
              &times;
            </button>
            <img
              src={currentImage}
              alt="Certification"
              className="rounded-lg w-full h-auto shadow-lg"
            />
          </div>
        </div>
      )}
    </main>
  );
}
