import React, { createContext, useState } from "react";

const ReciterContext = createContext();
const GetReciterFunction = createContext();
const GetFavoritesFunction = createContext();
const favContext = createContext();

function AppProvider({ children }) {
  const [reciterDetails, setReciterDetails] = useState([]);
  const [favDetails, setFavDetails] = useState([{}]);

  function getReciterDetails(props) {
    setReciterDetails([props]);
  }

  function getFavDetails(
    reciterName,
    chapterName,
    rewaya,
    reciterId,
    recitationUrl,
    durmins,
    dursecs,
  ) {
    let favObject = [
      ...favDetails,
      {
        reciterName,
        chapterName,
        rewaya,
        reciterId,
        recitationUrl,
        durmins,
        dursecs
      }
    ]
    window.localStorage.setItem("favDetailsLocal", JSON.stringify(favObject));
    setFavDetails([
      ...favDetails,
      {
        reciterName,
        chapterName,
        rewaya,
        reciterId,
        recitationUrl,
        durmins,
        dursecs
      },
    ]);
  }

  return (
    <GetReciterFunction.Provider value={getReciterDetails}>
      <ReciterContext.Provider value={reciterDetails}>
        <GetFavoritesFunction.Provider value={getFavDetails}>
          <favContext.Provider value={favDetails}>
            {children}
          </favContext.Provider>
        </GetFavoritesFunction.Provider>
      </ReciterContext.Provider>
    </GetReciterFunction.Provider>
  );
}

export {
  AppProvider,
  ReciterContext,
  GetReciterFunction,
  GetFavoritesFunction,
  favContext,
};
