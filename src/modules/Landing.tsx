import React from 'react';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contacts from './Contacts';

import Sidenav from '../components/layouts/Sidenav';

const Landing = () => {
  return (
    <div className="container w-auto lg:w-[1390px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <Sidenav />
        </div>
        <div className="py-12 w-full">
          <div className="flex flex-col space-y-24 bg-zinc-800 rounded-xl">
            <About />
            <hr />
            <Experience />
            <hr />
            <Projects />
            <hr />
            <Contacts />
          </div>

          <div className="text-center w-full">
            <div className="mt-36">
              <span>Made with ❤️ by Charlito Jr Mecarez</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
