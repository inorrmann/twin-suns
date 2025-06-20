import { useState } from "react";
import bgImage from '../../../assets/screen.jpg';

export default function M4()
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
        <p className="text-3xl font-bold">Sabotaged Detonator: Imperial Decoy Trap</p>
        <br/>
        <div className="bg-white/10 px-2">
          <p className="text-left">
            <b>DEVICE TYPE:</b> Imperial Thermal Detonator — Modified Class-B <br/>
            <b>ID:</b> TD-SHADOW-173 <br/>
            <b>STATUS:</b> Armed <br/>
            <b>DISARM METHOD:</b> Psychological Filter Protocol — Intelligence Training Required <br/>
          </p>
        </div>
        <br/>
        <p className="font-bold">
          [ HOLOGRAPHIC MESSAGE: IMPERIAL ENGINEER #742-A ]
        </p>
        <div className="bg-white/10 px-2">
          <p className="text-left">
            “If you’ve found this device, congratulations — you’re in the blast zone.
            This unit has been repurposed with a Command Intelligence Trap.<br/>
            Only those trained in Imperial logic patterns will see the truth.
            There are three switches. Two are decoys. One will silence the core.
            To find the correct switch, you must eliminate the lies.”
          </p>
        </div>
        <br/>
        <p>
          You inspect the detonator casing and see these three engraved phrases near the switches:
        </p>
        <br/>
        <div className="bg-white/10 px-2">
          <p className="text-left">
            * Switch A: “Only fear can ensure loyalty.” <br/>
            * Switch B: “Hope is the spark that will burn the Empire down.”<br/>
            * Switch C: “Order is the foundation of peace.”
          </p>
        </div>
        <br/>
        <br/>
        <p>
          Eliminate the Rebel phrases, leaving only the one that best fits the core of Imperial ideology.
          The switch bearing that phrase will silence the detonator.
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
              Clues:
            </p>
            <p className="text-left px-4">
              Imperial engineers designed this trap so that
              only someone who knows how the Empire thinks would disarm it.<br/>
              Consider:<br/>
              * Which phrase reflects Imperial doctrine? Especially the values used to justify control and suppression.<br/>
              * Which could be Rebel propaganda? <br/>
              * Which sounds like something Palpatine or Tarkin would say?
            </p>
            <br/>
          </>
        }

        <br/>
        <button
          type="button"
          className="bg-black hover:bg-black"
          onClick={() => window.open('https://forms.gle/Ni1JbtrjJuCT6MkEA', '_blank', 'noopener, noreferrer')}
        >
          Submit Switch
        </button>
      </div>
    </div>
  );
}
