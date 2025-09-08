import { useState } from "react";
import bgImage from '../../../assets/screen.jpg';

export default function M5()
{
  const [showClue1, setShowClue1] = useState(false);

  function handleShowClue1(){
    setShowClue1(true);
  }

  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen text-green-200 text-xl object-contain"
         style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-10 sm:p-20 sm:pb-10 ">
        <p className="text-3xl font-bold">Smuggler's Code: Cracked Container</p>
        <br/>
        <div className="bg-white/10 px-2">
          <p className="text-left">
            <b>CONTAINER ID:</b> CR8-13X-COR_1 <br/>
            <b>SECURITY PROTOCOL:</b> Black Sun Encrypted Lock (Old Corellian Firmware) <br/>
            <b>LOCATION PING:</b> Outpost 77 <br/>
          </p>
        </div>
        <br/>
        <p>
          Container integrity intact. Lock integrity compromised. Crew access required.
        </p>
        <br/>
        <p className="font-bold">
          [ AUDIO LOG RECOVERED – SMUGGLER CREW, FINAL TRANSMISSION ]
        </p>
        <div className="bg-white/10 px-2">
          <p className="text-left">
            “Only one of the crew knew the real code.
            The rest used decoys — in case the Empire caught them.”
            <br/>
            <br/>
            Vexa said the passphrase was “Trust no one.”<br/>
            — But she always lied first.
            <br/>
            <br/>
            Korl said it was “No cargo, no credits.”<br/>
            — But he always copied Vexa.
            <br/>
            <br/>
            Skarn said it was “Shadows speak louder.”<br/>
            — But he swore he'd never lie.
            <br/>
            <br/>
            Sela just repeated what Skarn said…<br/>
            — Unless the boss was listening.
            <br/>
            <br/>
            Only one phrase was never spoken twice.
          </p>
        </div>
        <br/>
        <p>
          :: Decode which passphrase is authentic and submit it to bypass the lock.
          Incorrect entries may trigger surveillance sweeps. Proceed carefully.
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
              Possible Phrases:
            </p>
            <p className="text-left px-4">
              * Trust no one<br/>
              * No cargo, no credits <br/>
              * Shadows speak louder <br/>
              * I'd never lie <br/>
            </p>
            <br/>
          </>
        }

        <br/>
        <button
          type="button"
          className="bg-black hover:bg-black"
          onClick={() => window.open('https://forms.gle/ZSHVpeNNgmYjvMDc9', '_blank', 'noopener, noreferrer')}
        >
          Submit Phrase
        </button>
      </div>
    </div>
  );
}
