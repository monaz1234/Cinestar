import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

const ContextWrapper = (props) => {
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

export default ContextWrapper;
