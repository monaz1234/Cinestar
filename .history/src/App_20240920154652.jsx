import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header/Header";
import FooterTest from "./components/FooterTest/FooterTest";
import Test from "./pages/Test";
import Test2 from "./pages/Test2";
import MainLayout from "./layout/MainLayout";
import { routes } from "./constants/routes";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route chính với Layout */}
        <Route path="/" element={<MainLayout />}>
          {/* Các route con sẽ được render tại Outlet của Layout */}
          <Route path="" element={<MainLayout />}>
            <Route path="Test" element={<Test />} />
          </Route>
        </Route>
      </Routes>
    </Router>
    // <Router>
    //   <Switch>
    //     {routes.map((route, index) => (
    //       <RouteWithLayout
    //         key={index}
    //         path={route.path}
    //         exact={route.exact}
    //         component={route.component}
    //         layout={route.layout}
    //         authRequired={route.authRequired}
    //       />
    //     ))}
    //   </Switch>
    // </Router>
  );
}

export default App;


import Header from "./components/Header/Header";
import Now from "./components/Now/Now";
import SearchBox from "./components/SearchBox/SearchBox";
import Slider from "./components/Slider/Slider";
import SearchContextWrapper from "./context/SearchContext/SearchContextWrapper";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from 'react-router-dom'; // Thêm dòng này

function App() {
  return (
    <BrowserRouter>
      <div className="bg-cinestar-black md:px-2">
        <MainLayout />
        <MainLayout />
        <AppRouter />
        <Now />
      </div>
    </BrowserRouter>
  );
}

export default App;
