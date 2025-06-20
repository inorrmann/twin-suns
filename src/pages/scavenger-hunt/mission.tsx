import { useState } from "react";
import { useParams } from "react-router-dom";
import M1 from "../../components/Missions/06282025/M1.tsx";
import M2 from "../../components/Missions/06282025/M2.tsx";
import M3 from "../../components/Missions/06282025/M3.tsx";
import M4 from "../../components/Missions/06282025/M4.tsx";
import M5 from "../../components/Missions/06282025/M5.tsx";
import MBonus from "../../components/Missions/06282025/MBonus.tsx";

export default function Mission() {
  const { id } = useParams();
  const [authenticated, setAuthenticated] = useState(false);
  const [unauthorizedUser, setUnauthorizedUser] = useState(false);
  const [input, setInput] = useState('');

  const passwordArray = [
    'comm62510',
    'comm62511',
    'comm62512',
    'comm62513',
    'comm62514',
    'comm62515',
    'comm62516',
    'comm62517',
    'comm62518',
    'comm62519',
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
    '123'
  ];
  const bonusPasswordArray = [
    'comm62510',
    'comm62511',
    'comm62512',
    'comm62513',
    'comm62514',
    'comm62515',
    'comm62516',
    'comm62517',
    'comm62518',
    'comm62519',
    '123'
  ];
  const missionIdArray = ['11111', '22222', '33333', '55555', '66666'];

  const missionArray = [
    {
      id: '11111',
      mission: <M1/>
    },
    {
      id: '22222',
      mission: <M2/>
    },
    {
      id: '33333',
      mission: <M3/>
    },
    {
      id: '44444',
      mission: <M4/>
    },
    {
      id: '55555',
      mission: <M5/>
    },
    {
      id: 'bonus',
      mission: <MBonus/>
    }
  ]



  const selectedMission = missionArray.find(m => m.id === (id));


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let authorized = false;
    if (id == 'bonus' && bonusPasswordArray.includes(input)) {
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
