import { useState } from "react";
import bgImage from '../../../assets/screen.jpg';

export default function M2()
{
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase().trim() == 'imperial37') {
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
        <p className="text-3xl font-bold">CHAPTER 1: ARRIVAL ON SALLAK</p>
        <br/>
        <br/>
        <p className="font-bold text-2xl">
          PART 2: THE MONOLITH
        </p>
        <br/>

        {!authenticated &&
          <div className="bg-white/10 px-2">
            <p className="text-center">
              <b> ENTER PASSWORD FROM IMPERIAL PATTERN ANALYSIS TO CONTINUE WITH THE STORY
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
              The Marrowhawk came down hard in the sands of Sallak, throwing up a storm of dust. As the settlers
              stumbled out, coughing and blinking against the light of two moons, the world stretched before them:
              endless dunes broken by jagged cliffs of black stone.
            </p>
            <br/>
            <p className="text-left">
              It was there, half-buried at the edge of the crash site, that they found it — an ancient monolith,
              taller than a man and carved with geometric runes that pulsed faintly as they approached. The surface
              seemed to hum, vibrating with unseen energy. Some claimed it was a relic of the Old Republic.
              Others whispered that it resonated with the Force.
            </p>
            <br/>
            <p className="text-left">
              Whatever its origin, the settlers soon realized the monolith held a secret. Symbols carved into its
              face formed a shifting grid, the patterns changing as if testing their perception. Only by aligning
              the runes correctly could the monolith’s message be unlocked.
            </p>
            <br/>
            <p className="text-left">
              Kneeling in the dust, the pioneers traced the glowing lines with gloved fingers, murmuring to one
              another as they pieced together the logic of the grid. Something ancient — and powerful — had marked
              Sallak long before they had arrived.
            </p>
            <br/>
            <p className="text-left">
              Complete the 3-letter code that reveals the directions to the canyon crossing. When you finish, you will
              receive a password. Remember that password to unlock the next portion of the story,
              located at the center of the Marketplace.
            </p>
            <br/>
            <br/>

            <button
              type="button"
              className="bg-black hover:bg-black"
              onClick={() => window.open('https://cerosoul.github.io/forcelogicgrid/', '_blank', 'noopener, noreferrer')}
            >
              Click here to decipher the 3-letter code
            </button>
          </div>
        }
      </div>
    </div>
  );
}
