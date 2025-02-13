import React from 'react';

const ReflectionSpace: React.FC = () => {
  return (
    <div className="mt-24 md:mt-48">
      <h2 className="text-5xl xl:text-[70px] font-serif italic mb-12 xl:mb-24 text-gray-800">A Space for Reflection</h2>
      
      <div className="max-w-[86rem] mx-auto">
        <p className="text-gray-800 font-roboto text-xl xl:text-3xl/[1.5] font-light leading-relaxed mb-16 xl:mb-48">
          Your story matters. If you feel called to share, send me a message — your words will be met with warmth and understanding.
        </p>
        
        <div className="flex flex-col items-center">
          <a 
            href="mailto:contact@example.com" 
            className="px-12 py-6 bg-[#262626]/60 rounded-full text-[#f5f5f5] hover:bg-[#f5f5f5] hover:text-[#262626] transition-colors duration-300 text-xl xl:text-2xl font-serif min-w-[280px] text-center border border-[#262626]"
          >
            Send a message
          </a>

          {/* Seeds illustration */}
          <div className="hidden md:block mt-24 mb-12 w-full">
            <img 
              src="/src/assets/images/seeds.png" 
              alt="Seeds illustration"
              className="w-full h-auto object-contain xl:h-56"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReflectionSpace;