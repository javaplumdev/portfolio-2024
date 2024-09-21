import React from 'react';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contacts from './Contacts';

import Sidenav from '../components/layouts/Sidenav';

const Landing = () => {
  return (
    <div className="container bg-red-300 w-[1290px]">
      <div className="grid grid-cols-2 gap-12">
        <Sidenav />
        <div>
          <About />
          <Experience />
          <Projects />
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Landing;
