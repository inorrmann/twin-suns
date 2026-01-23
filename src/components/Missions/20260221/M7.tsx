import { useState } from "react";
import bgImage from '../../../assets/screen.jpg';

export default function M7()
{
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase().trim() == 'expected') {
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
          PART 7: PREPARED FOR ARRIVAL
        </p>
        <br/>

        {!authenticated &&
          <div className="bg-white/10 px-2">
            <p className="text-center">
              <b> ENTER THE PASSWORD FROM THE DATA PANEL MESSAGE TO CONTINUE
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
                style={{ backgroundColor: "white" }}
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
              The decoded message echoed in their thoughts as the settlers approached the ruins.
            </p>
            <br/>
            <p className="text-left">
              The outpost is not empty. You were expected.
            </p>
            <br/>
            <p className="text-left">
              Outpost 77 emerged fully from the dunes, its skeletal towers and half-buried structures casting
              long shadows across the desert floor. What had once been a foothold of civilization,
              now felt like a threshold — a place prepared, not abandoned.
              The commander ordered a cautious advance. Power readings flickered across his display, faint but stable.
              “Something is regulating the systems,” he said. “Not automated decay. Active control.”
              Lysa knelt beside a terminal near the perimeter wall, brushing away layers of sand.
              The interface responded instantly to her touch. “These systems weren’t left behind,” she said quietly.
              “They were maintained. Someone wanted this place preserved… until a specific moment.”
            </p>
            <br/>
            <p className="text-left">
              They moved deeper into the outpost. Evidence of recent presence became impossible to ignore:
              sealed doors reinforced against storms, scavenged components neatly removed rather than ripped away,
              heat signatures lingering in sheltered corridors. Whoever had been here knew the outpost well —
              and knew how to stay unseen.
              Inside the central command structure, emergency lights flickered to life as the settlers entered.
              The air was still, cool, and free of the grit that filled the desert outside.
              A central console powered on without prompting, its screen flooding the chamber with pale blue light.
              A recorded transmission began to play.
            </p>
            <br/>
            <p className="text-left">
              Rebel scouts appeared in the hologram, their image fractured by interference.
              They spoke of strange readings beneath Sallak’s sands, of storms that masked movement,
              of orders to observe and report — never engage. Their voices cut out abruptly.
              The image shifted.
              A different figure stood in their place, wrapped in layered desert gear. Its silhouette matched
              the watcher they had seen among the dunes. Its voice was calm, deliberate.
              “You followed the signs,” it said. “You activated the grid. You decoded the warnings.”
              The figure tilted its head slightly.
              “We prepared Outpost 77 for those who would listen.”
              The transmission ended.
            </p>
            <br/>
            <p className="text-left">
              Silence settled heavily over the chamber.
              Lysa broke it first. “They didn’t just anticipate someone,” she said. “They anticipated us.”
              The commander turned his attention to the far end of the chamber, where reinforced blast doors
              stood sealed. Fresh power conduits fed into them, humming faintly. Warning glyphs glowed along their
              edges,
              pulsing in the same rhythm as the beacon grid they had activated outside.
              “They let us in,” he said. “But not all the way.”
            </p>
            <br/>
            <p className="text-left">
              A final alert blinked on the console — fragmented, encrypted, incomplete. Coordinates scrolled briefly
              before dissolving into static, replaced by a repeating sequence of symbols. Another test. Another barrier.
              Outpost 77 had not been built to welcome settlers.
              It had been built to wait.
              And whatever waited beyond those sealed doors was the reason the watcher had been guiding them all along.
            </p>
            <br/>
            <p className="text-left">
              The settlers spread through the central command structure, scanning consoles and checking every corridor.
              Power flickered in some rooms, faint hums pulsed from machinery, and dusty storage bays held crates with
              supplies long abandoned. One by one, they crossed off the locations they had visited: the vault,
              the marketplace, the speeder garage, even the homestead hidden under the sand.
              Yet as they stepped back and looked across the outpost, Lysa frowned. “We’ve seen most of it,
              but not everything.” She gestured to a cluster of buildings at the far edge,
              half-buried and almost invisible in the low moonlight. “There’s one section that hasn’t been touched —
              untouched by the storms, untouched by us.”
            </p>
            <br/>
            <p className="text-left">
              The commander squinted. “That could be it. Whoever left this outpost prepared it carefully.
              Maybe the most important place is last.”
              A hush fell over the settlers. All the signs, the subtle guidance of the watcher, the still-active
              systems...
              it pointed to one truth: the building they had yet to explore was critical.
              It would hold whatever secrets the outpost had been keeping.
            </p>
            <br/>
            <p className="text-left">
              Lysa stepped forward and tapped a nearby console. Symbols flashed briefly, a prompt materializing:
              “Identify the building not yet accessed to proceed.”
              Lysa pointed toward the darker edge of the settlement, where a small building stood by itself.
              “Those are the refreshers. Practical. Necessary. But no one hides a welcoming message or a warning in
              there.”
              “Right,” Nate said. “So if the outpost wasn’t empty... if someone expected us...
              where would they leave the next clue? Somewhere meant for people to gather, meant for voices.”
              The settlers exchanged glances. They knew the answer.
              The building that had remained silent through every exploration — the heart of the outpost waiting for
              them to arrive.
            </p>
            <br/>
            <p className="text-left">
              Study the map of Outpost 77. One building has not yet been explored.
              Go in there next — the name of that location is your final password.
            </p>
            <br/>
            <br/>
            <button
              type="button"
              className="bg-black hover:bg-black"
              onClick={() => window.open('/outpost_map.jpg', '_blank')}
            >
              Outpost 77 Map
            </button>
          </div>
        }
      </div>
    </div>
  );
}
