import { useState } from "react";
import { useParams } from "react-router-dom";
import M1 from "../../components/Missions/20260221/M1.tsx";
import M2 from "../../components/Missions/20260221/M2.tsx";
import M3 from "../../components/Missions/20260221/M3.tsx";
import M4 from "../../components/Missions/20260221/M4.tsx";
import M5 from "../../components/Missions/20260221/M5.tsx";
import M6 from "../../components/Missions/20260221/M6.tsx";
import M7 from "../../components/Missions/20260221/M7.tsx";
import M8 from "../../components/Missions/20260221/M8.tsx";

export default function MissionSecondChapter() {
  const { id } = useParams();
  const [authenticated, setAuthenticated] = useState(false);
  const [unauthorizedUser, setUnauthorizedUser] = useState(false);
  const [input, setInput] = useState('');

  const passwordArray = [
    '2026outpost00',
    '2026outpost01',
    '2026outpost02',
    '2026outpost03',
    '2026outpost04',
    '2026outpost05',
    '2026outpost06',
    '2026outpost07',
    '2026outpost08',
    '2026outpost09',
    '2026outpost10',
    '2026outpost11',
    '2026outpost12',
    '2026outpost13',
    '2026outpost14',
    '2026outpost15',
    '2026outpost16',
    '2026outpost17',
    '2026outpost18',
    '2026outpost19',
    '2026outpost20',
    '2026outpost21',
    '2026outpost22',
    '2026outpost23',
    '2026outpost24',
    '2026outpost25',
    '2026outpost26',
    '2026outpost27',
    '2026outpost28',
    '2026outpost29',
    '2026outpost30',
    '2026outpost31',
    '2026outpost32',
    '2026outpost33',
    '2026outpost34',
    '2026outpost35',
    '2026outpost36',
    '2026outpost37',
    '2026outpost38',
    '2026outpost39',
    '2026outpost40',
    '2026outpost41',
    '2026outpost42',
    '2026outpost43',
    '2026outpost44',
    '2026outpost45',
    '2026outpost46',
    '2026outpost47',
    '2026outpost48',
    '2026outpost49',
    '2026outpost50',
    '2026outpost51',
    '2026outpost52',
    '2026outpost53',
    '2026outpost54',
    '2026outpost55',
    '2026outpost56',
    '2026outpost57',
    '2026outpost58',
    '2026outpost59',
    '2026outpost60',
    '2026outpost61',
    '2026outpost62',
    '2026outpost63',
    '2026outpost64',
    '2026outpost65',
    '2026outpost66',
    '2026outpost67',
    '2026outpost68',
    '2026outpost69',
    '2026outpost70',
    '2026outpost71',
    '2026outpost72',
    '2026outpost73',
    '2026outpost74',
    '2026outpost75',
    '2026outpost76',
    '2026outpost77',
    '2026outpost78',
    '2026outpost79',
    '2026outpost80',
    '2026outpost81',
    '2026outpost82',
    '2026outpost83',
    '2026outpost84',
    '2026outpost85',
    '2026outpost86',
    '2026outpost87',
    '2026outpost88',
    '2026outpost89',
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
    'part-8'
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
      id: 'part-8',
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
