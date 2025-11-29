import { useState } from "react";
import bgImage from '../../../assets/screen.jpg';

export default function M8()
{
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase().trim() == 'vengeance') {
      setAuthenticated(true);
      setIncorrectPassword(false);
    } else {
      setIncorrectPassword(true);
    }
  };

  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen text-green-200 text-xl"
         style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-10 sm:p-20 sm:pb-10 ">
        <p className="text-3xl font-bold">ARRIVAL ON SALLAK</p>
        <br/>
        <br/>
        <p className="font-bold text-2xl">
          OUTPOST 77
        </p>
        <br/>

        {!authenticated &&
          <div className="bg-white/10 px-2">
            <p className="text-center">
              <b> ENTER THE PASSWORD FROM REBEL CIPHER VAULT TO CONTINUE
              </b>
              <br/>
              <br/>
            </p>
            <form
              onSubmit={handleSubmit}
              className="pb-2 text-green-800"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="text-xl bg-gray-700 p-2 max-w-64"
              />
              <button
                type="submit"
                className="ml-4 bg-black text-white pb-2"
              >Submit
              </button>
            </form>
          </div>
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
            <br/>
            <p className="text-left">
              The Cipher Vault’s final lock clicked open. A hiss of stale air escaped as the settlers pried apart the
              doors, revealing rows of battered crates, cracked data cores, and corroded holodiscs stacked in the
              darkness. This was no simple cache of supplies. It was a graveyard of secrets.
            </p>
            <br/>

            <p className="text-left">
              Flickering holograms cast pale light against the cavern walls. Rebel scouts, speaking in fragmented
              recordings, described strange signals in Sallak’s storms. They spoke of shadows moving across the
              dunes without form, of scouts vanishing mid-patrol, and of a power hidden deeper than their instruments
              could reach. Their words ended abruptly, transmissions cut short mid-sentence, as though someone —
              or something — had silenced them.
            </p>
            <br/>

            <p className="text-left">
              The settlers’ relief at unlocking the vault quickly turned to unease. This planet was not just
              hostile by nature. It had a memory. It had teeth.
            </p>
            <br/>

            <p className="text-left">
              Still, necessity pressed them onward. They gathered what they could, repaired what systems remained
              functional, and finally turned to the last piece of the vault’s puzzle: the beacon.
            </p>
            <br/>
            <p className="text-left">
              R7-K4 extended a manipulator arm, plugging into a rusted relay. With sparks flying and gears grinding,
              the old machine roared back to life. Outside, the sands trembled as the signal of Outpost 77 pierced the
              sky. A pillar of blue light erupted into the heavens, cutting through the clouds like a blade.
              For the first time, the settlers’ voices carried across the void: We are here. We endure. We survive.
            </p>
            <br/>

            <p className="text-left">
              Cheers echoed among the group. For a moment, their struggles seemed worth it. They had carved out the
              first mark of civilization on this forgotten world. The light of Outpost 77 was born.
            </p>
            <br/>

            <p className="text-left">
              But celebration quickly turned to silence.
            </p>
            <br/>

            <p className="text-left">
              R7-K4 trilled sharply, its dome spinning toward the sky. On the scopes, an anomaly appeared: a
              vessel sliding into Sallak’s orbit, its outline jagged and wrong, cobbled from mismatched hull
              plating like some drifting carcass. Its engines glowed faintly, silent against the void, moving
              with deliberate precision.
            </p>
            <br/>

            <p className="text-left">
              The settlers crowded the displays, hearts sinking. The readings made no sense. The ship was not Imperial.
              Its profile matched nothing in Rebel records. Its signal was not one of distress, nor of welcome.
              It was a single, simple acknowledgment — the beacon had been heard.
            </p>
            <br/>

            <p className="text-left">
              Above the horizon, Sallak’s twin moons bled light across the dunes. Against them, the vessel’s shadow
              loomed larger, blotting out the stars. It slowed, rotated, and disappeared behind the storm.
            </p>
            <br/>

            <p className="text-left">
              Then came the tremors.
            </p>
            <br/>

            <p className="text-left">
              At first, faint ripples in the sand. Then stronger, shaking the loose scaffolding of their settlement,
              rattling supply crates, toppling antennae. The settlers staggered, grabbing at one another as the
              ground beneath them quaked. Something massive had entered Sallak’s atmosphere.
            </p>
            <br/>

            <p className="text-left">
              They turned to the horizon. In the far distance, a plume of dust rose like a scar into the sky,
              illuminated by flashes of crimson lightning. Whatever had descended was not waiting. It was moving.
            </p>
            <br/>

            <p className="text-left">
              The settlers exchanged grim looks. Their beacon had not only declared their presence — it had summoned
              something else. Friend, foe, or something far stranger, they could not yet say. All they knew was this:
              they were no longer alone.
            </p>
            <br/>

            <p className="text-left">
              Blasters were checked, power cells loaded. Vibrotools became weapons in desperate hands. The wind
              howled across the sands as Outpost 77 prepared for its first true test.
            </p>
            <br/>

            <p className="text-left">
              In the silence between thunderclaps, the settlers heard it — a sound carried on the storm. Low.
              Mechanical. Almost like breathing.
            </p>
            <br/>

            <p className="text-left">
              The pioneers of Sallak tightened their grips, the light of the beacon burning behind them.
              Whatever approached would arrive by dawn.
            </p>
            <br/>

            <p className="text-left">
              And the true story of Outpost 77… was only beginning.
            </p>
            <br/>
            <br/>
            <br/>

            <div className="bg-white/10 px-2">
              <p className="text-center text-2xl p-2">
                <b></b>Go to Twin Suns 77 to unlock the second part of this story<br/>
              </p>
            </div>
            <br/>
            <br/>
          </div>
        }


        {/*<div className="bg-white/10 px-2">*/}
        {/*  <p className="text-left">*/}
        {/*    <b></b> SCREEN WITH TRANSPARENT BACKGROUND <br/>*/}

        {/*  </p>*/}
        {/*</div>*/}
        {/*<br/>*/}

      </div>
    </div>
  );
}
