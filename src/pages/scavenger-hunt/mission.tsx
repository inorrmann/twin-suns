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

  const passwordArray = ['3548909098', '85676399023', '123'];

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
    if (passwordArray.includes(input)) {
      setAuthenticated(true);
      setUnauthorizedUser(false);
    }
    else {
      setUnauthorizedUser(true);
    }
  };

  if (!authenticated) {
    return (
      <>
        <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "2rem" }}>
          <label>
            Enter Password:
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ marginLeft: "0.5rem" }}
            />
          </label>
          <button type="submit" style={{ marginLeft: "1rem" }}>Submit</button>
        </form>
        {unauthorizedUser && (
          <p style={{ color: "red", marginTop: "1rem" }}>
            Incorrect password. Please try again.
          </p>
        )}
      </>
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
