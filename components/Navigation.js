import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 fixed w-full top-0">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 border-red-200">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-between sm:items-stretch ">
            <div className="flex flex-shrink-0 items-center">
              <h1 className="text-white text-2xl font-bold ml-0 ">KOTESH MUDILA</h1>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>

                <Link
                  href={`#projects`}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium  "
                >
                  Projects
                </Link>
                <Link
                  href="https://medium.com/me/stories/public"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
