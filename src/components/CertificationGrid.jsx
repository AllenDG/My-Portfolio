// src/components/CertificationGrid.jsx
export default function CertificationGrid({ certifications, openModal }) {
  return (
    <div className="grid gap-5  ">
      {certifications.map((cert) => (
        <div
          key={cert.id}
          className="border border-black-500 p-4 rounded-lg shadow hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1 "
        >
          <h3 className="text-lg font-semibold ">{cert.title}</h3>
          <p className="text-sm  mt-2">Date: {cert.date}</p>
          <p
            onClick={() => openModal(cert.image)}
            className=" text-sm mt-2 cursor-pointer hover:underline"
          >
            View details
          </p>
        </div>
      ))}
    </div>
  );
}
