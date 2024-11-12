// src/components/CertificationGrid.jsx
export default function CertificationGrid({ certifications, openModal }) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-500 mt-2">Date: {cert.date}</p>
            <p
              onClick={() => openModal(cert.image)}
              className="text-blue-600 text-sm mt-2 cursor-pointer hover:underline"
            >
              View details
            </p>
          </div>
        ))}
      </div>
    );
  }
  