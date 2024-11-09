import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaWhatsapp, FaGoogle } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-br from-[#000000] from-10% to-[#312e2e] py-3 px-4 flex gap-10 items-center justify-center text-center font-bold text-gray-400">
      <div className="text-sm ">
        © {currentYear} AKIMANA Viateur - All rights reserved
      </div>
      <div className="flex items-center justify-center text-blue-800 gap-6  font-bold">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="mailto:example@email.com"
          className="hover:text-blue-400 transition-colors"
        >
          <FaEnvelope size={24} />
        </a>
        <a
          href="https://wa.me/yourphonenumber"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <FaGoogle size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
