import bgImage from '../../../assets/screen.jpg';

export default function A1()
{
  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen text-green-200 text-xl"
         style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-5" style={{ paddingTop: "2.5rem" }}>
        <p className="text-3xl font-bold">MORALE ARCHIVE 001: The Unexpected Promotion</p>
        <br/>
        <br/>

        <div>
          <p className="text-left">
            During the early days of Outpost 77, settlers discovered that survival on the frontier required more
            than working equipment and careful planning. Long days repairing machinery, scouting the dunes,
            and maintaining the settlement were made easier by the stories and jokes shared between crew members.
          </p>
          <br/>

          <p className="text-left">
            One of the oldest messages recovered from the cantina was left by someone with a sense of humor—and
            a habit of hiding the best part. To make sure only curious settlers could enjoy the joke, the punchline
            was encoded before being added to the message board.
          </p>
          <br/>

          <p className="text-left">
            The setup remains clear. Can you decode the hidden punchline and reveal the joke that made the crew laugh?
          </p>
          <br/>
          <br/>

          <iframe
            src="/games/morale-1.html"
            title="The unexpected promotion"
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
