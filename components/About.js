import React from "react";
import Image from "next/image";
import profile from "../public/profile.png";

const About = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-32 lg:ml-32 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl ">
            Hey there 👋 ,
          </h1>
          <div className="mt-6 text-gray-800 ">
            <p className="mb-4 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div  className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-corners"
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
