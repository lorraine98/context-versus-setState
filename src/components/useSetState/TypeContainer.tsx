import { useState } from "react";
import { TypeHeader } from "./TypeHeader";
import { TypeOne } from "./TypeOne";
import { TypeTwo } from "./TypeTwo";

export type Type = "type1" | "type2";

export const TypeContainer = () => {
  const [type, setType] = useState<Type>("type1");
  const [dataLength, setDataLength] = useState(0);

  return (
    <>
      <TypeHeader type={type} dataLength={dataLength} />
      <div>
        <button onClick={() => setType("type1")}>type1</button>
        <button onClick={() => setType("type2")}>type2</button>
      </div>
      {type === "type1" && <TypeOne setDataLength={setDataLength} />}
      {type === "type2" && <TypeTwo setDataLength={setDataLength} />}
    </>
  );
};
