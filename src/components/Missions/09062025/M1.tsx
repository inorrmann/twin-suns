import { useState } from "react";
import bgImage from '../../../assets/screen.jpg';

export default function M1()
{
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase().trim() == 'twin suns 77') {
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
        <p className="text-3xl font-bold">CHAPTER ONE - ARRIVAL ON SALLAK</p>
        <br/>
        <br/>
        <p className="font-bold text-2xl">
          PROLOGUE
        </p>
        <br/>
        <p className="text-left">
          In the forgotten reaches of the Outer Rim, beyond the borders of Imperial patrols and even the furthest
          Rebel listening posts, lies Sallak. A world spoken of only in half-whispered tales by smugglers and exiles.
          Some claim its storms strip ships bare of their metal. Others speak of ruins buried in its deserts,
          remnants of civilizations lost to time. Few who travel there return, and those who do rarely speak
          of what they found.
        </p>
        <br/>
        <p className="text-left">
          Yet for a group of pioneers aboard the Marrowhawk, Sallak represented something else: hope.
          Far from the Empire’s gaze, far from the endless civil war, there was a chance — a fragile, fleeting
          chance — to build something new: a home of their own. They called their dream "Outpost 77";
          though none knew whether it would last a day, a season, or a lifetime.
        </p>
        <br/>
        <p className="text-left">
          The ship descended into crimson skies. The settlers braced themselves, not knowing that every step
          they took from here forward would write the first chapter of a story few would ever believe.
        </p>
        <br/>

        {!authenticated &&
          <div className="bg-white/10 px-2">
            <p className="text-center">
              <b> ENTER NAME OF VENDOR WHERE YOU ACQUIRED THIS STORY TO CONTINUE
              </b>
              <br/>
              <br/>
            </p>
            <form
              onSubmit={handleSubmit}
              className="pb-2 text-green-800"
            >
              <input
                type="password"
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
              The descent did not go as planned. Sallak’s atmosphere boiled with static storms, lightning that
              bent sideways across the clouds, tearing at the Marrowhawk’s shields. Every warning light in the
              cockpit flared red as the hull groaned under the strain.
            </p>
            <br/>
            <p className="text-left">
              Then, amidst the storm, something unexpected: a signal. Faint, buried in the ion static,
              but unmistakably Imperial in origin. A pulse of encrypted patterns, repeating like a heartbeat.
              It meant one thing — the Empire had already been here.
            </p>
            <br/>
            <p className="text-left">
              If the settlers could complete the signal’s fractured sequence, they might learn what had been
              mapped before their arrival. If they failed… they would land blind, at the mercy of Sallak’s storms.
            </p>
            <br/>
            <p className="text-left">
              The crew scrambled to patch into the signal. Symbols flashed across their screens, jagged pieces of
              a puzzle waiting to be completed. The ship lurched as plasma struck its side, throwing sparks across
              the cockpit. Time was running out. Only by aligning the full Imperial sequence could the settlers
              chart a safe course to the surface.
            </p>
            <br/>
            <p className="text-left">
              Complete the series to reveal the coordinates for a stable landing zone. When you finish, you will
              receive a password. Remember that password to unlock the next portion of the story,
              located near the entrance of Outpost 77.
            </p>
            <br/>
            <br/>
            <button
              type="button"
              className="bg-black hover:bg-black"
              onClick={() => window.open('https://cerosoul.github.io/imperialpatternanalysis/', '_blank', 'noopener, noreferrer')}
            >
              Click here to complete the series
            </button>
          </div>
        }

      </div>
    </div>
  );
}
