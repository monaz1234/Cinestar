import Header from "./components/Header/Header";
import Now from "./components/Now/Now";
import SearchBox from "./components/SearchBox/SearchBox";
import Slider from "./components/Slider/Slider";
import SearchContextWrapper from "./context/SearchContext/SearchContextWrapper";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-cinestar-black md:px-2">
        <Header />
        <Slider />
        <SearchContextWrapper>
          <SearchBox />
        </SearchContextWrapper>
        <AppRouter />
        <Now />
      </div>
    </BrowserRouter>
  );
}

export default App;
