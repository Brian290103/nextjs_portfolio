import React from 'react';
import Profile from '../public/images/profile.png';
import Image from 'next/image';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <div className="grid min-h-screen py-16 " id="projects ">
      <div className="flex flex-col items-center justify-center w-full col-span-1 py-3 m-auto ">
        <h1 className="text-3xl font-bold text-blue-500 ">Testimonials</h1>
        <h1 className="">Happy Clients</h1>

        {/* Container Wrapper */}
        <div>
          <div className="max-w-md p-2 my-5">
            <div className="items-start card">
              <div className="flex flex-col gap-1 justfy-start">
                <Image
                  src={Profile}
                  alt="Profile"
                  widt={80}
                  height={80}
                  className="rounded-full"
                ></Image>
                <h1 className="text-xl font-bold ">Brian Saitabau</h1>
                <h1 className="text-blue-500 text">Manager MEC</h1>
              </div>

              <p className="flex justify-center">
                <FaQuoteLeft className="text-blue-500 me-2" />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt accusamus repellendus alias enim voluptatibus
                architecto inventore at ab nisi optio
                <FaQuoteRight className="text-blue-500 ms-2" />
              </p>
            </div>
          </div>
        </div>
        {/* Container Wrapper */}
      </div>
    </div>
  );
};

export default Testimonials;
