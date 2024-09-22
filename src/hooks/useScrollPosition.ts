import { useState, useEffect } from 'react';
import { sections } from '@/constants/navs';

const useScrollPosition = () => {
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

  return { activeSection };
};

export default useScrollPosition;
