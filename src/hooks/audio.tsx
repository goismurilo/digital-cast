import React, { createContext, useContext, useState } from 'react';

const AudioContext = createContext({});

const AudioProvider: React.FC = ({ children }) => {

    const [audio, setAudio] = useState("teste");
    return (
        <AudioContext.Provider value={{ audio }}>
            {children}
        </AudioContext.Provider>
    );
};

const useAudio = () => {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error("Informe dentro do contexto.");
    } else {
        return context
    }
}

export { AudioProvider, useAudio };