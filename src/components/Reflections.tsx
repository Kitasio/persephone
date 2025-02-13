import React from 'react';

const Reflections: React.FC = () => {
  return (
    <>
      <div className="mt-24 md:mt-48">
        <h2 className="text-5xl xl:text-[70px] font-serif italic mb-12 xl:mb-24 text-gray-800">Gentle Reflections for Grieving Hearts</h2>
        
        <div className="max-w-[86rem] mx-auto">
          <p className="text-gray-800 font-roboto text-xl xl:text-3xl/[1.5] font-light leading-relaxed mb-16">
            To support you as you navigate this journey, we offer reflections inspired by Taoist wisdom. These concepts invite you to sit with your feelings and explore them with gentle curiosity:
          </p>

          <div className="space-y-16 md:space-y-24">
            {/* First Reflection */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
              <div className="flex-shrink-0 w-24 h-24 lg:w-32 lg:h-32 mx-auto lg:mx-0">
                <img 
                  src="/src/assets/images/bush1.png" 
                  alt="Decorative bush illustration"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl xl:text-4xl font-serif mb-6 text-gray-800 text-center lg:text-left">Embracing the Unknown</h3>
                <p className="text-gray-800 font-roboto text-xl xl:text-3xl/[1.5] font-light text-center lg:text-left">
                  Releasing the need for answers and trusting in the natural flow of your emotions.
                </p>
              </div>
            </div>

            {/* Second Reflection */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
              <div className="flex-shrink-0 w-24 h-24 lg:w-32 lg:h-32 mx-auto lg:mx-0">
                <img 
                  src="/src/assets/images/bush2.png" 
                  alt="Decorative bush illustration"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl xl:text-4xl font-serif mb-6 text-gray-800 text-center lg:text-left">Finding Light Within</h3>
                <p className="text-gray-800 font-roboto text-xl xl:text-3xl/[1.5] font-light text-center lg:text-left">
                  Even in darkness, there is a part of you that is whole, resilient, and luminous.
                </p>
              </div>
            </div>

            {/* Third Reflection */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
              <div className="flex-shrink-0 w-24 h-24 lg:w-32 lg:h-32 mx-auto lg:mx-0">
                <img 
                  src="/src/assets/images/bush1.png" 
                  alt="Decorative bush illustration"
                  className="w-full h-full object-contain transform scale-x-[-1]"
                />
              </div>
              <div>
                <h3 className="text-2xl xl:text-4xl font-serif mb-6 text-gray-800 text-center lg:text-left">Balance in Opposites</h3>
                <p className="text-gray-800 font-roboto text-xl xl:text-3xl/[1.5] font-light text-center lg:text-left">
                  Like day and night, joy and sorrow are interconnected parts of life's journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tao Te Ching Quote */}
      <div className="mt-32 md:mt-72 px-4 sm:px-6 md:px-8 mb-32 md:mb-72">
        <div className="max-w-[1071px] mx-auto min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[342px] border border-[#737373] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] lg:rounded-[70px] flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="text-center">
            <p className="font-serif text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] text-gray-800 leading-[1.4] mb-4">
              "Yield and overcome; bend and be straight."
            </p>
            <p className="font-serif text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] text-gray-800 leading-[1.4]">
              Tao Te Ching
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reflections;