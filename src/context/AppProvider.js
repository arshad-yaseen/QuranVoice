import React, { createContext, useState } from 'react'

const ReciterContext = createContext()
const GetReciterFunction = createContext()

function AppProvider({children}) {

    const [reciterDetails, setReciterDetails] = useState([{}])

    function getReciterDetails(props) {
        setReciterDetails([props])
    }

  return (
    <GetReciterFunction.Provider value={getReciterDetails}>
        <ReciterContext.Provider value={reciterDetails}>
            {children}
        </ReciterContext.Provider>
    </GetReciterFunction.Provider>
  )
}

export {AppProvider, ReciterContext, GetReciterFunction}