import React from 'react';
import Image from 'next/image';
import profile from '../public/profile.png';

const About = () => {
  return (
    <div className="container px-4 py-14 flex flex-col items-center  mx-auto mt-10 ">
      <div className="flex  flex-col-reverse  items-center sm:flex-row  pt-20 pb-10 justify-center">
        <div className="px-4 mt-8 w-1/2 ml-4">
          <h1 className="text-2xl font-normal text-gray-900 mb-6 md:text-2xl lg:text-5xl">
            Hello there 👋
          </h1>
          <div className="text-gray-800">
            <p className="mb-4">
              I am a Frontend Developer and a coding enthusiast with
              Project-based Experience, currently building projects with React
              and other CSS frameworks, and started learning Testing and
              Typescript. As I have been doing this for a long-time, I got
              pretty comfortable too. I am a curious techie with a great
              preference for crafting things both functionally and aesthetically
            </p>
          </div>
        </div>
        <div className=" ">
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-2xl"
            width={350}
            height={350}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
