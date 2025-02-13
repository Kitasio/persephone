import React from 'react';

const GentleInvitation: React.FC = () => {
  return (
    <div className="mt-24 md:mt-48 mb-24 md:mb-48">
      <h2 className="text-5xl xl:text-[70px] font-serif italic mb-12 xl:mb-24 text-gray-800">A Gentle Invitation</h2>
      
      <div className="max-w-[86rem] mx-auto">
        <div className="space-y-8">
          <p className="text-gray-800 font-roboto text-xl xl:text-3xl/[1.5] font-light leading-relaxed">
            Take your time here. Explore what calls to you, and let this space support you however you need. Persephone's Playground is here whenever you need to feel held, understood, and reminded that your journey has meaning.
          </p>
          
          <p className="text-gray-800 font-roboto text-xl xl:text-3xl/[1.5] font-light leading-relaxed">
            May you find small moments of comfort here, and may you carry them with you as you walk through this time.
          </p>
        </div>

        <div className="mt-32 md:mt-48">
          <p className="text-gray-700 font-roboto text-lg xl:text-xl font-light leading-relaxed text-center max-w-3xl mx-auto">
            This page is dedicated to all the Persephones I've been blessed to know, as well as the men and women who have supported them as they climbed back from the depths.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GentleInvitation;