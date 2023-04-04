import React from 'react';

function Projects() {
  return (
    <div className="container  px-4 flex flex-col items-center  mx-auto mt-10 ">
      <h2 className="text-2xl font-bold">PROJECTS</h2>
      <div className="   flex flex-row items-start pt-20 pb-10 justify-center">
        <div className="px-4  mt-8 w-1/2  ml-4 ">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 md:text-2xl lg:text-5xl ">
            Project 1️⃣
          </h1>
          <div className=" text-gray-800 ">
            <p className="mb-4 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------------- */}

      <div className="flex flex-row items-start pt-20 pb-10 justify-center">
        <div className=" px-4  mt-8 w-1/2  ml-4 ">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 md:text-2xl lg:text-5xl ">
            Project 2️⃣
          </h1>
          <div className=" text-gray-800 ">
            <p className="mb-4 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------ */}
      <div className="flex flex-row items-start pt-20 pb-10 justify-center">
        <div className=" px-4  mt-8 w-1/2  ml-4 ">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 md:text-2xl lg:text-5xl ">
            Project 3️⃣
          </h1>
          <div className=" text-gray-800 ">
            <p className="mb-4 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
