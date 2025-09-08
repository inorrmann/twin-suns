import { useState } from "react";
import bgImage from '../../../assets/screen.jpg';

export default function M1()
{
  const [showClue1, setShowClue1] = useState(false);
  const [showClue2, setShowClue2] = useState(false);

  function handleShowClue1(){
    setShowClue1(true);
  }

  function handleShowClue2(){
    setShowClue2(true);
  }

  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen text-green-200 text-xl"
         style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-10 sm:p-20 sm:pb-10">
        <p className="text-3xl font-bold">Astrogation Crisis — Fragmented Nav Data</p>
        <br/>
        <p>
          A sealed cargo container was discovered outside the perimeter at Outpost 77.
          There are no shipping tags or transponder records.
          However, a local nav-log left trace vectors in the container's shielding.
          You’ll need to cross-check stellar routes to triangulate the origin world of this crate.
        </p>
        <br/>
        <p className="font-bold">
          Encrypted Destination Clues:
        </p>
        <div className="bg-white/10 px-2">
          <p className="text-left">
            <b>LOC:</b> RIM.QUAD-EX <br/>
            <b>ENV:</b> -60°C surface avg | WHT-ICE-SWEEP<br/>
            <b>MIL:</b> BASE-ECHO.3T8 | ERA: REB.ESC-CAMP<br/>
            <b>STAT:</b> NO CIV | ZOO: PRD-NTV-SPEC<br/>
            <b>SYS-ANOM:</b> ASTEROID-DNS.TRIAX-SHD
          </p>
        </div>
        <br/>
        <p>
          Task: Based on the clues above, determine the container's origin.
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
              Decoding Tips
            </p>
            <p className="text-left px-4">
              * LOC = General region in galaxy <br/>
              * ENV = Climate/environment<br/>
              * STAT = Civilization / fauna presence<br/>
              * MIL = Historical military presence<br/>
              * SYS-ANOM = Known space hazards nearby
            </p>
            <br/>
          </>
        }

        {showClue1 && !showClue2 &&
          <>
            <button
              type="button"
              className="bg-green-950 hover:bg-black"
              onClick={handleShowClue2 as never}
            >
              Click for More Clues
            </button>
            <br/>
          </>
        }

        {showClue2 &&
          <>
            <p className="text-left font-bold">
              Decoded Clues
            </p>
            <p className="text-left px-4">
              * RIM.QUAD-EX → Located in the Outer Rim, Expansion Region. <br/>
              * WHT-ICE-SWEEP & -60°C → Known for its harsh, frozen surface. <br/>
              * BASE-ECHO.3T8 → Echo Base <br/>
              * NO CIV, PRD-NTV-SPEC → No native sentient life, but dangerous fauna. <br/>
              * ASTEROID-DNS → Nearby asteroid field (as seen in the Hoth system) <br/>
            </p>
            <br/>
          </>
        }

        <br/>
        <button
          type="button"
          className="bg-black hover:bg-black"
          onClick={() => window.open('https://forms.gle/TtLVaZ1V8cSzC6FE8', '_blank', 'noopener, noreferrer')}
        >
          Submit Location
        </button>
      </div>
    </div>
  );
}
