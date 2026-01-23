import { useState } from "react";
import bgImage from '../../../assets/screen.jpg';

export default function M8()
{
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase().trim() == 'cantina') {
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
          PART 8: HEART OF OUTPOST 77
        </p>
        <br/>

        {!authenticated &&
          <div className="bg-white/10 px-2">
            <p className="text-center">
              <b> ENTER THE NAME OF BUILDING YET TO BE EXPLORED TO CONTINUE
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
              The Cantina lay ahead, half-buried in sand, its silhouette stark against the rising twin moons.
              Every dune they had crossed, every beacon pulse they had followed, had funneled them to this place —
              the outpost’s heart, carefully preserved and deliberately hidden.
              The settlers paused at the threshold, brushing windblown grit from the reinforced door.
              Lysa studied the faint etchings along its frame — protective glyphs, energy conduits,
              and symbols that matched the prism and holocore sequences they had decoded along the way.
              “This isn’t just a shelter,” she murmured. “It’s a repository. Everything the outpost was built to safeguard is here.”
            </p>
            <br/>
            <p className="text-left">
              With a deep breath, the commander keyed the door’s control panel. The locks clicked, the air hissed,
              and the massive door swung inward to reveal a chamber alive with faint energy. The walls were lined with
              consoles and storage units, their surfaces glowing faintly with active systems that hadn’t seen
              human hands in decades.
              And in the center, an illuminated table displayed the greatest revelation of all:
              a holographic map of Sallak, overlaid with data points, energy readings, and cryptic markers.
              It detailed not only Outpost 77 itself but the surrounding desert — hidden canyons, ancient energy nodes,
              and routes the settlers had never charted.
            </p>
            <br/>
            <p className="text-left">
              Lysa leaned closer. “This is more than a settlement. It’s a guide. Someone — or something — prepared it
              for those who would arrive, for those who would endure.”
              One of the settlers stepped forward, eyes widening. “The watcher... they weren’t just observing.
              They were teaching us. Preparing us for something beyond this outpost.”
              The commander nodded, glancing at the holographic display. “Outpost 77 isn’t just our home.
              It’s a starting point, a hub. There are paths we haven’t even explored — and whoever or whatever left
              this place knew we’d need them.”
            </p>
            <br/>
            <p className="text-left">
              The settlers spent hours examining the Cantina, cataloging its preserved supplies, restoring partial power,
              and deciphering the data archives. Every discovery confirmed the outpost had been deliberately safeguarded,
              its secrets layered like sediment in the desert.
            </p>
            <br/>
            <p className="text-left">
              As dawn broke over the dunes, painting the outpost in pale gold, a low hum resonated from a distant ridge
              beyond the Cantina. Lysa’s scanner picked up a faint energy signature — subtle, deliberate,
              and unlike anything they had encountered.
              The commander studied the readings. “Whatever left this place didn’t expect us to stop here forever.
              There’s more. Out there.”
            </p>
            <br/>
            <p className="text-left">
              For the first time, the settlers understood the full scale of Sallak: Outpost 77 was only the beginning.
              Beyond its walls, mysteries remained, challenges awaited, and the desert itself still held paths no one
              had walked in centuries.
              And though they had completed the outpost, the adventure — and the secrets it protected — were far from over.
            </p>
            <br/>
            <br/>

            <div className="bg-white/10 px-2">
              <p className="text-center text-2xl p-2">
                <b></b> The story continues Saturday, June 27th, 2026. <br/>
              </p>
            </div>
            <br/>
            <br/>
          </div>
        }
      </div>
    </div>
  );
}
