export default function M1()
{
  return (
    <>
      <p className="text-3xl font-bold">Encrypted Rebel Broadcast</p>
      <br/>
      <p className="text-2xl">
        A long-range Rebel broadcast was intercepted.
        The encryption appears to use a variation of Aurebesh paired with a substitution cipher.
      </p>
      <br/>
      <p className="text-2xl font-bold">
        "YBNL ZL ANZR VF GUR ZVAQ BS GUR JBEYQ. V'Z ABG N WVRQ, OHG V YBIR UBZR."
      </p>

      {/*TODO: add logic for a clue button*/}
      <p>
        Clue: This is in ROT13. Decode it to reveal the identity of the speaker.
      </p>
    </>
  );
}
