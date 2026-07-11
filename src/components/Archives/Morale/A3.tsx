import bgImage from '../../../assets/screen.jpg';

export default function A3()
{
  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen text-green-200 text-xl"
         style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-5" style={{ paddingTop: "2.5rem" }}>
        <p className="text-3xl font-bold">MORALE ARCHIVE 003: The Garden Debate</p>
        <br/>
        <br/>

        <div>
          <p className="text-left">
            Even on a harsh desert world, settlers found ways to brighten their surroundings. A few stubborn plants
            managed to grow in shaded corners of the outpost, inspiring friendly competitions over who could keep
            them alive the longest. Whenever the conversation turned to gardening, someone inevitably claimed to
            know the secret to growing anything.
          </p>
          <br/>

          <p className="text-left">
            One old joke from those gatherings was preserved on the Cantina message board. The setup remains perfectly
            readable, but the punchline was written as a cryptogram for anyone willing to solve it.
          </p>
          <br/>

          <p className="text-left">
            Can you decode the hidden message to reveal the joke?
          </p>
          <br/>
          <br/>

          <iframe
            src="/games/morale-3.html"
            title="The garden debate"
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
