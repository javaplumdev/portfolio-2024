import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex space-x-6">
      <FaInstagram size="28" />
      <FaFacebook size="28" />
      <FaLinkedin size="28" />
      <FaGithub size="28" />
    </div>
  );
};

export default Footer;
