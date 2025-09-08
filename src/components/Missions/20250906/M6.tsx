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
        <p className="text-3xl font-bold">ARRIVAL ON SALLAK</p>
        <br/>
        <br/>
        <p className="font-bold text-2xl">
          THE JOURNAL
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
              The tunnels were colder than expected, the air thick with the weight of something ancient.
              It was there, in a shadowed alcove of stone, that they found it: a blackened pack, brittle with age,
              wedged between broken slabs. Inside was a journal sealed with a strange mechanism.
            </p>
            <br/>
            <p className="text-left">
              When they cracked it open, the pages seemed to resist their eyes. The letters twisted, shapes shifting
              unnaturally as though alive. One settler muttered the word that chilled the group to silence: Sith.
            </p>
            <br/>
            <p className="text-left">
              The journal was more than notes — it was a warning, encoded through a cipher meant to hide its meaning.
              To reveal the message, the settlers would need to shift the letters into clarity. With every fragment
              decoded, a grim picture began to take shape: explorers who had come before, seduced or destroyed
              by a darkness that lingered on Sallak.
            </p>
            <br/>
            <p className="text-left">
              Whatever had been written here, it was meant to be hidden. And yet, the settlers knew they had no
              choice but to read it.
            </p>
            <br/>
            <p className="text-left">
              Decipher the decoded phrase leading to the Cipher Vault. When you finish, you will receive a password.
              Remember that password to unlock the next portion of the story, located near the homestead.
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
