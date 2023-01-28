import React from "react";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-[50%] translate-x-[-50%] whitespace-nowrap p-6 text-gray-600 text-sm">
      Copyright &copy; {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
