import bgImage from '../../../assets/screen.jpg';

export default function A3()
{
  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen text-green-200 text-xl"
         style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-5" style={{ paddingTop: "2.5rem" }}>
        <p className="text-3xl font-bold">SETTLERS ARCHIVE 003: The First Foundation</p>
        <br/>
        <br/>

        <div>
          <p className="text-left">
            Before there was an Outpost 77, there was only a handful of settlers, a collection of supplies, and a question no one could answer.
          </p>
          <br/>

          <p className="text-left">
            Where should the first home be built?
          </p>
          <br/>

          <p className="text-left">
            For days, they searched the dunes. One location offered a better view of the horizon. Another provided shelter from the wind. A third was closer to where they hoped a marketplace might someday stand. Every choice had an advantage, and every choice came with doubt.
          </p>
          <br/>

          <p className="text-left">
            The debates lasted longer than the construction itself.
          </p>
          <br/>

          <p className="text-left">
            One evening, after another day of walking the dunes, one of the builders stopped, drove a survey stake into the sand, and looked at the others.
          </p>
          <br/>

          <p className="text-left">
            "If we keep searching for the perfect place," he said, "we'll never build anything."
          </p>
          <br/>

          <p className="text-left">
            The next morning, the first foundation of Outpost 77 was laid exactly where that stake had been driven.
          </p>
          <br/>

          <p className="text-left">
            The small homestead that stands here today still rests on that same spot.
          </p>
          <br/>

          <p className="text-left">
            The final page of the builder's journal ended with a reminder for everyone who would one day pass through its door.
          </p>
          <br/>
          <br/>

          <iframe
            src="/games/settlers-3.html"
            title="The builder's journal"
            className="border-4"
            style={{
              width: "100%",
              height: "800px"
            }}
          />

        </div>
      </div>
    </div>
  );
}
