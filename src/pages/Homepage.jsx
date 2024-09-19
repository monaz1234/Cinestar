import React from "react";
import Header from "../components/Header/Header";
import SearchContextWrapper from "../context/SearchContext/SearchContextWrapper";
import SearchBox from "../components/SearchBox/SearchBox";
import Now from "../components/Now/Now";
import ComingSoon from "../components/ComingSoon/ComingSoon";
import Promotion from "../components/Promotion/Promotion";
import Contact from "../components/Contact/Contact";
import Slider from "../components/Slider/Slider";

const Homepage = () => {
  return (
    <div className="bg-cinestar-black xs:px-1 md:px-2">
      <Slider />
      <SearchContextWrapper>
        <SearchBox />
      </SearchContextWrapper>
      <Now />
      <ComingSoon />
      <Promotion />
      <Contact />
    </div>
  );
};

export default Homepage;
