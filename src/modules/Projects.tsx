import React from 'react';
import Image from 'next/image';
import { RxLink2 } from 'react-icons/rx';

const Projects = () => {
  return (
    <div id="projects" className="bg-amber-100 flex flex-col space-y-6 p-6 rounded-lg">
      <span className="text-2xl font-semibold">Projects</span>
      <div className="bg-amber-300 flex lg:flex-row flex-col">
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
          <div className="flex flex-wrap space-x-3 text-sm">
            <div className="rounded-full bg-red-300 px-4 py-2">test</div>
            <div className="rounded-full bg-red-300 px-4 py-2">test</div>
            <div className="rounded-full bg-red-300 px-4 py-2">test</div>
          </div>
        </div>
      </div>

      <div className="py-6 w-auto flex">
        <div className="bg-slate-300 flex p-3 space-x-2">
          <div>View full resume</div>
          <RxLink2 size="22" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
