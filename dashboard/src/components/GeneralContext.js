import React, { useState, createContext } from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  triggerHoldingsRefresh: () => {},
});

export const GeneralContextProvider = ({ children }) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [refreshHoldingsFlag, setRefreshHoldingsFlag] = useState(false);

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const triggerHoldingsRefresh = () => {
    setRefreshHoldingsFlag((prev) => !prev);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        triggerHoldingsRefresh,
        refreshHoldingsFlag,
      }}
    >
      {children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
