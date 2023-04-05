import Link from 'next/link';
import React from 'react';

function Projects() {
  return (
    <div className="container  px-4 flex flex-col items-start  mx-auto mt-10 " id="projects">
      <h2 className="text-2xl font-bold mx-auto">PROJECTS</h2>
      <div className="   flex flex-row items-start pt-20 pb-10 justify-center">
        <div className="px-4  mt-8 w-3/4  ml-4 ">
          <h1 className="text-xl font-bold text-gray-900 mb-6 md:text-2xl lg:text-4xl ">
            Buddy Zone - Social Media Web App
          </h1>
          <div className=" text-gray-800 ">
            <ul>
              <li>
                • A Social-Media Web Application to connect with friends and
                keep them posted. Built using <strong>ReactJs</strong>,{' '}
                <strong>ChakraUI</strong> and Redux Tool Kit for State
                management.
              </li>
              <li>
                {' '}
                • Features include Explore, Bookmarks, Editable Profile page and
                Create Post.
              </li>
              <li>
                {' '}
                • Functionalities include User-Authentication, Like, comment,
                bookmark, follow and unfollow .
              </li>
            </ul>
          </div>

          <Link href={'https://buddy-zone.netlify.app/'} target="_blank">
            <button className="ml-auto mr-8 mt-4 border-2 text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ">
              Live Link
            </button>
          </Link>

          <Link
            href={'https://github.com/kotesh-arya/buddy-zone'}
            target="_blank"
          >
            <button className="ml-auto mr-8 mt-4 border-2 text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ">
              Source Code
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-row items-start pt-20 pb-10 justify-center">
        <div className=" px-4  mt-8 w-3/4  ml-4 ">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 md:text-2xl lg:text-4xl ">
            Daily Fashion - Ecommerce Web App
          </h1>
          <div className=" text-gray-800 ">
            <ul>
              <li>
                • Developed and hosted An E-commerce Web-Application using
                <strong>ReactJs</strong> as Javascript Library,{' '}
                <strong>React-router</strong> for routing, and{' '}
                <strong>useContext+useReducer</strong> for State Management.
              </li>
              <li>
                • Features include Filtering products on basis of Gender,
                Delivery type and Availability. Sorting based on Price and
                Rating.
              </li>
              <li>
                • Functionalities include Cart, wishlist, order details, Payment
                integration and User-Authentication
              </li>
            </ul>
          </div>
          <Link href={'https://daily-fashion.netlify.app/'} target="_blank">
            <button className="ml-auto mr-8 mt-4 border-2 text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ">
              Live Link
            </button>
          </Link>

          <Link
            href={'https://github.com/kotesh-arya/E-commerce-react'}
            target="_blank"
          >
            <button className="ml-auto mr-8 mt-4 border-2 text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ">
              Source Code
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-row items-start pt-20 pb-10 justify-center">
        <div className=" px-4  mt-8 w-3/4  ml-4 ">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 md:text-2xl lg:text-4xl ">
            Lift Simulation - Web App
          </h1>
          <div className=" text-gray-800 ">
            <ul>
              <li>
                • Simulated Elevator functionality, where lifts and floors can
                be generated from user Input and Lifts will move in between
                floors, based on button clicks as in Real-life.
              </li>
              <li>
                • Requests done while lifts are Busy will be preserved and gets
                served when any of the lifts is free.{' '}
              </li>
              <li>
                • Tech Stack: <strong>HTML, CSS and Vanilla-Javascript</strong>.
              </li>
            </ul>
          </div>
          <Link
            href={'https://lift-simulation-rds-v1.netlify.app/'}
            target="_blank"
          >
            <button className="ml-auto mr-8 mt-4 border-2 text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ">
              Live Link
            </button>
          </Link>

          <Link
            href={'https://github.com/kotesh-arya/Lift-Simulation'}
            target="_blank"
          >
            <button className="ml-auto mr-8 mt-4 border-2 text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ">
              Source Code
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
