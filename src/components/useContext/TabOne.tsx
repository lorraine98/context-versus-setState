import { TabOneContext } from "../../hooks/TabContext";
import { Empty } from "../Empty";

export const TabOne = () => {
  return (
    <TabOneContext.Consumer>
      {(value) =>
        value?.tabOneLength ? (
          value?.tabOneData.map((v) => (
            <ul key={v.id}>
              <li>{v.content}</li>
              <li>{v.isLiked ? "like" : "hate"}</li>
              <li>{v.userName}</li>
            </ul>
          ))
        ) : (
          <Empty />
        )
      }
    </TabOneContext.Consumer>
  );
};
