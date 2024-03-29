import React from 'react';

const Footer = () => {
  return (
    <div className="mt-18 lg:mt-15  sm:py-12 py-4">
      <div className="max-w-4xl px-4 mx-auto text-gray-800 ">
        <div className="pb-8 mb-2 border-t-2 border-gray-300 "></div>
        <div className="flex  flex-col justify-between lg:flex-row items-center">
          <p>Built with Next.js, Tailwind and Vercel</p>
          <div className="flex  flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
            <a
              href="https://twitter.com/Codesh_"
              className={'transition-colors hover:text-yellow-500'}
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/kotesh-mudila-7aa740159/"
              className={'transition-colors hover:text-yellow-500'}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/kotesh-arya"
              className={'transition-colors hover:text-yellow-500'}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://medium.com/@kotesharya"
              className={'transition-colors hover:text-yellow-500'}
              target="_blank"
              rel="noreferrer"
            >
              Medium
            </a>
            <a
              href="https://dev.to/kotesh_mudila"
              className={'transition-colors hover:text-yellow-500'}
              target="_blank"
              rel="noreferrer"
            >
              DEV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
