import React, { createContext, useContext, useState, useEffect } from 'react'

const Crypto = createContext();

const CryptoContext = ({ children }) => {
    const [currency, setCurrency] = useState("ARS");
    const [symbol, setSymbol] = useState('$');

    useEffect(() => {
        if (currency === "ARS") setSymbol("$");
        else if (currency === "USD") setSymbol("u$d");
    }, [currency]);

    return <Crypto.Provider value={{ currency, symbol, setCurrency }}>{children}</Crypto.Provider>
};

export default CryptoContext;

export const CryptoState = () => {
    return useContext(Crypto);
}