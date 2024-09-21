import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';

const Contacts = () => {
  return (
    <div id="contacts" className="bg-lime-300 flex flex-col space-y-6 h-[320px] p-6 rounded-lg">
      <div>
        <span className="text-2xl font-semibold">Contacts</span>
        <div className="mt-3">Let's create something amazing togeher!</div>
      </div>

      <div className="flex">
        <div className="bg-white flex p-3 space-x-2 rounded">
          <span>charlitomecarezjr@gmail.com</span>
          <MdOutlineEmail size="22" />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
