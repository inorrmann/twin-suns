import { useState } from "react";
import bgImage from '../../../assets/screen.jpg';

export default function M7()
{
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase().trim() == 'sithcode') {
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
        <p className="text-3xl font-bold">ARRIVAL ON SALLAK</p>
        <br/>
        <br/>
        <p className="font-bold text-2xl">
          THE CIPHER VAULT
        </p>
        <br/>

        {!authenticated &&
          <div className="bg-white/10 px-2">
            <p className="text-center">
              <b> ENTER THE PASSWORD FROM SITH CIPHER CHALLENGE TO CONTINUE
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
              Beneath the listening post lay a sealed chamber, its doors reinforced with plating and wires.
              Stenciled across the metal in fading paint: Cipher Vault.
            </p>
            <br/>
            <p className="text-left">
              Inside were crates of data drives, old transmission records, and sealed logs. Each was locked behind
              layers of ciphers, as though the Rebels had been protecting something more than ordinary intelligence.
            </p>
            <br/>
            <p className="text-left">
              As the settlers began decoding, they pieced together fragments: mentions of “contact” with something
              native to Sallak, strange readings in the storms, and unexplained disappearances of scouts who had
              gone too far from the outpost.
            </p>
            <br/>
            <p className="text-left">
              The deeper they went, the clearer it became — Sallak had never been empty. The Rebels had uncovered
              something they could not contain. And when they failed to stop it, they buried the truth here,
              deep underground.
            </p>
            <br/>
            <p className="text-left">
              Find the final phrase unlocking Outpost 77’s beacon. When you finish, you will receive a password.
              Remember that password to unlock the next portion of the story, located in the Cantina.
            </p>
            <br/>
            <br/>

            <button
              type="button"
              className="bg-black hover:bg-black"
              onClick={() => window.open('https://cerosoul.github.io/rebelciphervault/', '_blank', 'noopener, noreferrer')}
            >
              Click here to find the final phrase
            </button>
          </div>
        }
      </div>
    </div>
  );
}
