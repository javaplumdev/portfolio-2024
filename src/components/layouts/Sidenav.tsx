'use client';

import React from 'react';
import Navs from './Navs';
import Footer from './Footer';
import { useRouter, useSearchParams } from 'next/navigation';

const Sidenav = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  console.log(router, searchParams);

  return (
    <div className="bg-blue-300 flex flex-col justify-between h-screen py-12 sticky top-0">
      <div className="flex flex-col space-y-3">
        <span className="font-extrabold	 text-4xl">Charlito Jr. Mecarez</span>
        <span className="text-xl font-semibold">Frontend Developer</span>
        <span className="w-auto lg:w-[460px]">
          A 23-year-old based in Manila, creating applications while solving challenges with the
          recent web technologies.
        </span>
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
