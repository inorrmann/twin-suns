import bgImage from '../../../assets/screen.jpg';

export default function A1()
{
  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen text-green-200 text-xl"
         style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-5" style={{ paddingTop: "2.5rem" }}>
        <p className="text-3xl font-bold">OPERATIONS ARCHIVE 001: The First Transmission</p>
        <br/>
        <br/>

        <div>
          <p className="text-left">
            Before the market stalls were built, before the café served its first meal, and before travelers gathered at the Cantina to share stories beneath the desert sky, Outpost 77 was nothing more than a handful of shelters surrounded by endless dunes.
          </p>
          <br/>

          <p className="text-left">
            The settlers knew that survival depended on one thing above all else: being found.
          </p>
          <br/>

          <p className="text-left">
            The first major project was not a building, but a voice. Using salvaged components from damaged freighters and starships, abandoned relay stations, and forgotten machines, the settlers began assembling a long-range transmitter capable of reaching beyond the horizon.
          </p>
          <br/>

          <p className="text-left">
            The project took weeks. Power cells failed. Circuits overheated. Antennas collapsed under the desert winds. More than once, the crew questioned whether the transmitter would ever work.
            But Kabe refused to give up.
            "An outpost that cannot call for help is just a place waiting to be forgotten."
          </p>
          <br/>

          <p className="text-left">
            On the night of the first test, the entire settlement gathered as the transmitter powered on. A blue pulse stretched across the dunes, carrying the first message from Outpost 77 into the unknown.
          </p>
          <br/>

          <p className="text-left">
            For a moment, there was only silence.
            Then the receiver activated.
            A message had come back.
            The signal was weak. The source was unknown. The transmission contained only four words.
          </p>
          <br/>
          <br/>

          <iframe
            src="/games/operations-1.html"
            title="The first transmission"
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
