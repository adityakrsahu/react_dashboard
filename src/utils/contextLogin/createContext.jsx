
import React, { createContext, useEffect, useState } from 'react';

const LStateContext = createContext();

const LStateProvider = ({ children }) => {
    const [token, setToken] = useState(false);

    useEffect(() => {
        // console.log(token);
        if (token === true) {
            localStorage.setItem('', token);
        }
    }, [token]);

    return (
        <LStateContext.Provider value={{ token, setToken }}>
            {children}
        </LStateContext.Provider>
    );
};

export { LStateContext as StateContext, LStateProvider as StateProvider };




