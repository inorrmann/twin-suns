import { useState } from "react";
import bgImage from '../../../assets/screen.jpg';

export default function MT()
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
        <p className="text-3xl font-bold">Rebel Signal Intercept: Operation [ Redacted ]</p>
        <br/>
        <p className="text-left">
          <b>DEVICE TYPE:</b> Rebel Communications Relay – Encrypted Data Burst<br/>
          <b>LOCATION: </b>Outpost 77, Outer Rim Territories<br/><br/>
        </p>
        <p>
          Intercepted transmission contains a key phrase and coordinates.
          Unlock the rendezvous code name by completing the cipher.
        </p>
        <br/>
        <div className="bg-white/10 px-2">
          <p className="text-left">
            Transmission Fragment:<br/>
            <br/>
            "The resistance whispers through the void,<br/>
            A beacon’s light cuts through shadows,<br/>
            Our call sign is the pulse that never fades."
          </p>
        </div>
        <br/>
        <p>
          Task: Determine the two-word key phrase Rebels use to identify secure transmissions.
        </p>
        <br/>

        {!showClue1 &&
          <>
            <button
              type="button"
              className="bg-green-950 hover:bg-black "
              onClick={handleShowClue1 as never}
            >
              Click for Clue
            </button>
            <br/>
          </>
        }

        {showClue1 &&
          <p className="px-4">
            Clue: First word starts with ‘S’; Second word starts with ‘P’.
          </p>
        }
        <br/>
        <br/>
        <div className="bg-white/10 px-2">
          <p className="text-left">
            Coordinates confirmed. Rendezvous code name format: <br/>
            <br/>
            [ Key Phrase First Word ] + [ Tactical Suffix ]<br/>
            <br/>
            The suffix is a common signal term among Rebel cells,
            used to confirm a message was received.
            It shares its name with a sound that bounces back,
            a reverberation from a distant surface.
          </p>
        </div>
        <br/>
        <p>
          Task: Determine the full rendezvous code name.
        </p>
        <br/>
        <button
          type="button"
          className="bg-black hover:bg-black"
          onClick={() => window.open('https://forms.gle/DHbjkPPeqqczx5bY8', '_blank', 'noopener, noreferrer')}
        >
          Submit Code Name
        </button>
      </div>
    </div>
  );
}
