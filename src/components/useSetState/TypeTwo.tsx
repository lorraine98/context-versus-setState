import { Dispatch, SetStateAction, useEffect, useMemo } from "react";
import typeTwoDataRaw from "../../json/two.json";
import { Empty } from "../Empty";

interface Props {
  setDataLength: Dispatch<SetStateAction<number>>;
}

export const TypeTwo = ({ setDataLength }: Props) => {
  const fetchTypeTwoData = () => {
    console.log("fetchTypeTwoData");
    return typeTwoDataRaw;
  };

  const typeTwoData = useMemo(fetchTypeTwoData, []);

  useEffect(() => {
    setDataLength(typeTwoData.length);
  }, [typeTwoData, setDataLength]);

  return (
    <ul>
      {typeTwoData.length &&
        typeTwoData.map((d) => (
          <div key={d.hello}>
            <li>{d.country}</li>
            <li>{d.email}</li>
            <li>{d.region}</li>
          </div>
        ))}
      {!typeTwoData.length && <Empty />}
    </ul>
  );
};
