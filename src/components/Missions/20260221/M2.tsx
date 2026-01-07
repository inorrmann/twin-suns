import { useState } from "react";
import bgImage from '../../../assets/screen.jpg';

export default function M2()
{
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase().trim() == 'welcome') {
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
          PART 2: THE DESERT THAT REMEMBERS
        </p>
        <br/>

        {!authenticated &&
          <div className="bg-white/10 px-2">
            <p className="text-center">
              <b> ENTER TRANSLATED WORD FOUND ON THE SMALL METAL PLATE
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
              The settlers followed the strange footprints eastward, leaving the shattered crash site behind as
              the suns rose higher, scorching the dunes in white-orange light. Sallak’s desert stretched endlessly
              before them: rolling sand ridges carved by relentless winds, jagged stone formations thrusting skyward
              like the bones of buried titans, and pockets of shimmering heat that warped the horizon into
              wavering mirages. It was a landscape that felt ancient — too ancient — as though entire civilizations
              had come and gone beneath its dunes.
            </p>
            <br/>
            <p className="text-left">
              Commander Hale raised a hand, signaling a halt. The tracks they’d been following were clearer here,
              preserved in the stillness of the night before. They were humanoid but wrong — elongated, unevenly spaced,
              as if the being moved with unnatural grace or unfamiliar weight. Each print pressed deep, far deeper than
              a human step should. “Whatever walked away from that wreck,” Hale murmured, “wasn’t stumbling.
              It was traveling with purpose.”
            </p>
            <br/>
            <p className="text-left">
              R7-K4 rolled closer, its treads sinking slightly into the sand. The droid warbled in irritation;
              its sensors were struggling again. The desert wasn’t empty — it hummed with static. Electrical
              interference crackled across their datapads and wrist comms, producing half-formed readings,
              corrupted glyphs, and bursts of distorted audio. The same interference that shrouded the forest in
              the original draft now rose from the desert itself — a phenomenon native to Sallak.
            </p>
            <br/>
            <p className="text-left">
              Lysa Torren knelt beside a jagged rock outcrop. Strange etchings covered the stone’s surface, curling
              in patterns eerily similar to the symbols scorched into the crashed vessel’s hull. But these were
              not carved. They were weathered — eroded naturally over centuries, perhaps millennia.
              “This can’t be coincidence,” she whispered. “These markings predate the crash by ages.
              The visitor didn’t bring this language here.” Hale stepped closer. “Meaning it came to it.”
              “Or was drawn to it,” Lysa corrected softly.
            </p>
            <br/>
            <p className="text-left">
              The wind shifted abruptly, carrying with it a low, droning resonance that vibrated in their bones.
              It was faint — distant — but unmistakably rhythmic. Machinery? Breathing? A signal? It pulsed through
              the dunes like a heartbeat buried deep in the planet’s crust.
              The settlers exchanged uneasy glances. Sallak wasn’t lifeless. It was alive, in ways none of them
              understood.
            </p>
            <br/>
            <p className="text-left">
              Ahead, the footprints veered sharply toward a narrow canyon carved between towering cliffs of sandstone.
              At its mouth, something glinted — a small metallic cylinder half-buried in the drift. Lysa brushed
              the sand from its surface and frowned. Scorch marks lined one side, its activation plate cracked,
              but faint writing remained visible. Not Aurebesh. Not anything recognized by Republic or Imperial archives.
              Yet its structure resembled an ancient cipher device — the kind wanderers used when venturing far beyond
              safe hyperlanes.
              “Someone left this,” Lysa said. “Whoever — or whatever — came out of that ship.”
              Hale scanned the canyon’s shadowed interior. “Or someone following it.”
            </p>
            <br/>
            <p className="text-left">
              A sudden hush fell over the desert. No wind. No shifting sand. Only silence, tense and thick, as if
              the dunes themselves were listening.
              R7 emitted a wavering beep. They were not alone.
              Something deep inside the canyon answered with a slow, resonant thrum.
              And it was getting closer.
            </p>
            <br/>
            <p className="text-left">
              The damaged cylinder contained an incomplete message — the first clear evidence of communication from
              the unknown visitor... or its pursuer.
            </p>
            <br/>
            <br/>
            <p className="text-left">
              Decipher the incomplete message left in the cylinder.
              When you finish, you will receive a password. Remember that password to unlock the next portion
              of the story, located at the Café.
            </p>
            <br/>
            <br/>

            {/*
            Cryptogram:

            Silver Dust in the Air

            S*LV*R **ST ** TH* **R

            Password: Silver Dust

            */}

            <button
              type="button"
              className="bg-black hover:bg-black"
              onClick={() => window.open('https://inorrmann.github.io/cylinder-message/', '_blank', 'noopener, noreferrer')}
            >
              Click here to decipher the incomplete message
            </button>
          </div>
        }
      </div>
    </div>
  );
}
