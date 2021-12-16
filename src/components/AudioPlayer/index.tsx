import React from "react";
import { Feather } from "@expo/vector-icons";

import { Container, ButtonContainer, ButtonAction } from "./styles";
import { useAudio } from "../../hooks/audio";

const AudioPlayer: React.FC = () => {
    const { isPlay, handleToggleAudio } = useAudio();

    return (
        <Container>
            <ButtonContainer>
                <ButtonAction>
                    <Feather name="chevron-left" size={24} color="white" />
                </ButtonAction>
                <ButtonAction primary onPress={handleToggleAudio}>
                    <Feather name={isPlay ? "pause" : "play"} size={32} color="white" />
                </ButtonAction>
                <ButtonAction>
                    <Feather name="chevron-right" size={24} color="white" />
                </ButtonAction>
            </ButtonContainer>
        </Container>
    );
};

export default AudioPlayer;
