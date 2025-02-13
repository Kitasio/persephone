import React from 'react';

const Quote: React.FC = () => {
  return (
    <div className="mt-24 md:mt-48 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1071px] mx-auto min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[342px] border border-[#737373] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] lg:rounded-[70px] flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
        <p className="font-serif text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] text-gray-800 leading-[1.4] text-center max-w-4xl">
          Like Persephone, you may feel like you're in a descent. Yet this path holds unexpected gifts, and in honouring it, you discover strength, wisdom, and light that will guide you forward.
        </p>
      </div>
    </div>
  );
};

export default Quote;