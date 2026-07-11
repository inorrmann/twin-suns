import bgImage from '../../../assets/screen.jpg';

export default function A1()
{
  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen text-green-200 text-xl"
         style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div style={{ paddingTop: "2.5rem" }}>
        <p className="text-3xl font-bold"> ARCHIVE 001: </p>
        <br/>
        <br/>

        <div>
          <p className="text-left">

          </p>
          <br/>

          <p className="text-left">

          </p>
          <br/>
          <br/>

          <iframe
            src="/games/morale-2.html"
            title="Data Plate Message"
            className="w-full h-screen border-0"
          />

        </div>
      </div>
    </div>
  );
}
