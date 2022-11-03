import { TabTwoContext } from "../../hooks/TabContext";
import { Empty } from "../Empty";

export const TabTwo = () => {
  return (
    <TabTwoContext.Consumer>
      {(value) =>
        value?.tabTwoLength ? (
          value?.tabTwoData.map((v) => (
            <ul key={v.hello}>
              <li>{v.country}</li>
              <li>{v.email}</li>
              <li>{v.region}</li>
            </ul>
          ))
        ) : (
          <Empty />
        )
      }
    </TabTwoContext.Consumer>
  );
};
