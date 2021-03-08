import React, { createContext } from 'react';
export const TempContext = createContext(null);

function TempContextProvider({ children }) {
    return (
        <TempContext.Provider value={}>
            { children }
        </TempContext.Provider>
    )
}

export default TempContextProvider;