import { useParams } from "react-router-dom";
import A1 from "../../components/Archives/Settlers/A1.tsx";
import A2 from "../../components/Archives/Settlers/A2.tsx";
import A3 from "../../components/Archives/Settlers/A3.tsx";
import A4 from "../../components/Archives/Settlers/A4.tsx";

import M2 from "../../components/Missions/20260221/M2.tsx";
import M4 from "../../components/Missions/20260221/M4.tsx";
import M6 from "../../components/Missions/20260221/M6.tsx";

export default function SettlersArchives() {
  const { id } = useParams();

  const archiveArray = [
    // Red tags with black writing
    {
      // Cantina by Kloonta Classic
      id: 'part-1',
      archive: <A4/>
    },
    {
      id: '2',
      // id: 'part-2',
      archive: <M2/>
    },
    {
      // Café
      id: 'part-3',
      archive: <A1/>
    },
    {
      id: '4',
      // id: 'part-4',
      archive: <M4/>
    },
    {
      // Speeder garage bottom right door
      id: 'part-5',
      archive: <A2/>
    },
    {
      // *** Tag at home - red & black , nothing on the back *** NOT LINKED
      id: 'part-6',
      archive: <M6/>
    },
    {
      // *** Tag at home - it goes somewhere in the homestead
      id: 'part-7',
      archive: <A3/>
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
