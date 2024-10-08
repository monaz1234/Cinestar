import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

const GlobalContextWrapper = (props) => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <GlobalContext.Provider value={{
        isShowModal,
        setIsShowModal
    }}>
        {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextWrapper;
