import { createContext, PropsWithChildren, useMemo } from "react";
import tabOneDataRaw from "../json/one.json";
import tabTwoDataRaw from "../json/two.json";

interface TabOneData {
  id: number;
  userName: string;
  content: string;
  isLiked: boolean;
}

interface TabTwoData {
  hello: string;
  region: string;
  email: string;
  country: string;
}

interface TabOneContextType {
  tabOneData: TabOneData[];
  tabOneLength: number;
}

interface TabTwoContextType {
  tabTwoData: TabTwoData[];
  tabTwoLength: number;
}

export const TabOneContext = createContext<TabOneContextType | null>(null);
export const TabTwoContext = createContext<TabTwoContextType | null>(null);

interface Props {}

export const TabContext = ({ children }: PropsWithChildren<Props>) => {
  const fetchTabOneData = () => {
    console.log("fetchTabOneData");
    return tabOneDataRaw;
  };

  const fetchTabTwoData = () => {
    console.log("fetchTabTwoData");
    return tabTwoDataRaw;
  };

  const tabOneData = useMemo(fetchTabOneData, []);
  const tabOneLength = tabOneData.length;

  const tabTwoData = useMemo(fetchTabTwoData, []);
  const tabTwoLength = tabTwoData.length;

  return (
    <TabOneContext.Provider value={{ tabOneData, tabOneLength }}>
      <TabTwoContext.Provider value={{ tabTwoData, tabTwoLength }}>
        {children}
      </TabTwoContext.Provider>
    </TabOneContext.Provider>
  );
};
