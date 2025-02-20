import React from 'react';

const Gifts: React.FC = () => {
  return (
    <div className="mt-32 md:mt-56">
      <h2 className="text-5xl xl:text-[70px] font-serif italic mb-12 xl:mb-24 text-neutral-800">Gifts of Comfort and Perspective</h2>

      <div className="max-w-[86rem] mx-auto">
        <p className="text-neutral-900 font-roboto text-xl xl:text-3xl/[1.5] font-light leading-relaxed mb-16">
          This space was created to support you in a way that respects your unique experience. Here are offerings that may gently illuminate your path:
        </p>

        <div className="space-y-32 md:space-y-48">
          {/* First Gift */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="lg:max-w-[60%]">
              <h3 className="text-4xl md:text-2xl xl:text-4xl font-serif mb-6 text-neutral-900">1. Ram Dass' Letter to Grieving Parents</h3>
              <blockquote className="text-xl xl:text-2xl italic text-neutral-700 mb-6">
                "A Soul has departed, yet their presence is woven into your heart forever."
              </blockquote>
              <p className="text-neutral-900 font-roboto text-xl xl:text-3xl/[1.5] font-light">
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
              <h3 className="text-4xl md:text-2xl xl:text-4xl font-serif mb-6 text-neutral-800 text-left lg:text-right">2. The Grief Recovery Handbook</h3>
              <p className="text-neutral-900 font-roboto text-xl xl:text-3xl/[1.5] font-light">
                Practical and compassionate, this guide provides suggestions, insights, and gentle practices to support you through each step of grieving. Some of the main themes in the book include:
              </p>
              <ul className="list-disc pl-7 space-y-4 mt-6 text-neutral-900 font-roboto text-xl xl:text-3xl/[1.5] font-light text-left lg:text-left">
                <li>Grief is a Natural Response to Loss</li>
                <li>Time Alone Does Not Heal Grief</li>
                <li>Unresolved Grief Comes from Unfinished Emotional Business</li>
                <li>Grief Needs to Be Expressed, Not Suppressed</li>
                <li>Recovery Doesn't Mean Forgetting</li>
              </ul>
            </div>
            <a
              href="https://www.amazon.com/Grief-Recovery-Handbook-Anniversary-Expanded/dp/0061686077"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 bg-[#262626]/60 rounded-full text-[#f5f5f5] hover:bg-[#f5f5f5] hover:text-[#262626] transition-colors duration-300 text-xl xl:text-2xl font-serif min-w-[280px] text-center mx-auto lg:mx-0 border border-[#262626]"
            >
              HANDBOOK
            </a>
          </div>

          {/* Third Gift */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="lg:max-w-[60%]">
              <h3 className="text-4xl md:text-2xl xl:text-4xl font-serif mb-6 text-neutral-800">3. Karla McLaren on Initiation</h3>
              <blockquote className="text-xl xl:text-2xl italic text-neutral-700 mb-6">
                "Grief is a profound initiation, an invitation to learn and grow in ways you never imagined."
              </blockquote>
              <p className="text-neutral-900 font-roboto text-xl xl:text-3xl/[1.5] font-light text-pretty">
                Karla McLaren reminds us that grief, though deeply painful, is a transformative experience, initiating us into a new relationship with life and with ourselves. Let this perspective be a reminder that your grief is sacred and has meaning, even if it's not yet clear.
              </p>
            </div>
            <a
              href="https://karlamclaren.com/grief-the-deep-river-of-the-soul/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 bg-[#262626]/60 rounded-full text-[#f5f5f5] hover:bg-[#f5f5f5] hover:text-[#262626] transition-colors duration-300 text-xl xl:text-2xl font-serif min-w-[280px] text-center border border-[#262626]"
            >
              READ MORE
            </a>
          </div>

          {/* Fourth Gift */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="lg:max-w-[60%]">
              <h3 className="text-4xl md:text-2xl xl:text-4xl font-serif mb-6 text-neutral-800">4. A Ritual Offering: MoodinaBox.com</h3>
              <blockquote className="text-xl xl:text-2xl italic text-neutral-700 mb-6">
                "Rituals provide a tangible way to process emotions, helping individuals regain a sense of control."
              </blockquote>
              <p className="whitespace-pre-line text-neutral-900 font-roboto text-xl xl:text-3xl/[1.5] font-light text-pretty">
                {`Harvard professor Francesca Gino's study on rituals and grief found that performing personal rituals can significantly alleviate feelings of loss. Her research revealed that rituals provide a tangible way to process emotions, helping individuals regain a sense of control and reduce grief's intensity by channeling sorrow into structured, intentional acts. 
                
                MoodinaBox.com was designed to guide you toward moments of peace, grounding, and mood transformation to help you find a bit of light, even in the smallest ways.`}
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
