import { useState } from "react";
import { useParams } from "react-router-dom";
import M1 from "../../components/Missions/09062025/M1.tsx";
import M2 from "../../components/Missions/09062025/M2.tsx";
import M3 from "../../components/Missions/09062025/M3.tsx";
import M4 from "../../components/Missions/09062025/M4.tsx";
import M5 from "../../components/Missions/09062025/M5.tsx";
import M6 from "../../components/Missions/09062025/M6.tsx";
import M7 from "../../components/Missions/09062025/M7.tsx";
import M8 from "../../components/Missions/09062025/M8.tsx";

export default function MissionSept() {
  const { id } = useParams();
  const [authenticated, setAuthenticated] = useState(false);
  const [unauthorizedUser, setUnauthorizedUser] = useState(false);
  const [input, setInput] = useState('');

  const passwordArray = [
    '09062500',
    '09062501',
    '09062502',
    '09062503',
    '09062504',
    '09062505',
    '09062506',
    '09062507',
    '09062508',
    '09062509',
    '09062510',
    '09062511',
    '09062512',
    '09062513',
    '09062514',
    '09062515',
    '09062516',
    '09062517',
    '09062518',
    '09062519',
    '09062520',
    '09062521',
    '09062522',
    '09062523',
    '09062524',
    '09062525',
    '09062526',
    '09062527',
    '09062528',
    '09062529',
    '09062530',
    '09062531',
    '09062532',
    '09062533',
    '09062534',
    '09062535',
    '09062536',
    '09062537',
    '09062538',
    '09062539',
    '09062540',
    '09062541',
    '09062542',
    '09062543',
    '09062544',
    '09062545',
    '09062546',
    '09062547',
    '09062548',
    '09062549',
    '09062550',
    '09062551',
    '09062552',
    '09062553',
    '09062554',
    '09062555',
    '09062556',
    '09062557',
    '09062558',
    '09062559',
    '09062560',
    '09062561',
    '09062562',
    '09062563',
    '09062564',
    '09062565',
    '09062566',
    '09062567',
    '09062568',
    '09062569',
    '09062570',
    '09062571',
    '09062572',
    '09062573',
    '09062574',
    '09062575',
    '09062576',
    '09062577',
    '09062578',
    '09062579',
    '09062580',
    '09062581',
    '09062582',
    '09062583',
    '09062584',
    '09062585',
    '09062586',
    '09062587',
    '09062588',
    '09062589',
    'heidi',
    'ryker',
  ];

  const missionIdArray = [
    'part-1',
    'part-2',
    'part-3',
    'part-4',
    'part-5',
    'part-6',
    'part-7',
    'epilogue'
  ];

  const missionArray = [
    {
      id: 'part-1',
      mission: <M1/>
    },
    {
      id: 'part-2',
      mission: <M2/>
    },
    {
      id: 'part-3',
      mission: <M3/>
    },
    {
      id: 'part-4',
      mission: <M4/>
    },
    {
      id: 'part-5',
      mission: <M5/>
    },
    {
      id: 'part-6',
      mission: <M6/>
    },
    {
      id: 'part-7',
      mission: <M7/>
    },
    {
      id: 'epilogue',
      mission: <M8/>
    }
  ]

  const selectedMission = missionArray.find(m => m.id === (id));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let authorized = false;
    if (id && missionIdArray.includes(id) && passwordArray.includes(input)) {
      authorized = true;
    }

    if (authorized) {
      setAuthenticated(true);
      setUnauthorizedUser(false);
    }
    else {
      setUnauthorizedUser(true);
    }
  };

  if (!authenticated) {
    return (
      <div className="sm:p-10">
        <p className="text-2xl font-bold">
          Authorized Personnel Only
        </p>
        <p className="text-xl">
          Enter password to access mission
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-2 flex align-middle"
        >
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="text-2xl bg-gray-100 p-2 max-w-64"
          />
          <button
            type="submit"
            className="ml-4 bg-black text-white pb-2"
          >Submit</button>
        </form>
        {unauthorizedUser && (
          <p style={{ color: "red", marginTop: "1rem" }}>
            Incorrect password. Please try again.
          </p>
        )}
      </div>
    );
  }

  return (
    <>
      {selectedMission ? (
        selectedMission.mission
      ) : (
        <div>Mission not found.</div>
      )}
    </>
    )
}
