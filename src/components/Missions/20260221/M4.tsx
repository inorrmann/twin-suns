import { useState } from "react";
import bgImage from '../../../assets/screen.jpg';

export default function M4()
{
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase().trim() == 'hidden ridge') {
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
        <p className="text-3xl font-bold">CHAPTER 2: WHISPERS OF THE VAULT</p>
        <br/>
        <br/>
        <p className="font-bold text-2xl">
          PART 4: THE RIDGE THAT WATCHES
        </p>
        <br/>

        {!authenticated &&
          <div className="bg-white/10 px-2">
            <p className="text-center">
              <b> ENTER PASSWORD FROM THE DROID'S ENERGY PATTERN TO CONTINUE
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
              Hidden Ridge. The name alone wasn’t enough — but paired with the silver dust trail, it formed
              the first clear direction the settlers had received since the strange ship entered Sallak’s skies.
            </p>
            <br/>
            <p className="text-left">
              Lysa replayed the droid’s final energy pulses, aligning them with the map fragments recovered earlier.
              Where the pulses converged, the trail of silver dust veered sharply north, toward a jagged rise
              the settlers had previously dismissed as just another dune-shadowed outcrop.
            </p>
            <br/>
            <p className="text-left">
              Now they knew better.
            </p>
            <br/>
            <p className="text-left">
              “Hidden Ridge,” the commander said quietly. “It’s not marked on any chart, but the dust leads straight
              to it.”
            </p>
            <br/>
            <p className="text-left">
              The settlers moved through the heat shimmer, the dunes rising and falling like the breath of
              a sleeping titan. As they approached, the ridge sharpened into view — a steep wall of stone carved by
              centuries of storms, but with angles far too regular, too intentional, to be entirely natural.
            </p>
            <br/>
            <p className="text-left">
              They found the last trace of silver dust pooled in a shallow hollow at the ridge’s base, as though
              the trail ended — or had been deliberately wiped. Lysa crouched, sifting the grains between her gloves.
            </p>
            <br/>
            <p className="text-left">
              “This wasn’t scattered by the wind,” she whispered. “Someone brushed the trail out.”
            </p>
            <br/>
            <p className="text-left">
              That was the moment the commander lifted his hand, signaling silence.
            </p>
            <br/>
            <p className="text-left">
              Above them, the ridge was not empty.
            </p>
            <br/>
            <p className="text-left">
              A figure stood near the top — a silhouette against the pale sky, motionless, watching.
            </p>
            <br/>
            <p className="text-left">
              Not Imperial. Not one of the settlers. Thin, wrapped in fabric the same color as the stone,
              face concealed behind a visor. A scavenger? A scout? Or the survivor who had left the silver dust trail?
            </p>
            <br/>
            <p className="text-left">
              Before the settlers could call out, the figure moved. Quick. Precise. It stepped back and vanished
              behind the ridge with an agility no storm-worn wanderer should possess.
            </p>
            <br/>
            <p className="text-left">
              The commander swore softly. “They were expecting us.”
            </p>
            <br/>
            <p className="text-left">
              The team climbed the slope where the figure had stood. At the top, the desert opened wide,
              stretching toward distant buttes and mesas shimmering beneath the sun. No footprints marked the sand.
              No trail. Nothing.
            </p>
            <br/>
            <p className="text-left">
              Except one thing.
            </p>
            <br/>
            <p className="text-left">
              Half-buried in the sand was an object: a small, triangular shard of metal etched with unfamiliar
              geometric markings. Lysa lifted it carefully.
            </p>
            <br/>
            <p className="text-left">
              “A navigation fragment,” she murmured. “But not from any system we know. And look—”
            </p>
            <br/>
            <p className="text-left">
              The shard glowed faintly when tilted toward the sun, projecting a small starburst symbol into the air —
              the same symbol carved on the vault door they had opened days earlier.
            </p>
            <br/>
            <p className="text-left">
              “Whoever that was,” the commander said, “they’ve been inside the vaults before us.”
            </p>
            <br/>
            <p className="text-left">
              The implications settled over the group like falling sand. Someone else knew the secrets buried on Sallak.
              Someone had been guiding them — or herding them.
            </p>
            <br/>
            <p className="text-left">
              A gust of hot wind swept the ridge, carrying faint metallic echoes from the valley beyond.
              The shard pulsed once, as though reacting.
            </p>
            <br/>
            <p className="text-left">
              Lysa looked toward the horizon. “This wasn’t meant to scare us off. It’s a direction.
              They want us to follow.”
            </p>
            <br/>
            <p className="text-left">
              The commander nodded. “Then we follow. But cautiously.”
            </p>
            <br/>
            <p className="text-left">
              Behind them, the ridge fell silent again, as though swallowing the figure they’d glimpsed.
              Ahead, the desert shimmered with heat — and invitation.
            </p>
            <br/>
            <p className="text-left">
              The settlers descended the far side of Hidden Ridge, unaware that the watcher had reappeared behind
              a higher spire, observing their every step before disappearing once more into the sunlit haze.
            </p>
            <br/>
            <p className="text-left">
              Their path had changed. They were no longer chasing clues. Someone was leading them.
            </p>
            <br/>
            <br/>

            <p className="text-left">
              The shard atop Hidden Ridge emitted a subtle sequence of pulses — irregular, but with a pattern.
              The settlers recorded the numbers, but the last one was missing. Complete the series to follow
              the watcher’s path. When you finish, you will receive a password.
              Remember that password to unlock the next portion of the story, located near the Speeder Garage.
            </p>
            <br/>
            <br/>

            {/* 2, 4, 8, 14, 22, 32, ? (44)  */}

            <button
              type="button"
              className="bg-black hover:bg-black"
              onClick={() => window.open('https://cerosoul.github.io/motivatoradjustmentprotocol/', '_blank', 'noopener, noreferrer')}
            >
              Click here to complete the series
            </button>
          </div>
        }
      </div>
    </div>
  );
}
