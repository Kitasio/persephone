import React from 'react';

const GentleInvitation: React.FC = () => {
  return (
    <div className="mt-24 md:mt-48 mb-24 md:mb-48">
      <h2 className="text-5xl xl:text-[70px] font-serif italic mb-12 xl:mb-24 text-neutral-800">A Gentle Invitation</h2>

      <div className="max-w-[86rem] mx-auto">
        <div className="space-y-8">
          <p className="whitespace-pre-line text-neutral-900 font-roboto text-xl xl:text-3xl/[1.5] font-light leading-relaxed text-pretty">
            {`Take your time here. 
            
            Explore what calls to you, and let this space support you however you need. Persephone's Playground is here whenever you need to feel held, understood, and reminded that your journey has meaning.`}
          </p>

          <p className="text-neutral-900 font-roboto text-xl xl:text-3xl/[1.5] font-light leading-relaxed text-pretty">
            May you find small moments of comfort here, and may you carry them with you as you walk through this time.
          </p>

          <div className="relative z-50 flex justify-center mt-12">
            <a
              href="https://moodinabox.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 bg-[#262626]/60 rounded-full text-[#f5f5f5] hover:bg-[#f5f5f5] hover:text-[#262626] transition-colors duration-300 text-xl xl:text-2xl font-serif min-w-[280px] text-center border border-[#262626]"
            >
              VISIT MOODINABOX
            </a>
          </div>
        </div>

        <div className="relative -mt-40 sm:-mt-44 lg:-mt-80 xl:-mt-96 2xl:-mt-[30rem] scale-125">
          <img className="" alt="flowers" src="https://ik.imagekit.io/soulgenesis/Persephone/flowers_bg_smaller.webp?updatedAt=1747403792002" />
          <p className="-mb-6 sm:-mb-16 py-16 px-10 text-sm sm:text-base bg-white w-full whitespace-pre-line italic text-neutral-700 text-center">
            {`This page is dedicated to all the Persephones I've been blessed to know, 
              as well as the men and women who have supported them 
              as they climbed back from the depths.`}
          </p>
        </div>
      </div>

    </div>
  );
};

export default GentleInvitation;
