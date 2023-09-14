import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Chat from "./Chat";
import Video from "./Video";
import Product from "./Product";
import Query from "./Query";
import ProductList from "./ProductQuery";

function VideoHome() {
  return (
    <>
      <p>비디오 홈</p>
    </>
  );
}

function VideoList() {
  return <p>비디오 리스트 : </p>;
}

function ChatHome() {
  return (
    <>
      <p> 채팅</p>
    </>
  );
}

function ChatList() {
  return <p> 채팅 리스트 : </p>;
}

function App() {
  const productData = [
    { id: 1, name: "물티슈", price: "₩2,000" },
    { id: 2, name: "두유", price: "₩1,000" },
    { id: 3, name: "키보드", price: "₩100,000" },
    { id: 4, name: "마우스", price: "₩150,000" },
    { id: 5, name: "컴퓨터", price: "₩100,0000" },
  ];
  return (
    <div>
      <Router>
        {/* 라우트 설정 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />}>
            <Route index element={<ChatHome />} />
            <Route path="list" element={<ChatList />} />
          </Route>
          <Route path="/video" element={<Video />}>
            <Route index element={<VideoHome />} />
            <Route path="list" element={<VideoList />} />
          </Route>
          <Route path="product/:id" element={<Product data={productData} />} />
          <Route path="query" element={<Query />} />
          <Route
            path="/productlist/:id?"
            element={<ProductList data={productData} />}
          />
        </Routes>
        <nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/chat">채팅</Link>
            </li>
            <li>
              <Link to="/video">비디오</Link>
            </li>
          </ul>
        </nav>

        <nav>
          <ul>
            {productData.map((product) => (
              <li key={product.id}>
                <Link to={`/video/product/${product.id}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Router>
    </div>
  );
}
export default App;
