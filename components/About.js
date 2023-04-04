import React from 'react';
import Image from 'next/image';
import profile from '../public/profile.png';

const About = () => {
  return (
    <div className="container px-4 py-14 flex flex-col items-center  mx-auto mt-10 ">
      <div className="flex flex-row items-start pt-20 pb-10 justify-center">
        <div className="px-4 mt-8 w-1/2 ml-4">
          <h1 className="text-2xl font-normal text-gray-900 mb-6 md:text-2xl lg:text-5xl">
            Hello there 👋
          </h1>
          <div className="text-gray-800">
            <p className="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
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
