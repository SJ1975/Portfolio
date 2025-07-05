import React from "react";
import { FaCertificate } from "react-icons/fa";

const certifications = [
  {
    title: "Spring Boot Bootcamp",
    organization: "Coding Shuttle",
    link: "https://app.codingshuttle.com/certificate/verify/96TEGSIH", // Replace with real link if available
  },
  {
    title: "Hewlett Packard Enterprise Virtual Experience",
    organization: "Forage",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/fgHAi6dLhpRsGKyyN/da2T3WZCbMAJD7bNB_fgHAi6dLhpRsGKyyN_C8eEpW2ibkLg7wG9k_1734682999907_completion_certificate.pdf",
  },
  {
    title: "Lyft Backend Engineering Program",
    organization: "Forage",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Lyft/xSw9echtixLAoPdsH_Lyft_C8eEpW2ibkLg7wG9k_1690106686949_completion_certificate.pdf",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="bg-gray-950 text-white py-16 px-6" data-aos="fade-left">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Certifications</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition flex items-center space-x-4"
            >
              <FaCertificate className="text-yellow-400 text-3xl" />
              <div className="text-left">
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-sm text-gray-400">{cert.organization}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-sm underline hover:text-blue-300"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
