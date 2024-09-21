import React from 'react';
import Link from 'next/link';

const Line = () => {
  return <div className={'w-12 h-0.5 bg-black'}></div>;
};

const Navs = () => {
  return (
    <React.Fragment>
      <div className="flex items-center space-x-3">
        <Line />
        <Link href="#about">About</Link>
      </div>
      <div className="flex items-center space-x-3">
        <Line />
        <Link href="#experience">Experience</Link>
      </div>
      <div className="flex items-center space-x-3">
        <Line />
        <Link href="#projects">Projects</Link>
      </div>
      <div className="flex items-center space-x-3">
        <Line />
        <Link href="#contacts">Contacts</Link>
      </div>
    </React.Fragment>
  );
};

export default Navs;
