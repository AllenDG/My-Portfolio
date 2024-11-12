import { useState } from "react";
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
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Certifications</h1>
      </div>

      {/* Certifications Grid */}
      <CertificationGrid
        certifications={certifications}
        openModal={openModal}
      />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
            <img
              src={currentImage}
              alt="Certification"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      )}
    </main>
  );
}
