import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col space-y-3">
      <span className="font-extrabold text-4xl">Charlito Jr. Mecarez</span>
      <span className="text-xl font-semibold">Frontend Developer</span>
      <span className="w-auto lg:w-[460px]">
        A 23-year-old based in Manila, creating applications while solving challenges with the
        recent web technologies.
      </span>
    </div>
  );
};

export default Header;
