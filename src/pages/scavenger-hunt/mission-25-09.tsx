import { useState } from "react";
import { useParams } from "react-router-dom";
import M1 from "../../components/Missions/20250906/M1.tsx";
import M2 from "../../components/Missions/20250906/M2.tsx";
import M3 from "../../components/Missions/20250906/M3.tsx";
import M4 from "../../components/Missions/20250906/M4.tsx";
import M5 from "../../components/Missions/20250906/M5.tsx";
import M6 from "../../components/Missions/20250906/M6.tsx";
import M7 from "../../components/Missions/20250906/M7.tsx";
import M8 from "../../components/Missions/20250906/M8.tsx";

export default function MissionSept() {
  const { id } = useParams();
  const [authenticated, setAuthenticated] = useState(false);
  const [unauthorizedUser, setUnauthorizedUser] = useState(false);
  const [input, setInput] = useState('');

  const passwordArray = [
    '2026outpost100',
    '2026outpost101',
    '2026outpost102',
    '2026outpost103',
    '2026outpost104',
    '2026outpost105',
    '2026outpost106',
    '2026outpost107',
    '2026outpost108',
    '2026outpost109',
    '2026outpost110',
    '2026outpost111',
    '2026outpost112',
    '2026outpost113',
    '2026outpost114',
    '2026outpost115',
    '2026outpost116',
    '2026outpost117',
    '2026outpost118',
    '2026outpost119',
    '2026outpost120',
    '2026outpost121',
    '2026outpost122',
    '2026outpost123',
    '2026outpost124',
    '2026outpost125',
    '2026outpost126',
    '2026outpost127',
    '2026outpost128',
    '2026outpost129',
    '2026outpost130',
    '2026outpost131',
    '2026outpost132',
    '2026outpost133',
    '2026outpost134',
    '2026outpost135',
    '2026outpost136',
    '2026outpost137',
    '2026outpost138',
    '2026outpost139',
    '2026outpost140',
    '2026outpost141',
    '2026outpost142',
    '2026outpost143',
    '2026outpost144',
    '2026outpost145',
    '2026outpost146',
    '2026outpost147',
    '2026outpost148',
    '2026outpost149',
    'heidi',
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

    if (id && missionIdArray.includes(id) && passwordArray.includes(input.trim().toLowerCase())) {
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

  if (!authenticated && id == 'part-1') {
    return (
      <div className="sm:p-10">
        <p className="text-2xl font-bold">
          Authorized Personnel Only
        </p>
        <p className="text-xl">
          Enter access code to unlock archive
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-2 flex align-middle"
        >
          <input
            type="text"
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
