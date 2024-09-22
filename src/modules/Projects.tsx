import React from 'react';
import Image from 'next/image';
import { RxLink2 } from 'react-icons/rx';

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col space-y-6 p-6 rounded-lg">
      <span className="text-3xl font-semibold">Selected Projects</span>
      <div>
        <Image
          src="https://placehold.co/600x300"
          alt="placehold"
          unoptimized
          width="600"
          height="300"
          className="rounded-lg"
        />

        <div className="my-3">
          <span className="font-medium text-lg">Sillyfrog</span>
          <p className="my-3">
            A social media app where users can express their feelings and also meet new friends.
          </p>
          <div className="flex flex-wrap space-x-3 text-sm">
            <div className="rounded-full border  px-4 py-2">test</div>
            <div className="rounded-full border  px-4 py-2">test</div>
            <div className="rounded-full border px-4 py-2">test</div>
          </div>
        </div>
      </div>

      <div className="py-6 w-auto flex">
        <div className="bg-white text-black rounded-lg flex p-3 space-x-2">
          <div>View full resume</div>
          <RxLink2 size="22" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
