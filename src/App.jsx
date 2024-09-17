import Header from "./components/Header/Header";
import Now from "./components/Now/Now";
import SearchBox from "./components/SearchBox/SearchBox";
import Slider from "./components/Slider/Slider";
import SearchContextWrapper from "./context/SearchContext/SearchContextWrapper";

function App() {
  return (
    <div className="bg-cinestar-black xs:px-1 md:px-2">
      <Header />
      <Slider />
      <SearchContextWrapper>
        <SearchBox />
      </SearchContextWrapper>
      <Now />
    </div>
  );
}

export default App;
