import { useParams } from "react-router-dom";
import A1 from "../../components/Archives/Morale/A1.tsx";
import M2 from "../../components/Missions/20250628/M2.tsx";
import M3 from "../../components/Missions/20250628/M3.tsx";
import M4 from "../../components/Missions/20250628/M4.tsx";
import M5 from "../../components/Missions/20250628/M5.tsx";
import M6 from "../../components/Missions/20250628/M6.tsx";
import M7 from "../../components/Missions/20250628/M7.tsx";
import MBonus from "../../components/Missions/20250628/MBonus.tsx";

export default function MoraleArchives() {
  const { id } = useParams();

  const archiveArray = [
    {
      id: '1',
      // id: '01101111-01101110-01100101',
      archive: <A1/>
    },
    {
      // id: '2',
      id: '01110100-01110111-01101111',
      archive: <M2/>
    },
    {
      // id: '3',
      id: '01110100-01101000-01110010-01100101-01100101',
      archive: <M3/>
    },
    {
      // id: '4',
      id: '01100110-01101111-01110101-01110010',
      archive: <M4/>
    },
    {
      // id: '5',
      id: '01100110-01101001-01110110-01100101',
      archive: <M5/>
    },
    {
      // id: '6',
      id: '01110011-01101001-01111000',
      archive: <M6/>
    },
    {
      // id: '7',
      id: '01110011-01100101-01110110-01100101-01101110',
      archive: <M7/>
    },
    {
      // id: '8',
      id: '01100010-01101111-01101110-01110101-01110011',
      archive: <MBonus/>
    }
  ]

  const selectedArchive = archiveArray.find(m => m.id === (id));

  return (
    <>
      {selectedArchive ? (
        selectedArchive.archive
      ) : (
        <div>Archive not found.</div>
      )}
    </>
    )
}
