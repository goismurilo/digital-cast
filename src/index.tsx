import { StatusBar } from "expo-status-bar";
import React from "react";
import Player from "./pages/Player";

import { AudioProvider, useAudio } from './hooks/audio';

import { Background } from './styles';

const Main: React.FC = () => {
    return (
        <AudioProvider>
            <StatusBar style="light" />
            <Background>
                <Player />
            </Background>
        </AudioProvider>
    );
}

export default Main;