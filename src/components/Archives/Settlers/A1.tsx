import bgImage from '../../../assets/screen.jpg';

export default function A1()
{
  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen text-green-200 text-xl"
         style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-5" style={{ paddingTop: "2.5rem" }}>
        <p className="text-3xl font-bold">SETTLERS ARCHIVE 001: The Last Bowl</p>
        <br/>
        <br/>

        <div>
          <p className="text-left">
            When Outpost 77 was still young, supplies were limited and every meal mattered.          </p>
          <br/>

          <p className="text-left">
            One evening, a dust-covered traveler arrived at the café just before closing. His journey across the dunes had taken longer than expected, and he carried little more than a damaged navigation unit and stories from the worlds he had visited.
          </p>
          <br/>

          <p className="text-left">
            The problem was that the café had already served its final meal.
          </p>
          <br/>

          <p className="text-left">
            The cook checked the remaining supplies and found one last portion saved for the next morning. Everyone knew how difficult the coming day could be if they gave it away.
          </p>
          <br/>

          <p className="text-left">
            The traveler thanked them and prepared to leave.
          </p>
          <br/>

          <p className="text-left">
            Before he reached the door, one of the settlers pushed the bowl across the counter.
          </p>
          <br/>

          <p className="text-left">
            The next morning, the café opened later than usual—but it opened with one more person helping behind the counter. The traveler had repaired his navigation unit using borrowed tools and chose to stay, first helping with small tasks and eventually becoming part of the settlement.
          </p>
          <br/>

          <p className="text-left">
            Years later, the café records preserved the lesson learned that night:
          </p>
          <br/>
          <br/>

          <iframe
            src="/games/settlers-1.html"
            title="The last bowl"
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
