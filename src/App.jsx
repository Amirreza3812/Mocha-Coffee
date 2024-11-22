import "./App.css";
import Cake from "./pages/Cake";
import Breakfast from "./pages/Breakfast";
import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import CoffeeComponent from "./pages/Coffee";
import { CategoryProvider } from "./pages/CategoryContext";
import Feedback from "./pages/Feedback";
import ColdDrinks from "./pages/ColdDrinks";
import Moktel from "./pages/Moktel";
import Tea from "./pages/Tea";
import Pishfood from "./pages/Pishfood";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  direction: rtl;
  h1 {
    margin-right: 4vh;
    text-align: center;
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 2vh;
  }
`;

const url = "https://getsuback.liara.run";

function App() {
  const location = useLocation();
  return (
    <CategoryProvider>
      <>
        {/* <Sidebar /> */}
        <Pages>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Feedback />} />
              <Route path="/coffee" element={<CoffeeComponent />} />
              <Route path="/cold" element={<ColdDrinks />} />
              <Route path="/moktel" element={<Moktel />} />
              <Route path="/brackfast" element={<Breakfast />} />
              <Route path="/tea" element={<Tea />} />
              <Route path="/dessert" element={<Cake />} />
              <Route path="/pishfood" element={<Pishfood />} />
            </Routes>
          </AnimatePresence>
        </Pages>
      </>
    </CategoryProvider>
  );
}

export default App;
