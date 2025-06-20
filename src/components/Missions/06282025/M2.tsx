import { useState } from "react";
import bgImage from '../../../assets/screen.jpg';

export default function M2()
{
  const [showClue, setShowClue] = useState(false);

  function handleShowClue(){
    setShowClue(true);
  }

  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen text-green-200 text-xl"
         style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-10 sm:p-20 sm:pb-10 ">
        <p className="text-3xl font-bold">Sith Holocron: Trial of Intent</p>
        <br/>
        <div className="bg-white/10 px-2">
          <p className="text-left">
            <b>ARTIFACT ID:</b> SITH-HOLO-XI/RED-OBSIDIAN <br/>
            <b>CLASSIFICATION:</b> Ancient Sith Teaching Core – Locked Mode <br/>
            <b>STATUS:</b> Active – User Detected <br/>
          </p>
        </div>
        <p>
          Only those who understand the nature of power may proceed.
        </p>
        <br/>
        <p className="font-bold">
          [ GATEKEEPER RESPONSE ACTIVE… ]
        </p>
        <div className="bg-white/10 px-2">
          <p className="text-left">
            “The strong must dominate.<br/>
            The weak must be ruled.<br/>
            But power gained too quickly decays from within.<br/>
            What, then, is the true path of the Sith?”
          </p>
        </div>
        <br/>

        <p className="font-bold">
          [ RESPONSE OPTIONS PRESENTED IN SITH SCRIPT: ]
        </p>
        <div className="bg-white/10 px-2">
          <p className="text-left">
            A. Mercy is strength. <br/>
            B. Anger without purpose is chaos. <br/>
            C. Power through patience. <br/>
            D. Shadows must remain shadows.
          </p>
        </div>
        <br/>

        <p>
          Your task is to reflect on the Sith Code and philosophy,
          and choose the phrase that aligns with Sith teachings
        </p>
        <br/>

        {!showClue &&
          <>
            <button
              type="button"
              className="bg-green-950 hover:bg-black "
              onClick={handleShowClue as never}
            >
              Click for Clue
            </button>
            <br/>
          </>
        }

        {showClue &&
          <>
            <p className="text-left font-bold">

            </p>
            <p className="text-left px-4">
              Shows mastery over impulsive emotion.
            </p>
            <br/>
          </>
        }

        <br/>
        <button
          type="button"
          className="bg-black hover:bg-black"
          onClick={() => window.open('https://forms.gle/Wc8v5xMWnNxVvZqk8', '_blank', 'noopener, noreferrer')}
        >
          Submit Response
        </button>
      </div>
    </div>
  );
}
