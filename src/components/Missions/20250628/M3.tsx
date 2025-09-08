import bgImage from '../../../assets/screen.jpg';

export default function M3()
{
  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen text-green-200 text-xl"
         style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-10 sm:p-20 sm:pb-10 ">
        <p className="text-3xl font-bold">
          Droid Memory Core: Reconstruct the Order
        </p>
        <br/>
        <div className="bg-white/10 px-2">
          <p className="text-left">
            <b>DEVICE ID:</b> PR-T0C-OL_77 <br/>
            <b>MODEL:</b> Protocol Droid, Jedi Temple Archive Subnet <br/>
            <b>STATUS:</b> Memory Core Fragmented — Partial Restoration Available <br/>
          </p>
        </div>
        <br/>
        <p className="font-bold">
          [ VOICE ACTIVATION DETECTED... ]
        </p>
        <p>
          "Initiating memory matrix... majority teachings scrambled... Sith override suspected. Please assist with
          reconstruction of core philosophical sequence to unlock access to Jedi Outpost Coordinates."
        </p>
        <br/>
        <br/>
        <p className="font-bold">
          [ DATA BLOCK // CORRUPTED ENTRIES — SCAN MODE ENABLED ]
        </p>
        <div className="bg-white/10 px-2">
          <p className="text-left">
            1. Control of emotion is the path to serenity. <br/>
            2. Power is the only path to peace. <br/>
            3. Anger leads to hate. <br/>
            4. Attachment is forbidden, for it leads to suffering. <br/>
            5. Hate leads to suffering. <br/>
            6. Fear leads to anger.<br/>
            7. Compassion is weakness.
          </p>
        </div>
        <br/>
        <p className="text-left font-bold">
          [ NOTICE: ENTRIES MAY ORIGINATE FROM SITH PHILOSOPHY — IDENTIFY AND IGNORE ]
        </p>
        <br/>
        <br/>
        <p className="text-left px-4">
          Reconstruct sequence of authentic Jedi teachings. Order is essential.
          Upload the first line in the correct restored philosophy.
        </p>
        <br/>
        <div className="bg-white/10 px-2">
          <p className="text-left">
            :: Awaiting Input... <br/>
            ENTER FIRST LINE ONLY
          </p>
        </div>
        <br/>
        <button
          type="button"
          className="bg-black hover:bg-black"
          onClick={() => window.open('https://forms.gle/saWptUeeCUWMJ3hA8', '_blank', 'noopener, noreferrer')}
        >
          Submit First Line
        </button>
      </div>
    </div>
  );
}
