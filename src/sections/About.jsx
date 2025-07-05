import React from "react";

const About = () => {
  return (
    <section
      id="about" 
      className="bg-gray-900 text-white py-16 px-6" 
      data-aos="fade-up"
      >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          I'm <span className="text-blue-400 font-medium">Sanjeev</span>, a passionate and detail-oriented
          <span className="text-blue-400 font-medium"> Backend Developer</span> with hands-on experience in building secure,
          scalable REST APIs using <strong>Java</strong> and <strong>Spring Boot</strong>. I enjoy solving
          complex problems through clean architecture, solid data structures, and performance-driven development.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed mt-6">
          With experience in tools like <strong>MySQL, MongoDB, Git, Postman, and Docker</strong>, I
          love working on real-world backend systems — whether it’s creating internal tools or designing
          high-performance applications. I’m always learning, building, and improving.
        </p>
      </div>
    </section>
  );
};

export default About;
