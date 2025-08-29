import { useState } from "react";
import bgImage from '../../../assets/screen.jpg';

export default function M2()
{
  const [showClue1, setShowClue1] = useState(false);

  function handleShowClue1(){
    setShowClue1(true);
  }

  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen text-green-200 text-xl"
         style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-10 sm:p-20 sm:pb-10 ">
        <p className="text-3xl font-bold">TITLE GOES HERE</p>
        <br/>
        <p>

        </p>
        <br/>
        <p className="font-bold">

        </p>
        <div className="bg-white/10 px-2">
          <p className="text-left">
            <b></b> SCREEN WITH TRANSPARENT BACKGROUND <br/>

          </p>
        </div>
        <br/>

        <p className="text-left">

        </p>
        <br/>
        <p className="text-left">

        </p>
        <br/>

        {!showClue1 &&
          <>
            <button
              type="button"
              className="bg-green-950 hover:bg-black "
              onClick={handleShowClue1 as never}
            >
              Click for Clues
            </button>
            <br/>
          </>
        }

        {showClue1 &&
          <>
            <p className="text-left font-bold">

            </p>
            <p className="text-left px-4">

            </p>
            <br/>
          </>
        }

        <br/>
        <button
          type="button"
          className="bg-black hover:bg-black"
          onClick={() => window.open('https://www.google.com', '_blank', 'noopener, noreferrer')}
        >
          Submit Location
        </button>
      </div>
    </div>
  );
}
