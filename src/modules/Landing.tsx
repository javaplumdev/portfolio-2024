import React from 'react';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contacts from './Contacts';

import Sidenav from '../components/layouts/Sidenav';

const Landing = () => {
  return (
    <div className="container bg-red-300 w-auto lg:w-[1390px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <Sidenav />
        </div>
        <div className="py-24 flex flex-col space-y-24 w-full">
          <About />
          <Experience />
          <Projects />
          <Contacts />

          <div className="flex flex-col items-center w-full">
            <div className="mt-36">
              <span>Made with heart by Charlito Jr Mecarez</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
