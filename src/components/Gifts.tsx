import React from 'react';

const Gifts: React.FC = () => {
  return (
    <div className="mt-24 md:mt-48">
      <h2 className="text-5xl xl:text-[70px] font-serif italic mb-12 xl:mb-24 text-gray-800">Gifts of Comfort and Perspective</h2>
      
      <div className="max-w-[86rem] mx-auto">
        <p className="text-gray-800 font-roboto text-xl xl:text-3xl/[1.5] font-light leading-relaxed mb-16">
          This space was created to support you in a way that respects your unique experience. Here are offerings that may gently illuminate your path:
        </p>

        <div className="space-y-32 md:space-y-48">
          {/* First Gift */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="lg:max-w-[60%]">
              <h3 className="text-2xl xl:text-4xl font-serif mb-6 text-gray-800">1. Ram Dass' Letter to Grieving Parents</h3>
              <blockquote className="text-xl xl:text-2xl italic text-gray-700 mb-6">
                "A Soul has departed, yet their presence is woven into your heart forever."
              </blockquote>
              <p className="text-gray-800 font-roboto text-xl xl:text-3xl/[1.5] font-light">
                This letter offers a compassionate perspective on loss, helping us remember that love transcends physical presence.
              </p>
            </div>
            <a 
              href="https://www.ramdass.org/a-letter-to-rachel/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 bg-[#262626]/60 rounded-full text-[#f5f5f5] hover:bg-[#f5f5f5] hover:text-[#262626] transition-colors duration-300 text-xl xl:text-2xl font-serif min-w-[280px] text-center border border-[#262626]"
            >
              READ THE LETTER
            </a>
          </div>

          {/* Second Gift */}
          <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between gap-8">
            <div className="lg:max-w-[60%]">
              <h3 className="text-2xl xl:text-4xl font-serif mb-6 text-gray-800 text-right">2. Grief Handbook</h3>
              <p className="text-gray-800 font-roboto text-xl xl:text-3xl/[1.5] font-light text-right">
                Practical and compassionate, this guide provides suggestions, insights, and gentle practices to support you through each step of grieving. Remember, there is no right way—only your way.
              </p>
            </div>
            <a 
              href="https://www.amazon.com/Grief-Recovery-Handbook-Anniversary-Expanded/dp/0061686077"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 bg-[#262626]/60 rounded-full text-[#f5f5f5] hover:bg-[#f5f5f5] hover:text-[#262626] transition-colors duration-300 text-xl xl:text-2xl font-serif min-w-[280px] text-center self-center lg:self-start border border-[#262626]"
            >
              HANDBOOK
            </a>
          </div>

          {/* Third Gift */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="lg:max-w-[60%]">
              <h3 className="text-2xl xl:text-4xl font-serif mb-6 text-gray-800">3. Karla McLaren on Initiation</h3>
              <blockquote className="text-xl xl:text-2xl italic text-gray-700 mb-6">
                "Grief is a profound initiation, an invitation to learn and grow in ways you never imagined."
              </blockquote>
              <p className="text-gray-800 font-roboto text-xl xl:text-3xl/[1.5] font-light">
                Karla McLaren reminds us that grief, though deeply painful, is a transformative experience, initiating us into a new relationship with life and with ourselves. Let this perspective be a reminder that your grief is sacred and has meaning, even if it's not yet clear.
              </p>
            </div>
            <a 
              href="https://karlamclaren.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 bg-[#262626]/60 rounded-full text-[#f5f5f5] hover:bg-[#f5f5f5] hover:text-[#262626] transition-colors duration-300 text-xl xl:text-2xl font-serif min-w-[280px] text-center border border-[#262626]"
            >
              READ MORE
            </a>
          </div>

          {/* Fourth Gift */}
          <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between gap-8">
            <div className="lg:max-w-[60%]">
              <h3 className="text-2xl xl:text-4xl font-serif mb-6 text-gray-800 text-right">4. Permission to Grieve in Your Own Way</h3>
              <p className="text-gray-800 font-roboto text-xl xl:text-3xl/[1.5] font-light text-right">
                There is no right or wrong way to grieve. Here, you have permission to feel it all, to move slowly, or not at all. You're invited to explore the textures of your experience in whatever way feels true to you.
              </p>
            </div>
            <button className="px-12 py-6 bg-[#262626]/60 rounded-full text-[#f5f5f5] hover:bg-[#f5f5f5] hover:text-[#262626] transition-colors duration-300 text-xl xl:text-2xl font-serif min-w-[280px] self-center lg:self-start border border-[#262626]">
              EXPLORE MORE
            </button>
          </div>

          {/* Fifth Gift */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="lg:max-w-[60%]">
              <h3 className="text-2xl xl:text-4xl font-serif mb-6 text-gray-800">5. A Ritual Offering: MoodinaBox.com</h3>
              <blockquote className="text-xl xl:text-2xl italic text-gray-700 mb-6">
                "Rituals provide a tangible way to process emotions, helping individuals regain a sense of control."
              </blockquote>
              <p className="text-gray-800 font-roboto text-xl xl:text-3xl/[1.5] font-light">
                Harvard professor Francesca Gino's study on rituals and grief found that performing personal rituals can significantly alleviate feelings of loss. Her research revealed that rituals provide a tangible way to process emotions, helping individuals regain a sense of control and reduce grief's intensity by channeling sorrow into structured, intentional acts. MoodinaBox.com was designed to guide you toward moments of peace, grounding, and mood transformation to help you find a bit of light, even in the smallest ways.
              </p>
            </div>
            <button className="px-12 py-6 bg-[#262626]/60 rounded-full text-[#f5f5f5] hover:bg-[#f5f5f5] hover:text-[#262626] transition-colors duration-300 text-xl xl:text-2xl font-serif min-w-[280px] border border-[#262626]">
              VISIT MOODINABOX
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gifts;