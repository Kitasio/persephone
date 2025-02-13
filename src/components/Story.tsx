import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';

interface StoryProps {
  title?: string;
  content?: string;
  expandedContent?: string;
}

const Story: React.FC<StoryProps> = ({
  title = "The Story",
  content = "In ancient times, Persephone was the beloved daughter of Demeter, goddess of the harvest and life-giving earth. With her mother, Persephone wandered through sunlit meadows, her laughter filling the air as she ran among wildflowers. Her presence was light itself, vibrant and joyful. Wherever she walked, flowers opened to the sun, trees burst into bloom, and the earth was rich with abundance.",
  expandedContent = `In ancient times, Persephone was the beloved daughter of Demeter, goddess of the harvest and life-giving earth. With her mother, Persephone wandered through sunlit meadows, her laughter filling the air as she ran among wildflowers. Her presence was light itself, vibrant and joyful. Wherever she walked, flowers opened to the sun, trees burst into bloom, and the earth was rich with abundance.

One day, while picking a bouquet of spring's first flowers, the earth trembled, and a crack appeared beneath Persephone's feet. Out from this shadowed chasm came Hades, lord of the underworld, who had long admired her beauty and spirit. In a heartbeat, he took her hand and pulled her into the depths below, leaving behind only the echo of her last cry.

Demeter, her heart shattered, searched endlessly for her daughter, wandering the earth with desperation and grief. Day by day, her sorrow spread through the land, and with every tear she shed, the earth grew colder, the fields barren. Crops withered; flowers faded. She called out to the heavens, demanding her daughter's return, but only silence met her pleas.

As time passed, Persephone adjusted to her new realm, though it was one of shadow and silence. Her once-bright spirit dimmed, yet she learned to see in the dark. Slowly, she came to understand that her descent had brought her into a world not of punishment, but of mystery and wisdom. She became queen of the underworld, learning that darkness, too, had its own truths, its own forms of beauty and power.

But Demeter could not bear the loss of her daughter, and in her grief, she cursed the earth with endless winter. The humans cried out to the gods, for they were starving. Finally, Zeus intervened, compelling Hades to release Persephone so that the earth could be restored to life. Hades, with a heavy heart, agreed, but before letting her go, he gave her the seeds of a pomegranate to eat. As she tasted the fruit, she became forever bound to the underworld, part of its cycle, destined to return each year.

When Persephone emerged from the underworld, her mother ran to her, gathering her into her arms. As mother and daughter embraced, joy surged through Demeter, radiating outward. The earth responded to her elation—the cold began to melt, flowers broke through the frost, and fields greened with new life. Everywhere, trees blossomed, rivers sparkled, and meadows once barren burst into wild blooms, an endless carpet of vibrant colors stretching to the horizon.

This reunion became the turning of the seasons. Each spring, as Persephone ascends from the underworld, the earth awakens in celebration. Flowers unfurl, trees bear fruit, and life pulses through every living thing. When she returns to the underworld each autumn, the earth cools and rests, retreating into stillness to wait for her return.

Through her journey, Persephone transforms from a young girl of innocence into a queen who bridges light and dark, life and death. She becomes both the child of spring and the queen of the underworld, embodying the cycle of renewal and reminding us that even in the darkest seasons, there is the promise of blooming.`
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <h2 className="text-5xl xl:text-[70px] font-serif italic text-right mb-12 xl:mb-24 text-gray-800">{title}</h2>
      <div className="bg-[#404040]/80 p-12 xl:p-16 rounded-[70px] backdrop-blur-sm border border-gray-300/10">
        <div className="max-w-[86rem] mx-auto">
          <p className={`font-roboto text-xl xl:text-3xl/[1.5] font-light leading-relaxed whitespace-pre-line transition-colors duration-700 ease-in-out text-white`}>
            {isExpanded && expandedContent ? expandedContent : content}
          </p>
          {expandedContent && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-12 flex items-center gap-3 mx-auto text-white hover:text-gray-200 transition-colors group"
            >
              <span className="font-serif text-2xl xl:text-3xl">{isExpanded ? "READ LESS" : "READ MORE"}</span>
              <ArrowDown 
                className={`w-6 h-6 xl:w-8 xl:h-8 transition-transform duration-700 ease-in-out group-hover:translate-y-1 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Story;