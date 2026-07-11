import { useParams } from "react-router-dom";
import A1 from "../../components/Archives/Operations/A1.tsx";
import A2 from "../../components/Archives/Operations/A2.tsx";
import M1 from "../../components/Missions/20250906/M1.tsx";
import M2 from "../../components/Missions/20250906/M2.tsx";
import M4 from "../../components/Missions/20250906/M4.tsx";
import M6 from "../../components/Missions/20250906/M6.tsx";
import M7 from "../../components/Missions/20250906/M7.tsx";
import M8 from "../../components/Missions/20250906/M8.tsx";

export default function OperationsArchives() {
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
      // moisture vaporator
      id: 'part-3',
      archive: <A2/>
    },
    {
      id: 'part-4',
      archive: <M4/>
    },
    {
      // speeder bike top left door
      id: 'part-5',
      archive: <A1/>
    },
    {
      id: 'part-6',
      archive: <M6/>
    },
    {
      id: 'part-7',
      archive: <M7/>
    },
    {
      id: 'epilogue',
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
