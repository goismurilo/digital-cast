import React from "react";
import { Entypo } from "@expo/vector-icons";

import { Container, ButtonContainer, ButtonAction } from "./styles";
import { useAudio } from "../../hooks/audio";

const AudioPlayer: React.FC = () => {
    const { isPlay, handleToggleAudio } = useAudio();

    return (
        <Container>
            <ButtonContainer>
                <ButtonAction>
                    <Entypo name="controller-jump-to-start" size={30} color="#272736" />
                </ButtonAction>
                <ButtonAction primary onPress={handleToggleAudio}>
                    <Entypo name={isPlay ? "controller-paus" : "controller-play"} size={46} color="#272736" />
                </ButtonAction>
                <ButtonAction>
                    <Entypo name="controller-next" size={30} color="#272736" />
                </ButtonAction>
            </ButtonContainer>
        </Container>
    );
};

export default AudioPlayer;
