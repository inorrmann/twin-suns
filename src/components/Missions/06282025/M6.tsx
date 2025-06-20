import bgImage from '../../../assets/screen.jpg';

export default function MT()
{
  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen text-green-200 text-xl object-contain"
         style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-10 sm:p-20 sm:pb-10 ">
        <p className="text-3xl font-bold">Silent Beacon: Jedi Archive Fragment</p>
        <br/>
        <p className="text-left">
          <b>DEVICE TYPE:</b> Jedi Emergency Signal Buoy – Archive Access Locked
        </p>
        <br/>
        <div className="bg-white/10 px-2">
          <p className="text-left">
            [ Signal Strength: █ █ ░ ░ ░ ░ ]<br/>
            [ Power Core: 12% Remaining ]<br/>
            [ Message Integrity: Fragmented ]
          </p>
        </div>
        <br/>
        <p className="font-bold text-left">
          :: USER PRESENCE DETECTED ::
        </p>
        <br/>
        <p className="text-left">
          Initiating Jedi Archive Authentication Protocol...<br/>
          Stand by for vocal pattern test...
        </p>
        <br/>
        <br/>
        <div className="bg-white/10 px-2">
          <p className="text-left">
            [ AUDIO FRAGMENTS: INCOMPLETE TRANSMISSION ]
            <br/><br/>
            Voice 1: He came before the Clone Wars, but after the High Republic…
            <br/><br/>
            Voice 2: He trained the one who would train the Chosen One…
            <br/><br/>
            Voice 3: He died — but not by blade. He became more.
            <br/><br/>
            Voice 4: He once said: “Your eyes can deceive you. Don’t trust them.”
          </p>
        </div>
        <br/>
        <p>
          To unlock the archive fragment, you must identify the Jedi being described.
          Only one name fits all four clues.
        </p>
        <br/>
        <br/>
        <button
          type="button"
          className="bg-black hover:bg-black"
          onClick={() => window.open('https://forms.gle/4w787uzyhVFDevHC6', '_blank', 'noopener, noreferrer')}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
