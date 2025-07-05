import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gray-950 text-white flex flex-col items-center justify-center z-[9999]">
      <FaSpinner className="animate-spin text-4xl text-blue-500 mb-4" />
      <div className="text-sm opacity-70 tracking-wide">Loading Portfolio...</div>
    </div>
  );
};

export default Loader;
