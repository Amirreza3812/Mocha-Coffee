import "./App.css";
import Sidebar from "./components/sidebar";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Calender from "./pages/Calender";
import Projects from "./pages/Projects";
import Document from "./pages/Document";
import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: start;
  align-items: start;
  direction: rtl;
  h1 {
    margin-right:4vh;
    text-align:center;
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top:33vh;
  }
`;

function App() {
  const location = useLocation();
  return (
    <>
      <Sidebar />
      <Pages>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/calender" element={<Calender />} />
            {/* <Route path="/document" element={<Document />} /> */}
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </AnimatePresence>
      </Pages>
    </>
  );
}

export default App;
