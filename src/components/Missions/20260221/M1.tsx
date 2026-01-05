import bgImage from '../../../assets/screen.jpg';
import {useState} from "react";

export default function M1()
{
  const [authenticated, setAuthenticated] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
      setAuthenticated(true);
      setIncorrectPassword(false);
  };

  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen text-green-200 text-xl"
         style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-10 sm:p-20 sm:pb-10 ">
        <p className="text-3xl font-bold">CHAPTER 2: WHISPERS OF THE VAULT</p>
        <br/>
        <br/>

        {!authenticated &&
          <div>
            <p className="font-bold text-2xl">
              ARRIVAL ON SALLAK - RECAP
            </p>
            <br/>
            <p className="text-left">
              The first settlers of Sallak fought storms, decoded lost transmissions, and pieced together fragments
              of the past. With the help of droids and their own ingenuity, they uncovered hidden archives and sent a
              beacon into the stars — declaring Outpost 77’s existence to the galaxy. But their triumph carried a cost.
              The signal was received. A mysterious ship, neither Imperial nor Rebel, descended upon Sallak’s surface.
              Now, as shadows move across the dunes, the settlers brace for what comes next…
            </p>
            <br/>
          </div>
        }

        {!authenticated &&
          // <div className="bg-white/10 px-2">
          //   <p className="text-center">
          //     <b> ENTER NAME OF VENDOR WHERE YOU FOUND OUT ABOUT THIS STORY TO CONTINUE
          //     </b>
          //     <br/>
          //     <br/>
          //   </p>
          //   <form
          //     onSubmit={handleSubmit}
          //     className="pb-2 text-green-800"
          //   >
          //     <input
          //       type="text"
          //       value={input}
          //       onChange={(e) => setInput(e.target.value)}
          //       className="text-xl bg-gray-700 p-2 max-w-64"
          //     />
          //     <button
          //       type="submit"
          //       className="ml-4 bg-black text-white pb-2"
          //     >Submit
          //     </button>
          //   </form>
          // </div>
          <button
            type="button"
            className="bg-black hover:bg-black"
            onClick={handleSubmit}
          >
            Click here to continue
          </button>
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
            <p className="font-bold text-2xl">
              PART 1: THE DESCENT OF SHADOWS
            </p>
            <br/>
            <p className="text-left">
              Dawn crept over Sallak like a wounded animal, bleeding pale pink light across the dunes. The settlers
              of Outpost 77 stood in silence on the ridge overlooking their camp, blasters drawn, eyes fixed on
              the shuddering horizon. Dust still churned in violent spirals where the unknown vessel had crashed
              in the night. No one spoke. There was nothing left to say. Their beacon — meant to declare hope —
              had become an invitation.
            </p>
            <br/>
            <p className="text-left">
              R7-K4 whirred anxiously, cycling through frequencies in a frantic attempt to track whatever had landed.
              Only static answered. No transponder codes. No chatter. No signatures. Just the disquieting hum of the
              desert itself, as if Sallak were holding its breath.
            </p>
            <br/>
            <p className="text-left">
              Commander Hale slipped his helmet under his arm, brow furrowed with a mix of resolve and dread.
              “We need to know what fell out there,” he said. “If it’s hostile, we prepare. If it’s… something else,
              we adapt.” His voice carried the weight of too many battles, yet there was something new beneath it —
              the uncertainty of facing an enemy that defied categorization.
            </p>
            <br/>
            <p className="text-left">
              Lysa Torren, the expedition’s linguist and archivist, studied the dunes through her macrobinoculars.
              Between the waves of heat distortion, she spotted it: jagged metal protruding from the sand, half-sunken
              like the rib bone of a great beast. The crash site was large — much larger than their early scans
              had implied. Whatever had fallen was massive, multilayered, and ancient. “We should leave now,”
              she said quietly, lowering the binoculars. “Before the storm closes in again.”
            </p>
            <br/>
            <p className="text-left">
              The team descended toward the crash site, their boots sinking into ever-shifting sand. The air
              tasted metallic, charged, wrong. Sallak’s twin suns had barely cleared the horizon and yet the settlers
              already felt watched — as though the dunes themselves possessed eyes.
            </p>
            <br/>
            <p className="text-left">
              At the crash site’s edge, fragments of the vessel jutted like broken teeth. Symbols unfamiliar to
              any known faction were carved into the hull, weathered and half-melted. Hale reached out and brushed
              his gloved fingers across them, and an electric tingle shot up his arm. “This thing wasn’t built
              recently,” he murmured. “It’s older than the Empire. Maybe older than the Republic.”
            </p>
            <br/>
            <p className="text-left">
              Lysa knelt beside a scorched panel. The sand around it had been disturbed — not by the crash,
              but by movement. Tracks. Humanoid. But elongated, the steps unnaturally spaced. Whatever had been
              inside had already left the wreck.
            </p>
            <br/>
            <p className="text-left">
              And it had gone east — toward the tree line.
            </p>
            <br/>
            <p className="text-left">
              The settlers exchanged grim looks. Whatever they were dealing with was mobile.
            </p>
            <br/>
            <p className="text-left">
              And intelligent.
            </p>
            <br/>
            <p className="text-left">
              At the base of the shattered hull, they found their first clue: a small metal plate etched with a
              single word in Aurebesh — perhaps a message left behind by whatever emerged from the wreck.
            </p>
            <br/>
            <br/>
            <p className="text-left">
              To continue, go to the entrance of Outpost 77, find the small plate, translate it, and scan it.
            </p>
            <br/>
            <br/>
            {/*<button*/}
            {/*  type="button"*/}
            {/*  className="bg-black hover:bg-black"*/}
            {/*  onClick={() => window.open('https://www.twinsunsranch.com/#/scavenger-hunt/02212026/part-2', '_blank', 'noopener, noreferrer')}*/}
            {/*>*/}
            {/*  Click here to continue once you've translated the plate*/}
            {/*</button>*/}
          </div>
        }

      </div>
    </div>
  );
}
