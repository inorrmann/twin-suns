import { useState } from "react";
import bgImage from '../../../assets/screen.jpg';

export default function M4()
{
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase().trim() == 'darkpath') {
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
          REPAIRING THE DROID
        </p>
        <br/>

        {!authenticated &&
          <div className="bg-white/10 px-2">
            <p className="text-center">
              <b> ENTER PASSWORD FROM REBEL CODEBREAKER TERMINAL TO CONTINUE
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
              As dawn rose, the storms returned. Crimson lightning forked across the skies, and the settlers’
              astromech — R7-K4 — buckled in the sand, its motivator core flickering dangerously. Sparks spat
              from its chassis as it wheeled helplessly in circles.
            </p>
            <br/>
            <p className="text-left">
              Without the astromech, the settlers’ odds of survival dropped sharply. R7-K4 carried navigation data,
              atmospheric readings, and the ability to scan for resources. But its motivator had slipped out of
              alignment, and only by resetting the sequence could the droid function again.
            </p>
            <br/>
            <p className="text-left">
              The settlers knelt around R7, opening its panel to reveal rows of shifting lights. Inside the motivator
              housing was a coded sequence, a failsafe meant to prevent tampering. To repair it, the settlers had
              to decode the proper four-letter alignment, restoring balance to the droid’s systems.
            </p>
            <br/>
            <p className="text-left">
              The air around them howled with wind. If they succeeded, the astromech would recover — and with it,
              the ability to map new resources. If they failed, R7 would be lost, and with it their only guide.
            </p>
            <br/>
            <p className="text-left">
              Decrypt the 4-letter code that unlocked the astromech’s sensor arrays.
              When you finish, you will receive a password. Remember that password to unlock the next portion
              of the story, located in the Speeder Garage.
            </p>
            <br/>
            <br/>

            <button
              type="button"
              className="bg-black hover:bg-black"
              onClick={() => window.open('https://cerosoul.github.io/motivatoradjustmentprotocol/', '_blank', 'noopener, noreferrer')}
            >
              Click here to decrypt the code
            </button>
          </div>
        }
      </div>
    </div>
  );
}
