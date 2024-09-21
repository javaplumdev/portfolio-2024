import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const sections = ['about', 'experience', 'projects', 'contacts'];

const Line = ({ isActive, section }: { isActive: string; section: string }) => {
  return <div className={`w-12 h-0.5 ${isActive === section ? 'bg-black' : 'bg-red-300'}`}></div>;
};

const Navs = () => {
  const [activeSection, setActiveSection] = useState('');

  // Function to detect which section is in view
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      {sections.map((item) => {
        return (
          <div className="flex items-center space-x-3">
            <Line isActive={activeSection} section={item} />
            <Link href={`#${item}`}>{item}</Link>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Navs;
