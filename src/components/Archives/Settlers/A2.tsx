import bgImage from '../../../assets/screen.jpg';

export default function A2()
{
  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen text-green-200 text-xl"
         style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-5" style={{ paddingTop: "2.5rem" }}>
        <p className="text-3xl font-bold">SETTLERS ARCHIVE 002: The Unlocked Door</p>
        <br/>
        <br/>

        <div>
          <p className="text-left">
            Long before Outpost 77 welcomed regular visitors, every member of the settlement depended on one another. Supplies were scarce, every pair of hands mattered, and trust was worth more than credits.
          </p>
          <br/>

          <p className="text-left">
            One season, a young settler was caught stealing food from the café stores. The council gathered in the small holding room to decide what should happen next. Some argued that theft could not be ignored. Others believed that exile would be an even harsher sentence than confinement.
          </p>
          <br/>

          <p className="text-left">
            When asked why he had stolen the food, the young settler admitted it wasn't for himself. He had been leaving extra rations outside the settlement for an injured traveler too weak to make the journey into camp.
          </p>
          <br/>

          <p className="text-left">
            The council searched the dunes and found the traveler exactly where he had said.
            The supplies had kept him alive.
          </p>
          <br/>

          <p className="text-left">
            When the council returned, the door to the holding room was opened—not to release a prisoner, but to welcome a new neighbor.
          </p>
          <br/>

          <p className="text-left">
            The meeting record ended with a reminder that became part of Outpost 77's unwritten code.
          </p>
          <br/>
          <br/>

          <iframe
            src="/games/settlers-2.html"
            title="The unlocked door"
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
