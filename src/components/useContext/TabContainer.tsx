import { useState } from "react";
import { TabContext } from "../../hooks/TabContext";
import { Header } from "./Header";
import { TabOne } from "./TabOne";
import { TabTwo } from "./TabTwo";

export type Tab = "tab1" | "tab2";

export const TabContainer = () => {
  const [tab, setTab] = useState<Tab>("tab1");

  return (
    <TabContext>
      <Header tab={tab} />
      <div>
        <button onClick={() => setTab("tab1")}>tab1</button>
        <button onClick={() => setTab("tab2")}>tab2</button>
      </div>
      {tab === "tab1" && <TabOne />}
      {tab === "tab2" && <TabTwo />}
    </TabContext>
  );
};
