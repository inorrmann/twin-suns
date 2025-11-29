import { useState } from "react";
import bgImage from '../../../assets/screen.jpg';

export default function M3()
{
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase().trim() == 'forcegrid') {
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
          THE HIDDEN CHAMBER
        </p>
        <br/>

        {!authenticated &&
          <div className="bg-white/10 px-2">
            <p className="text-center">
              <b> ENTER PASSWORD FROM FORCE LOGIC GRID TO CONTINUE
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
              The crash site yielded more than sand and jagged stone. As the settlers scouted outward, they discovered a
              corroded durasteel hatch half-buried beneath a dune. Scratched into its surface, almost erased by time,
              was the unmistakable symbol of the Rebellion.
            </p>
            <br/>
            <p className="text-left">
              With effort, they pried it open. Inside lay a narrow chamber of cold durasteel walls, its consoles
              flickering faintly. A forgotten Rebel listening post. Sand poured through the cracks, coating the
              floor in red dust, but one terminal still flickered with life.
            </p>
            <br/>
            <p className="text-left">
              Lines of encrypted text glowed weakly on its screen — fragments of unfinished transmissions.
              It was clear: the Rebels had been here before, but for some reason they never returned.
              The settlers realized they might hold valuable intelligence, but the system was locked.
              A cryptogram protected its records, perhaps the only way to keep the Empire from uncovering
              what was hidden here.
            </p>
            <br/>
            <p className="text-left">
              If they could break the code, they would not only know what the Rebels sought on Sallak, but also
              why they abandoned this place to the storms.
            </p>
            <br/>
            <p className="text-left">
              Decipher the decoded phrase that pointed them deeper into the canyon toward underground water.
              When you finish, you will receive a password. Remember that password to unlock the next portion
              of the story, located at the Café.
            </p>
            <br/>
            <br/>

            <button
              type="button"
              className="bg-black hover:bg-black"
              onClick={() => window.open('https://cerosoul.github.io/rebelcodebreakerterminal/', '_blank', 'noopener, noreferrer')}
            >
              Click here to decipher the cryptogram
            </button>
          </div>
        }
      </div>
    </div>
  );
}
