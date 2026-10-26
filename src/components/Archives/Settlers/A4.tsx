import bgImage from '../../../assets/screen.jpg';

export default function A4()
{
  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen text-green-200 text-xl"
         style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-5" style={{ paddingTop: "2.5rem" }}>
        <p className="text-3xl font-bold">SETTLERS ARCHIVE 004: The Lucky Seat</p>
        <br/>
        <br/>

        <div>
          <p className="text-left">
            There was a seat in the Cantina that nobody claimed during the Kloonta Classic.
          </p>
          <br/>

          <p className="text-left">
            It belonged to an old settler named Varo, who had spent years watching the races from the same spot.
            He never placed the biggest bets. He never shouted the loudest. But somehow, whenever Varo sat there,
            his chosen racer always seemed to finish.
          </p>
          <br/>

          <p className="text-left">
            Then, one race day, Varo didn't show.
          </p>
          <br/>

          <p className="text-left">
            The regulars argued over who should take his seat. A mechanic sat down. Then a trader.
            Then a visiting pilot. None of them had any luck.
          </p>
          <br/>

          <p className="text-left">
            Finally, the Cantina keeper put a drink on the table and left the seat empty.
          </p>
          <br/>

          <p className="text-left">
            The next race, Varo's racer won, and the keeper never moved the drink.
          </p>
          <br/>

          <p className="text-left">
            Years later, when the Cantina was being repaired, they found an old note tucked beneath the table.
            Only one line was still legible:
          </p>
          <br/>
          <br/>

          <iframe
            src="/games/settlers-4.html"
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
