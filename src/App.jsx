import "./App.css";
import Sidebar from "./components/sidebar";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Calender from "./pages/Calender";
import Projects from "./pages/Projects";
import Document from "./pages/Document";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  return (
    <>
      <Sidebar />
      <Pages>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/document" element={<Document />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </Pages>
    </>
  );
}

export default App;
