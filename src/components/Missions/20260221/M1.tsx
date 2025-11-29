import bgImage from '../../../assets/screen.jpg';

export default function M1()
{
  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen text-green-200 text-xl"
         style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-10 sm:p-20 sm:pb-10 ">
        <p className="text-3xl font-bold">ECHOES OF THE ARRIVAL</p>
        <br/>
        <br/>

          <div>
            <p className="font-bold text-2xl">
              RECAP
            </p>
            <br/>
            <p className="text-left">
              The first settlers of Sallak fought storms, decoded lost transmissions, and pieced together fragments
              of the past. With the help of droids and their own ingenuity, they uncovered hidden archives and sent a
              beacon into the stars — declaring Outpost 77’s existence to the galaxy. But their triumph carried a cost.
              The signal was received. A mysterious ship, neither Imperial nor Rebel, descended upon Sallak’s surface.
              Now, as shadows move across the dunes, the settlers brace for what comes next…
            </p>
            <br/>
            <p className="text-left">

            </p>
            <br/>
            <p className="text-left">

            </p>
            <br/>
            <p className="text-left">

            </p>
            <br/>
            <p className="text-left">

            </p>
            <br/>
            <p className="text-left">

            </p>
            <br/>
            <br/>
            <button
              type="button"
              className="bg-black hover:bg-black"
              onClick={() => window.open('https://cerosoul.github.io/imperialpatternanalysis/', '_blank', 'noopener, noreferrer')}
            >
              Click here to complete the series
            </button>
          </div>

      </div>
    </div>
  );
}
