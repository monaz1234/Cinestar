import React from "react"

const GlobalContext = React.createContext({
    isShowModal: false,
    setIsShowModal: () => {},
});

export default GlobalContext;