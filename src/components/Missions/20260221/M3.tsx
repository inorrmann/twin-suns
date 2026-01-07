import { useState } from "react";
import bgImage from '../../../assets/screen.jpg';

export default function M3()
{
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase().trim() == 'silver dust') {
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
          PART 3: TRACKS IN THE SHIFTING SANDS
        </p>
        <br/>

        {!authenticated &&
          <div className="bg-white/10 px-2">
            <p className="text-center">
              <b> ENTER PASSWORD FROM THE DAMAGED CYLINDER TO CONTINUE
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
              The settlers followed the fading footprints across the endless dunes, the sun climbing higher and
              heating the sand beneath their boots. The damaged cylinder they had discovered earlier lay between them,
              its surface etched with the scrambled message they had finally deciphered. As Lysa read aloud
              the decoded letters, R7-K4’s sensors hummed and whirred.
            </p>
            <br/>
            <p className="text-left">
              With a soft click, the cylinder’s hidden mechanism engaged. A panel on its side slid open, revealing
              a small, polished crystal inside. Light glimmered off the crystal, casting a narrow beam across the sand.
              Etched into the dune itself, highlighted by the crystal’s glow, were faint glyphs that spelled out
              a single phrase: “Silver Dust.” The desert wind shifted over the dunes, but the message remained,
              luminous and unmistakable, as if the planet itself had revealed it.
            </p>
            <br/>
            <p className="text-left">
              Commander Hale stepped closer, shading his eyes against the sun. “So... this is what it wanted us to find,”
              he said, nodding at the illuminated letters. “A clue. Directions, perhaps.”
            </p>
            <br/>
            <p className="text-left">
              One of the settlers brushed sand away from the glowing glyphs. “It’s guiding us,” the voice said.
              “The tracks, the cylinder... all of it was meant to point us here.”
            </p>
            <br/>
            <p className="text-left">
              Lysa crouched beside the crystal, scanning the surrounding dunes. “Silver Dust is clear enough,” she said,
              “but it’s only part of the path. There’s more hidden here... another piece we’ll need to reach
              the next location.”
            </p>
            <br/>
            <p className="text-left">
              Commander Hale nodded, his eyes narrowing against the glare of the sun. “Then we follow the first part,
              but we stay alert. The desert isn’t giving us the full route. Only by uncovering the rest of
              the code will we know exactly where to go next.”
            </p>
            <br/>
            <p className="text-left">
              R7-K4 hovered over the glowing glyphs, its sensors tracing the faint energy patterns.
              The droid’s dome pulsed in response, highlighting sequences of letters that seemed to shimmer and shift.
              The settlers understood: the next clue was embedded within these patterns, waiting to be decoded.
              Only once they solved it would the desert fully reveal the course ahead.
            </p>
            <br/>
            <br/>
            <p className="text-left">
              Find the droid in the marketplace and decipher the decoded phrase embedded in the droid's energy patterns.
            </p>
            <br/>
            <p className="text-left">
              To decode the phrase, shift each letter back by 3 and reverse the letters of each word.
            </p>
            <br/>
            <p className="text-left">
              When you finish, remember the decoded phrase to unlock the next portion of the story, located at the Vault.
            </p>
            <br/>

            {/*  “QHGGKL HJGLU”*/}
            {/*  How it works:*/}
            {/*  Players reverse the letters of each word → “KLGGHQ ULGJH”*/}
            {/*  Then apply Caesar shift -3 → “Hidden Ridge”*/}

            <br/>
          </div>
        }
      </div>
    </div>
  );
}
