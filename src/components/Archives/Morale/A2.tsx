import bgImage from '../../../assets/screen.jpg';

export default function A2()
{
  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen text-green-200 text-xl"
         style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-5" style={{ paddingTop: "2.5rem" }}>
        <p className="text-3xl font-bold">MORALE ARCHIVE 002: The Jawa Playlist</p>
        <br/>
        <br/>

        <div>
          <p className="text-left">
            Not every evening at Outpost 77 was spent discussing trade routes or repairing broken equipment.
            As the day's work came to an end, settlers often gathered in the cantina to share stories,
            challenge one another to games, and exchange the latest jokes. Travelers passing through the outpost
            frequently added their own humor to the message board, leaving behind a collection of groan-worthy
            jokes that somehow survived the years.
          </p>
          <br/>

          <p className="text-left">
            One faded entry caught the attention of the archive team. The setup was still readable, but several
            letters in the punchline had been lost over time. Restore the missing letters to complete the joke.
          </p>
          <br/>
          <br/>

          <iframe
            src="/games/morale-2.html"
            title="The Jawa playlist"
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
