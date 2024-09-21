import React from 'react';
import Image from 'next/image';

const Experience = () => {
  return (
    <div className="flex flex-col space-y-6 bg-purple-300">
      <span className="text-2xl font-semibold">Experience</span>

      <ol className="relative border-s border-black flex flex-col space-y-6">
        <li className="ms-4">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="font-normal leading-none">Jr Frontend Developer</time>
          <div className="flex flex-col space-y-2 my-2">
            <div>IThinkWeb</div>
            <div>
              Helps manage and maintain websites, ensuring optimal performance, user-friendly
              design, and seamless functionality.
            </div>
          </div>
        </li>

        <li className="ms-4">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="font-normal leading-none">Internship</time>
          <div className="flex flex-col space-y-2 my-2">
            <div>Optogrow</div>
            <div>
              Creates developer tasks on workflows and UI designs for clients worldwide and worked
              with various different people.
            </div>
          </div>
        </li>
      </ol>

      <div className="px-4 py-6">
        <span className="bg-slate-300 p-3">View full resume</span>
      </div>
    </div>
  );
};

export default Experience;
