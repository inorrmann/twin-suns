import { useState } from "react";
import bgImage from '../../../assets/screen.jpg';

export default function M6()
{
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase().trim() == 'angletimer') {
      setAuthenticated(true);
      setIncorrectPassword(false);
    } else {
      setIncorrectPassword(true);
    }
  };

  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen text-green-200 text-xl"
         style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-10 sm:p-20 sm:pb-10 ">
        <p className="text-3xl font-bold">CHAPTER 2: WHISPERS OF THE VAULT</p>
        <br/>
        <br/>
        <p className="font-bold text-2xl">
          PART 6: THE BEACON PLAIN
        </p>
        <br/>

        {!authenticated &&
          <div className="bg-white/10 px-2">
            <p className="text-center">
              <b> ENTER THE PASSWORD FROM ASTROMECH SENSOR ARRAY TO CONTINUE
              </b>
              <br/>
              <br/>
            </p>
            <form
              onSubmit={handleSubmit}
              className="pb-2 text-green-800"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="text-xl bg-gray-700 p-2 max-w-64"
              />
              <button
                type="submit"
                className="ml-4 bg-black text-white pb-2"
              >Submit
              </button>
            </form>
          </div>
        }

        {incorrectPassword &&
          <div>
            <br/>
            <p className="text-2xl warning">
              INCORRECT PASSWORD
            </p>
            <br/>
          </div>
        }

        {authenticated &&
          <div>
            <br/>
            <p className="text-left">
              The prism’s final glow faded as the settlers finished counting its symbols. When the last glyph dimmed,
              the object emitted a soft chime and went inert in Lysa’s hands, its purpose fulfilled.
              Whatever intelligence had left it behind had expected them to succeed — and expected them to move on.
            </p>
            <br/>
            <p className="text-left">
              The commander studied the surrounding dunes. “We’re being funneled,” he said quietly.
              “Every clue, every detour — it’s all narrowing.” He pointed toward a low stretch of desert where
              the sands flattened unnaturally, almost smoothed by design rather than wind.
              “That plain wasn’t on our initial scans.”
            </p>
            <br/>
            <p className="text-left">
              They set out before the moons reached their zenith. The terrain shifted subtly as they advanced:
              fewer loose dunes, more compacted sand, scarred with old tracks half-erased by time.
              This was not wilderness alone. This was approach terrain — land once traveled, once guarded.
              Halfway across the plain, Lysa stopped abruptly. Her scanner whined, then steadied.
              “I’m detecting residual energy spikes. Old power signatures. Weak, but patterned.”
              She knelt, brushing sand aside to reveal a buried emitter plate,
              its surface cracked but unmistakably artificial.
            </p>
            <br/>
            <p className="text-left">
              The settlers exchanged looks. This wasn’t scavenger debris. This was infrastructure.
              Then the ground began to hum.
              At first it was barely perceptible — a vibration felt through boots rather than heard.
              The hum deepened, spreading across the plain in a slow pulse. One by one, buried pylons rose
              from beneath the sand, ancient mechanisms grinding back to life.
              Their surfaces were scorched and weathered, but their alignment was deliberate.
              “The beacon grid,” the commander breathed. “This was part of Outpost 77.”
            </p>
            <br/>
            <p className="text-left">
              Before anyone could react, a shape moved along the far edge of the plain.
              The watcher emerged fully this time, no longer hiding among the dunes.
              Tall, draped in layered desert gear, its movements were precise, controlled.
              It stopped just short of the nearest pylon and turned toward the settlers.
              No weapons were raised. No signal was transmitted.
              Instead, the watcher reached out and placed a hand against the pylon.
              A light surged through the grid.
              A column of blue-white energy erupted skyward, thinner and weaker than the main beacon —
              but unmistakably the same technology. The outpost’s echo. Proof that this place had been waiting to wake.
            </p>
            <br/>
            <p className="text-left">
              The watcher stepped back, meeting the settlers’ gaze one final time. Then it vanished into the dunes,
              swallowed by the night as if it had never been there at all.
              Silence followed — heavy, reverent.
              Lysa broke it softly. “They didn’t stop us. They activated it for us.”
              The commander nodded, eyes fixed on the rising light. “Then Outpost 77 isn’t just ahead. It’s calling us.”
            </p>
            <br/>
            <p className="text-left">
              Beyond the plain, faint shapes now resolved against the horizon: collapsed towers, antenna spines,
              the skeletal remains of habitation domes. The true site of the outpost lay just beyond the next ridge —
              close enough to see, but still shrouded in darkness.
            </p>
            <br/>
            <p className="text-left">
              As the settlers moved forward, the beacon’s hum steadied behind them, a promise and a warning intertwined.
              They were no longer wandering. They were arriving. As the settlers advanced toward the broken silhouette
              of Outpost 77, Lysa slowed, her scanner humming softly. “Something’s wrong,” she said.
              “The beacon grid we just activated... it isn’t originating from here.”

            </p>
            <br/>
            <p className="text-left">
              The commander stopped. “What do you mean?” She adjusted the display, projecting a faint overlay
              into the air. The beacon’s signal, now stable, traced backward — not just to the buried pylons,
              but far beyond them, deep into the desert they had crossed. The source point pulsed faintly,
              distant and obscured, as if masked by interference.
              “This grid was designed to respond,” Lysa said. “Not to lead. Someone reconfigured it to wake
              only when outsiders arrived.”
            </p>
            <br/>
            <p className="text-left">
              One of the settlers glanced back toward the dunes. “The watcher.” “Or whoever taught them,”
              the commander replied. They stood in silence as the truth settled in.
              Outpost 77 had not been abandoned and rediscovered by chance. It had been preserved. Guarded.
              And activated at precisely the right moment.
            </p>
            <br/>
            <p className="text-left">
              As the outpost’s ruins loomed closer, one question hung heavier than the desert air itself:
              Was the watcher protecting Outpost 77... or preparing it for something yet to arrive?
            </p>
            <br/>
            <p className="text-left">
              As the beacon grid stabilized, one of the pylons emitted a sharp tonal shift.
              Lysa turned, scanning the source. A narrow panel on its base slid open with a hiss of displaced sand,
              revealing a recessed data plate etched with unfamiliar symbols.
              “These aren’t navigation marks,” she said. “They’re encoded.”
              The commander studied the glyphs, their pattern repeating with deliberate spacing.
              “A message,” he said. “Left for whoever reached this far.”
            </p>
            <br/>
            <p className="text-left">
              The symbols pulsed once, then locked into a static configuration — waiting.
              Whatever truth awaited them inside Outpost 77, it would not be given freely.
              It would have to be uncovered, decoded, and understood.
              Only then would the path forward open.
            </p>
            <br/>
            <br/>

            <button
              type="button"
              className="bg-black hover:bg-black"
              onClick={() => window.open('https://cerosoul.github.io/sithcypherchallenge/', '_blank', 'noopener, noreferrer')}
            >
              Click here to decipher the phrase
            </button>
          </div>
        }
      </div>
    </div>
  );
}
