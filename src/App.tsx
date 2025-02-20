import React from 'react';
import Story from './components/Story';
import Header from './components/Header';
import Sanctuary from './components/Sanctuary';
import Quote from './components/Quote';
import Gifts from './components/Gifts';
import Reflections from './components/Reflections';
import ReflectionSpace from './components/ReflectionSpace';
import GentleInvitation from './components/GentleInvitation';

function App() {
  return (
    <div className="relative">
      {/* Fixed background */}
      <div
        className="fixed inset-0 w-full h-full bg-fixed bg-[#fafafa] opacity-80"
        style={{
          backgroundImage: "url('https://ik.imagekit.io/soulgenesis/Persephone/white.webp')",
          backgroundSize: '100% auto',
          backgroundRepeat: 'repeat-y',
          willChange: 'transform' // Optimize performance
        }}
      />

      {/* Scrollable content */}
      <div className="relative min-h-screen">
        {/* Header Section */}
        <Header />

        {/* Main Content */}
        <main className="relative mt-[10vh] md:mt-[20vh] px-4 sm:px-6 md:px-10 lg:px-20">
          {/* Content Section */}
          <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 max-w-10xl mx-auto w-full">
                <Sanctuary />
                <div className="hidden md:block w-full mt-8">
                  <img
                    src="https://ik.imagekit.io/soulgenesis/Persephone/seeds.png"
                    alt="Seeds illustration"
                    className="w-full h-auto object-contain xl:h-56"
                  />
                </div>
                <div className="mt-[20vh]">
                  <Story
                    expandedContent={`In ancient times, Persephone was the beloved daughter of Demeter, goddess of the harvest and life-giving earth. Persephone wandered through sunlit meadows, her laughter filling the air as she ran among wildflowers. Her presence was light itself, vibrant and joyful. Wherever she walked, flowers opened to the sun, trees burst into bloom, and the earth was rich with abundance.

One day, while picking a bouquet of spring's first flowers, the earth trembled, and a crack appeared beneath Persephone's feet. Out from this shadowed chasm came Hades, lord of the underworld, who had long admired her beauty and spirit. In a heartbeat, he took her hand and pulled her into the depths below, leaving behind only the echo of her last cry.

Demeter, unaware of the abduction, searched endlessly for her daughter, wandering the earth with desperation and grief. Day by day, her sorrow spread through the land, and with every tear she shed, the earth grew colder, the fields barren. Crops withered; flowers faded. She called out to the heavens, demanding her daughter's return, but only silence met her pleas.

As time passed, Persephone adjusted to her new realm, though it was one of shadow and silence. Her once-bright spirit dimmed, yet she learned to see in the dark. Slowly, she came to understand that her descent had brought her into a world not of punishment, but of mystery and wisdom. She became queen of the underworld, learning that darkness, too, had its own truths, its own forms of beauty and power.

But Demeter could not bear the loss of her daughter, and in her grief, she cursed the earth with endless winter. The humans cried out to the gods, for they were starving. Finally, Zeus intervened, compelling Hades to release Persephone so that the earth could be restored to life. Hades, with a heavy heart, agreed, but before letting her go, he gave her the seeds of a pomegranate to eat. As she tasted the fruit, she became forever bound to the underworld, part of its cycle, destined to return each year.

When Persephone emerged from the underworld, her mother ran to her, gathering her into her arms. As mother and daughter embraced, joy surged through Demeter, radiating outward. The earth responded to her elation—the cold began to melt, flowers broke through the frost, and fields greened with new life. Everywhere, trees blossomed, rivers sparkled, and meadows once barren burst into wild blooms, an endless carpet of vibrant colors stretching to the horizon.

This reunion became the turning of the seasons. Each spring, as Persephone ascends from the underworld, the earth awakens in celebration. Flowers unfurl, trees bear fruit, and life pulses through every living thing. When she returns to the underworld each autumn, the earth cools and rests, retreating into stillness to wait for her return.

Through her journey, Persephone transforms from a young girl of innocence into a queen who bridges light and dark, life and death. She becomes both the child of spring and the queen of the underworld, embodying the cycle of renewal and reminding us that even in the darkest seasons, there is the promise of blooming. Let's see the promise of new life.`}
                  />
                </div>
                <Quote />
                <Gifts />
                <Reflections />
                <ReflectionSpace />
                <GentleInvitation />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;