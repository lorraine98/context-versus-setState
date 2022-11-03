import { TabOneContext, TabTwoContext } from "../../hooks/TabContext";
import { Tab } from "./TabContainer";

interface Props {
  tab: Tab;
}
export const Header = ({ tab }: Props) => {
  return (
    <>
      <div style={{ marginTop: "56px" }}>{tab}</div>
      {tab === "tab1" && (
        <TabOneContext.Consumer>
          {(value) => <div>{value?.tabOneLength}</div>}
        </TabOneContext.Consumer>
      )}
      {tab === "tab2" && (
        <TabTwoContext.Consumer>
          {(value) => <div>{value?.tabTwoLength}</div>}
        </TabTwoContext.Consumer>
      )}
    </>
  );
};
