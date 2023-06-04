import React from 'react';
import { FaCompass, FaEnvelope, FaGlobe, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="grid min-h-screen py-16 " id="projects ">
      <div className="flex flex-col items-center justify-center w-full col-span-1 py-3 m-auto ">
        <h1 className="text-3xl font-bold text-blue-500 ">Contact Me</h1>
        <h1 className="">Contact Me for any Queries</h1>

        <div>
          {/* Row 1 */}
          <div className="hidden gap-3 py-2 lg:grid lg:grid-cols-4 ">
            <div className="">
              <div className="h-full card">
                <FaCompass className="text-3xl text-blue-500" />
                <h1 className="my-2 text-2xl">Address</h1>
                <h1 className="font-bold">P.O. Box 11, Narok</h1>
              </div>
            </div>

            <div>
              <div className="h-full card">
                <FaPhone className="text-3xl text-blue-500" />
                <h1 className="my-2 text-2xl">Contact Number</h1>
                <h1 className="font-bold">+254 759 636 663</h1>
              </div>
            </div>

            <div>
              <div className="h-full card">
                <FaEnvelope className="text-3xl text-blue-500" />
                <h1 className="my-2 text-2xl">Email</h1>
                <h1 className="font-bold">briansaitabau29@gmail.com</h1>
              </div>
            </div>

            <div>
              <div className="h-full card">
                <FaGlobe className="text-3xl text-blue-500" />
                <h1 className="my-2 text-2xl">Website</h1>
                <h1 className="font-bold">briansaitabau29.com</h1>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="gap-3 lg:grid lg:grid-cols-2">
            {/* Column 1 */}
            <div>
              <form action="">
                <div className="p-3 lg:px-16">
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Your Email" />
                  <input type="text" placeholder="Subject" />
                  <textarea
                    name="message"
                    id="messsage"
                    cols="30"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                  <div className="flex justify-end">
                    <button className=" btn-primary">Submit</button>
                  </div>
                </div>
              </form>
            </div>

            {/* Column 2 */}
            <div>
              <div className="flex items-center justify-center min-h-full p-3 h-72">
                {/* <h1 className="text-2xl">Map will be displayed here</h1> */}

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d127642.26623313651!2d36.8279552!3d-1.2812287999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1684528753357!5m2!1sen!2ske"
                  loading="lazy"
                  className="w-full h-full border-0 rounded-md"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
