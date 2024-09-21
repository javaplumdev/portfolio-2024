import React from 'react';
import Navs from './Navs';
import Footer from './Footer';

const Sidenav = () => {
  return (
    <div className="bg-blue-300 flex flex-col justify-around h-screen py-12">
      <div className="flex flex-col space-y-3">
        <span className="font-bold text-4xl">Charlito Jr. Mecarez</span>
        <span className="text-xl">Junior Frontend Developer</span>
        <span>Creating ideas into next arts with use of latest web technologies.</span>
      </div>

      {/* navigations */}

      <div className="flex flex-col space-y-6">
        <Navs />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Sidenav;
