import logo from "./logo.svg";
import "./App.css";
import ImportComponent from "./comp";
import Cycle from "./sycle";
import { Sycle } from "./cycle";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ImportComponent></ImportComponent>
      <Cycle></Cycle>
      <Sycle />
    </div>
  );
}

export default App;
