import { Type } from "./TypeContainer";

interface Props {
  type: Type;
  dataLength: number;
}

export const TypeHeader = ({ type, dataLength }: Props) => {
  return (
    <div style={{ marginTop: "56px" }}>
      <div>{type}</div>
      <div>{dataLength}</div>
    </div>
  );
};
