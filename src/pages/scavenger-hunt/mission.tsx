import { useState } from "react";
import { useParams } from "react-router-dom";
import M1 from "../../components/Missions/06282025/M1.tsx";
import M2 from "../../components/Missions/06282025/M2.tsx";
import M3 from "../../components/Missions/06282025/M3.tsx";
import M4 from "../../components/Missions/06282025/M4.tsx";
import M5 from "../../components/Missions/06282025/M5.tsx";
import M6 from "../../components/Missions/06282025/M6.tsx";
import M7 from "../../components/Missions/06282025/M7.tsx";
import MBonus from "../../components/Missions/06282025/MBonus.tsx";

export default function Mission() {
  const { id } = useParams();
  const [authenticated, setAuthenticated] = useState(false);
  const [unauthorizedUser, setUnauthorizedUser] = useState(false);
  const [input, setInput] = useState('');

  const passwordArray = [
    'comm62500',
    'comm62501',
    'comm62502',
    'comm62503',
    'comm62504',
    'comm62505',
    'comm62506',
    'comm62507',
    'comm62508',
    'comm62509',
    'outpost62500',
    'outpost62501',
    'outpost62502',
    'outpost62503',
    'outpost62504',
    'outpost62505',
    'outpost62506',
    'outpost62507',
    'outpost62508',
    'outpost62509',
    'outpost62510',
    'outpost62511',
    'outpost62512',
    'outpost62513',
    'outpost62514',
    'outpost62515',
    'outpost62516',
    'outpost62517',
    'outpost62518',
    'outpost62519',
    'outpost62520',
    'outpost62521',
    'outpost62522',
    'outpost62523',
    'outpost62524',
    'outpost62525',
    'outpost62526',
    'outpost62527',
    'outpost62528',
    'outpost62529',
    'outpost62530',
    'outpost62531',
    'outpost62532',
    'outpost62533',
    'outpost62534',
    'outpost62535',
    'outpost62536',
    'outpost62537',
    'outpost62538',
    'outpost62539',
    'outpost62540',
    'outpost62541',
    'outpost62542',
    'outpost62543',
    'outpost62544',
    'outpost62545',
    'outpost62546',
    'outpost62547',
    'outpost62548',
    'outpost62549',
    'heidi',
    'broc123'
  ];
  const bonusPasswordArray = [
    'comm62500',
    'comm62501',
    'comm62502',
    'comm62503',
    'comm62504',
    'comm62505',
    'comm62506',
    'comm62507',
    'comm62508',
    'comm62509',
    'heidi',
    'broc123'
  ];
  const missionIdArray = [
    '01101111-01101110-01100101',
    '01110100-01110111-01101111',
    '01110100-01101000-01110010-01100101-01100101',
    '01100110-01101111-01110101-01110010',
    '01100110-01101001-01110110-01100101',
    '01110011-01101001-01111000',
    '01110011-01100101-01110110-01100101-01101110'
    // '1', '2', '3', '4', '5', '6', '7'
  ];

  const missionArray = [
    {
      // id: '1',
      id: '01101111-01101110-01100101',
      mission: <M1/>
    },
    {
      // id: '2',
      id: '01110100-01110111-01101111',
      mission: <M2/>
    },
    {
      // id: '3',
      id: '01110100-01101000-01110010-01100101-01100101',
      mission: <M3/>
    },
    {
      // id: '4',
      id: '01100110-01101111-01110101-01110010',
      mission: <M4/>
    },
    {
      // id: '5',
      id: '01100110-01101001-01110110-01100101',
      mission: <M5/>
    },
    {
      // id: '6',
      id: '01110011-01101001-01111000',
      mission: <M6/>
    },
    {
      // id: '7',
      id: '01110011-01100101-01110110-01100101-01101110',
      mission: <M7/>
    },
    {
      // id: 'b',
      id: '01100010-01101111-01101110-01110101-01110011',
      mission: <MBonus/>
    }
  ]

  const selectedMission = missionArray.find(m => m.id === (id));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let authorized = false;
    // if (id == 'b' && bonusPasswordArray.includes(input)) {
    if (id == '01100010-01101111-01101110-01110101-01110011' && bonusPasswordArray.includes(input)) {
      authorized = true;
    } else if (id && missionIdArray.includes(id) && passwordArray.includes(input)) {
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
