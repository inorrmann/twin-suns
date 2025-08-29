import { useState } from "react";
import bgImage from '../../../assets/screen.jpg';

export default function M7()
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
        <p className="text-3xl font-bold">TITLE GOES HERE</p>
        <br/>

        {!authenticated &&
          <div className="bg-white/10 px-2">
            <p className="text-center">
              <b> ENTER XXX TO CONTINUE
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

            </p>
            <br/>
            <p className="text-left">

            </p>
            <br/>
            <p className="text-left">

            </p>
            <br/>
            <p className="text-left">

            </p>
            <br/>
            <p className="text-left">

            </p>
            <br/>
            <br/>

            <button
              type="button"
              className="bg-black hover:bg-black"
              onClick={() => window.open('https://cerosoul.github.io/imperialpatternanalysis/', '_blank', 'noopener, noreferrer')}
            >
              Click here to
            </button>
          </div>
        }


        {/*<div className="bg-white/10 px-2">*/}
        {/*  <p className="text-left">*/}
        {/*    <b></b> SCREEN WITH TRANSPARENT BACKGROUND <br/>*/}

        {/*  </p>*/}
        {/*</div>*/}
        {/*<br/>*/}

      </div>
    </div>
  );
}
