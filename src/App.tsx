import "./App.css";
import { TabContainer } from "./components/useContext/TabContainer";
import { TypeContainer } from "./components/useSetState/TypeContainer";

// TabContainer : context를 사용하여 헤더와 하위 컴포넌트에 상태 전달
// TypeContainer : setState를 props로 전달해 상태 관리
// App에서 각 컴포넌트를 주석 처리해가며 확인해주세요.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        hello from top
        <TabContainer />
        <TypeContainer />
      </header>
    </div>
  );
}

export default App;
