import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full min-h-[60vh] flex flex-col items-center justify-center">
      {/* Content Container */}
      <div className="w-full">
        {/* Title Container */}
        <div className="mb-12 md:mb-4">
          {/* Title */}
          <h1 className="text-center w-full text-5xl md:text-6xl lg:text-[5.7vw] font-serif">
            <span className="inline-block transform-gpu text-gray-800">
              welcome to
            </span>
            <span> </span>
            <span className="inline-block transform-gpu italic text-gray-800">
              Persephone's Playground
            </span>
          </h1>
        </div>

        {/* Illustration Container */}
        <div className="container mx-auto px-4 mt-2 md:-mt-24">
          <div className="grid grid-cols-12 grid-rows-4 items-end gap-4 max-w-10xl mx-auto">
            {/* Center Illustration - Full width on mobile */}
            <div className="col-span-12 md:col-span-4 md:col-start-5 row-span-4 row-start-1 flex justify-center order-first">
              <img
                src="https://ik.imagekit.io/soulgenesis/Persephone/1.png"
                alt="Persephones"
                className="w-full max-w-[45rem] h-auto md:w-[45rem] md:h-[45rem] object-contain"
              />
            </div>

            {/* Far Left Bush - Hidden on mobile */}
            <div className="hidden md:flex col-span-2 row-span-3 row-start-2 justify-end items-end">
              <img
                src="https://ik.imagekit.io/soulgenesis/Persephone/bush2.png"
                alt="Decorative bush illustration"
                className="w-80 h-auto object-contain scale-x-[-1]"
              />
            </div>

            {/* Left Bush - Hidden on mobile */}
            <div className="hidden md:flex col-span-2 row-start-4 justify-end">
              <img
                src="https://ik.imagekit.io/soulgenesis/Persephone/bush1.png"
                alt="Decorative bush illustration"
                className="w-40 h-48 object-contain scale-x-[-1]"
              />
            </div>

            {/* Right Bush - Hidden on mobile */}
            <div className="hidden md:flex col-span-2 row-start-4 justify-start">
              <img
                src="https://ik.imagekit.io/soulgenesis/Persephone/bush1.png"
                alt="Decorative bush illustration"
                className="w-40 h-48 object-contain"
              />
            </div>

            {/* Far Right Bush - Hidden on mobile */}
            <div className="hidden md:flex col-span-2 row-span-3 row-start-2 justify-start items-end">
              <img
                src="https://ik.imagekit.io/soulgenesis/Persephone/bush2.png"
                alt="Decorative bush illustration"
                className="w-80 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
