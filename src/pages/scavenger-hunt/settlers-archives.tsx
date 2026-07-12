import { useParams } from "react-router-dom";
import A1 from "../../components/Archives/Settlers/A1.tsx";
import A2 from "../../components/Archives/Settlers/A2.tsx";
import A3 from "../../components/Archives/Settlers/A3.tsx";

import M1 from "../../components/Missions/20260221/M2.tsx";
import M2 from "../../components/Missions/20260221/M2.tsx";
import M4 from "../../components/Missions/20260221/M4.tsx";
import M6 from "../../components/Missions/20260221/M6.tsx";
import M8 from "../../components/Missions/20260221/M8.tsx";

export default function SettlersArchives() {
  const { id } = useParams();

  const archiveArray = [
    {
      id: 'part-1',
      archive: <M1/>
    },
    {
      id: 'part-2',
      archive: <M2/>
    },
    {
      id: 'part-3',
      archive: <A1/>
    },
    {
      id: 'part-4',
      archive: <M4/>
    },
    {
      id: 'part-5',
      archive: <A2/>
    },
    {
      id: 'part-6',
      archive: <M6/>
    },
    {
      id: 'part-7',
      archive: <A3/>
    },
    {
      id: 'part-8',
      archive: <M8/>
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
