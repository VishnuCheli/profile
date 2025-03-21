import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a192f] text-gray-400 py-4 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Vishnu Neduncheliyan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
