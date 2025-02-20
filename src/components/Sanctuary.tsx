import React from 'react';

const Sanctuary: React.FC = () => {
  return (
    <>
      <div className="relative">
        <h2 className="col-span-9 text-5xl xl:text-[70px] font-serif italic mb-12 xl:mb-24 text-neutral-800">
          <span className="block md:inline">A Sanctuary</span>{' '}
          <span className="block md:inline">for Those</span>{' '}
          <span className="block md:inline">in Darkness</span>
        </h2>
        <div className='flex flex-col md:flex-row gap-8 xl:gap-24'>
          <p id="welcome" className="flex-1 text-neutral-800 font-roboto text-xl xl:text-3xl/[1.5] lg:mt-10 leading-relaxed xl:font-light xl:max-w-[42rem]">
            Welcome to a space of comfort and compassion —
            a place created to hold you tenderly through the
            shadows. Persephone's Playground exists to
            remind you that even in the depths of grief, there
            are gifts waiting to be found, growth emerging,
            and light quietly gathering strength. Here, you
            are invited to rest, reflect, and honour the full
            spectrum of your experience.
          </p>
          <div id="granat" className="hidden flex-1 md:flex justify-end items-end">
            <img
              src="https://ik.imagekit.io/soulgenesis/Persephone/pom_1.webp"
              alt="Pomegranate illustration"
              className="w-90 h-auto object-contain xl:max-w-[80%]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sanctuary;