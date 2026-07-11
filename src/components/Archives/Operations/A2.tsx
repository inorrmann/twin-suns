import bgImage from '../../../assets/screen.jpg';

export default function A1()
{
  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen text-green-200 text-xl"
         style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-5" style={{ paddingTop: "2.5rem" }}>
        <p className="text-3xl font-bold">OPERATIONS ARCHIVE 002: The First Harvest</p>
        <br/>
        <br/>

        <div>
          <p className="text-left">
            On a desert world, the sky offered no rain, the ground offered no rivers, and every drop of water had to be earned.          </p>
          <br/>

          <p className="text-left">
            When the first settlers arrived at Outpost 77, their most important piece of equipment was not a weapon, a vehicle, or a communications system. It was a single moisture vaporator standing alone among the dunes.
          </p>
          <br/>

          <p className="text-left">
            The machine had been designed to collect tiny amounts of atmospheric moisture, but this unit had already seen better days. Its filters were damaged, its intake valves were unreliable, and its power system had been repaired so many times that no one knew which parts were original.
          </p>
          <br/>

          <p className="text-left">
            For weeks, the settlers depended on supply shipments while Kabe worked to restore the vaporator. Each failed attempt brought them closer to abandoning the settlement.
          </p>
          <br/>

          <p className="text-left">
            Then, one morning, the vaporator activated.
            At first, nothing happened.
            Then a single drop of water fell into the collection chamber.
            That single drop became a stream.
            The settlers had enough water to survive.
          </p>
          <br/>

          <p className="text-left">
            The maintenance console recorded the first successful harvest with a message that was later preserved in the archives.
          </p>
          <br/>
          <br/>

          <iframe
            src="/games/operations-2.html"
            title="The first harvest"
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
