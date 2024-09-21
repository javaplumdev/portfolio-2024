import React from 'react';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className="bg-amber-100 flex flex-col space-y-6">
      <span className="text-2xl font-semibold">Projects</span>
      <div className="bg-amber-300 flex">
        <Image
          src="https://placehold.co/300x200"
          alt="placehold"
          unoptimized
          width="250"
          height="250"
        />

        <div className="p-3">
          <span className="font-medium text-lg">Sillyfrog</span>
          <p className="my-3">
            A social media app where users can express their feelings and also meet new friends.
          </p>
          <div className="flex space-x-3 text-sm">
            <div className="rounded-full bg-red-300 px-4 py-2">test</div>
            <div className="rounded-full bg-red-300 px-4 py-2">test</div>
            <div className="rounded-full bg-red-300 px-4 py-2">test</div>
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        <span className="bg-slate-300 p-3">View all projects</span>
      </div>
    </div>
  );
};

export default Projects;
