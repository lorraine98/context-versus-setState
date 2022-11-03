import { Dispatch, SetStateAction, useEffect, useMemo } from "react";
import typeOneDataRaw from "../../json/one.json";
import { Empty } from "../Empty";

interface Props {
  setDataLength: Dispatch<SetStateAction<number>>;
}

export const TypeOne = ({ setDataLength }: Props) => {
  const fetchTypeOneData = () => {
    console.log("fetchTypeOneData");
    return typeOneDataRaw;
  };

  const typeOneData = useMemo(fetchTypeOneData, []);

  useEffect(() => {
    setDataLength(typeOneData.length);
  }, [typeOneData, setDataLength]);

  return (
    <ul>
      {typeOneData.length &&
        typeOneData.map((d) => (
          <div key={d.id}>
            <li>{d.content}</li>
            <li>{d.isLiked ? "like" : "hate"}</li>
            <li>{d.userName}</li>
          </div>
        ))}
      {!typeOneData.length && <Empty />}
    </ul>
  );
};
