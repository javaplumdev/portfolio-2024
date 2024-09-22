import React from 'react';
import { RxLink2 } from 'react-icons/rx';

const Experience = () => {
  return (
    <div id="experience" className="flex flex-col space-y-6 rounded-lg p-6">
      <span className="text-2xl font-semibold">Experience</span>

      <ol className="relative border-s border-white flex flex-col space-y-6">
        <li className="ms-4">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 dark:border-white dark:bg-white"></div>
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
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 dark:border-white dark:bg-white"></div>
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

      <div className="px-4 py-6 w-auto p-3 flex">
        <div className="bg-white text-black rounded-lg flex p-3 space-x-2">
          <div>View full resume</div>
          <RxLink2 size="22" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
