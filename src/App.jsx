import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header/Header";
import FooterTest from "./components/FooterTest/FooterTest";
import Test from "./pages/Test";
import Test2 from "./pages/Test2";

function App() {
  return (
    <Router>
      <div className="bg-cinestar-black xs:px-1 md:px-2">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/Test2" element={<Test2 />} />
      </Routes>
      <FooterTest />
    </Router>
  );
}

export default App;
