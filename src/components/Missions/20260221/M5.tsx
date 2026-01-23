import { useState } from "react";
import bgImage from '../../../assets/screen.jpg';

export default function M5()
{
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase().trim() == 'dusk') {
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
          PART 5: SHADOWS ON THE DUNES
        </p>
        <br/>

        {!authenticated &&
          <div className="bg-white/10 px-2">
            <p className="text-center">
              <b> ENTER THE PASSWORD FROM THE SHARD'S SEQUENCE IN HIDDEN RIDGE TO CONTINUE
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
                style={{ backgroundColor: "white" }}
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
              The sun dipped low, burning the horizon orange as the settlers trudged past the last stretch of
              silver-dusted dunes. Hidden Ridge receded behind them, but the watcher they had glimpsed there
              remained in their minds — a phantom on the cliffs, always just out of reach.
            </p>
            <br/>
            <p className="text-left">
              “This is it,” the commander said. “The signals from the shard point us toward the north dune field.
              If we follow it, we should finally be close to Outpost 77.”
              They crested a high dune and froze. Across the expanse of sand, a movement — deliberate, cautious,
              and fluid — shifted the shadows. The watcher. Only this time, it was closer. Its glowing eyes caught
              the dying light, reflecting gold and silver across the sands.
            </p>
            <br/>
            <p className="text-left">
              “Hold,” the commander whispered. “Don’t move.”
            </p>
            <br/>
            <p className="text-left">
              The creature — humanoid yet not quite human, its body wrapped in desert fabric that shimmered like sand —
              crouched behind a ridge. Then, slowly, it raised one hand. Not in aggression, but in a gesture. A signal.
              They were not enemies — at least, not yet.
            </p>
            <br/>
            <p className="text-left">
              Lysa stepped forward, holding up a scanner. The watcher tilted its head, studying her. Then it moved again,
              a ripple in the dunes, and stopped at the crest of another ridge. With deliberate steps, it looked back
              — almost beckoning — before disappearing briefly behind the sand.
            </p>
            <br/>
            <p className="text-left">
              The settlers exchanged uneasy glances. “Do we follow?” one whispered. The commander nodded.
              “We have no choice. If they’re guiding us, it’s toward something important — maybe Outpost 77 itself.”
            </p>
            <br/>
            <p className="text-left">
              They pressed on, boots sinking into hot sand, following the watcher’s path across the dunes.
              Each step brought them closer to the terrain they had only seen in glimpses from the shard’s projections.
              Finally, as night fell and the twin moons of Sallak rose, silver light glinting across the dunes,
              the settlers arrived at a small valley. At its center, half-buried in sand, lay the remnants of
              a supply cache: crates, corroded tools, and a small metallic prism etched with strange glyphs.
            </p>
            <br/>
            <p className="text-left">
              Lysa knelt and carefully lifted the prism, rotating it in her hands. Some symbols glowed faintly under
              the moonlight; others were worn smooth. “These markings...” she murmured, tracing them with her fingers.
              “The number of symbols — it must be the key. Whoever left this wants us to count them, to unlock
              the next step.”
            </p>
            <br/>
            <p className="text-left">
              The commander looked over her shoulder. “Then this is it. The prism is our guide — our next clue.
              And it confirms the watcher has been leading us here, deliberately shaping our path.”
            </p>
            <br/>
            <p className="text-left">
              The settlers gathered around, counting the symbols carefully. Each glyph pulsed faintly as if responding
              to their attention. The desert wind whispered through the valley, carrying the faint metallic tang of
              the half-buried supplies. And somewhere, just beyond the ridge, the watcher’s eyes glimmered,
              observing silently.
            </p>
            <br/>
            <p className="text-left">
              For the first time, the settlers felt the weight of both guidance and danger. Their next step was clear
              — the prism held the password that would unlock the next chapter of their journey toward Outpost 77.
              But the desert still held secrets, and the watcher was far from done testing them.
            </p>
            <br/>
            <p className="text-left">
              Count the number of Outpost 77 logos in the prism located near one of the Cantina's entrance.
              Scan the prism and enter the number of logos you found to unlock the next portion of the story.
            </p>
            <br/>
            <br/>
          </div>
        }
      </div>
    </div>
  );
}
