import React from "react";
import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiJenkins,
} from "react-icons/si";
import { BsBraces, BsTools } from "react-icons/bs";
import { MdOutlineApi } from "react-icons/md";

const skills = [
  { name: "Java", icon: <FaJava className="text-orange-500" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
  { name: "REST APIs", icon: <MdOutlineApi className="text-yellow-300" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Jenkins", icon: <SiJenkins className="text-pink-400" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
  { name: "AWS", icon: <FaAws className="text-orange-300" /> },
  { name: "OOP & DSA", icon: <BsBraces className="text-white" /> },
  { name: "Maven", icon: <BsTools className="text-purple-400" /> }, // replacing SiMaven
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-950 text-white py-16 px-6" data-aos="fade-up">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Skills</h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 place-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 hover:scale-105 transition"
            >
              <div className="text-4xl">{skill.icon}</div>
              <span className="text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
