import bgImage from '../../../assets/screen.jpg';

export default function M7()
{
  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen text-green-200 text-xl"
         style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-10 sm:p-20 sm:pb-10 ">
        <p className="text-3xl font-bold">Encrypted Orders: Clearance Code Echo</p>
        <br/>
        <p className="text-left">
          <b>DEVICE TYPE:</b> Imperial Tactical Memory Core<br/>
          <b>SECURITY STATUS:</b> Triple-Layer Encryption – Sequential Unlock Required
          <br/><br/>
          "Accessing memory core. Clearance requires sequential decryption — errors lock terminal permanently."
        </p>
        <br/>
        <div className="bg-white/10 px-2">
          <p className="text-left">
            [ LOGIN ATTEMPT LOG ] <br/>
            Last input detected: P – – – –  &nbsp; &nbsp; &nbsp; – – – – – – – –<br/>
            <br/>
            Imperial field protocol: Phrase used to initiate suppression actions
            against Force-sensitive targets.
          </p>
        </div>
        <br/>
        <p>
          Task: Deduce the two-word phrase used in the last login attempt.
        </p>
        <br/>
        <br/>
        <div className="bg-white/10 px-2">
          <p className="text-left">
            [ FILE UNLOCKED ]<br/><br/>
            <b>SUBJECT PROFILE</b><br/>
            <b>Species: Togruta</b><br/>
            Former military officer under Republic command; departed after legal tribunal<br/>
            <b>Threat Designation:</b> [ REDACTED ] <br/>
            <b>Operation:</b> [ – – – – –  &nbsp; &nbsp; &nbsp; – – – – – – – – ] <br/>
            <b>Alias:</b> "Ashla" <br/>
            <b>Code-naming Format:</b> [ OPERATION ] + [ ALIAS ] <br/><br/>
            Construct target’s official code name.
          </p>
        </div>
        <br/>
        <p>
          Task: Infer the target’s code name.
        </p>
        <br/>
        <br/>
        <div className="bg-white/10 px-2">
          <p className="text-left">
            [ IMPERIAL RECORD 877-B ] <br/>
            <b>Target:</b> [  – – – – – – – – &nbsp; &nbsp; &nbsp;  – – – – –  ] <br/>
            <b>Order:</b> Termination — refused<br/>
            <b>Field Commander:</b> [ REDACTED ] <br/>
            <b>Status: </b> Removed inhibitor chip, escaped <br/>
            <b>Unit:</b> Formerly 501st Legion<br/>
            <b>Armor Identifiers:</b> Blue markings, no helmet insignia
          </p>
        </div>
        <br/>
        <p>
          Task: Submit the <b>callsign</b> of the clone officer who defied orders.
        </p>
        <br/>
        <button
          type="button"
          className="bg-black hover:bg-black"
          onClick={() => window.open('https://forms.gle/8XzZpSAR9ZTRUL2c8', '_blank', 'noopener, noreferrer')}
        >
          Submit Callsign
        </button>
      </div>
    </div>
  );
}
