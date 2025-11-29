import { useState } from "react";
import bgImage from '../../../assets/screen.jpg';

export default function M5()
{
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase().trim() == 'master3152') {
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
          THE REBEL TERMINAL
        </p>
        <br/>

        {!authenticated &&
          <div className="bg-white/10 px-2">
            <p className="text-center">
              <b> ENTER THE PASSWORD FROM MOTIVATOR ADJUSTMENT PROTOCOL TO CONTINUE
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
              With a chirp of relief, R7-K4 came back online. Its dome spun, projecting a lattice of blue holographic
              light into the stormy air. The settlers gathered close as the astromech displayed a web of signals —
              interference from the planet’s crust, magnetic anomalies, and the faint echo of structures buried
              in the dunes.
            </p>
            <br/>
            <p className="text-left">
              But the grid was dense, tangled with static. To make sense of it, the settlers had to count the
              interference lines, separating natural noise from the real pathways beneath. It was painstaking work,
              but within the grid, patterns began to emerge: hidden tunnels, half-collapsed ruins, and the faint
              glow of an energy source far below.
            </p>
            <br/>
            <p className="text-left">
              The settlers worked carefully, mapping the threads of light. Each counted line drew them closer to
              understanding the terrain around them — and closer to uncovering what else had once lived on Sallak.
            </p>
            <br/>
            <p className="text-left">
              Decode the number sequence that unlocks the Rebel terminal. When you finish, you will receive a password.
              Remember that password to unlock the next portion of the story, located near the office.
            </p>
            <br/>
            <br/>

            <button
              type="button"
              className="bg-black hover:bg-black"
              onClick={() => window.open('https://cerosoul.github.io/astromechsensorarray/', '_blank', 'noopener, noreferrer')}
            >
              Click here to decode the number sequence
            </button>
          </div>
        }
      </div>
    </div>
  );
}
