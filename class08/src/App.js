import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Chat from "./Chat";
import Video from "./Video";

function App() {
  return (
    <div>
      <Router>
        {/*라우트 설정*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/video" element={<Video />} />
        </Routes>

        <nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/Chat">채팅</Link>
            </li>
            <li>
              <Link to="/video">비디오</Link>
            </li>
          </ul>
        </nav>
      </Router>
    </div>
  );
}
export default App;
