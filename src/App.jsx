import Header from "./components/Header/Header";
import Now from "./components/Now/Now";
import SearchBox from "./components/SearchBox/SearchBox";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="bg-cinestar-black md:px-2">
      <Header />
      <Slider />
      <SearchBox />
      <Now />
    </div>
  );
}

export default App;
