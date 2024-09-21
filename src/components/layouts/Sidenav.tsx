'use client';

import React from 'react';
import Navs from './Navs';
import Footer from './Footer';
import Header from './Header';

const Sidenav = () => {
  return (
    <div className="bg-blue-300 flex flex-col justify-between h-screen py-12 sticky top-0">
      <Header />

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
