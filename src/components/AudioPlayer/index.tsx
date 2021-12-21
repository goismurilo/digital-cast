import React from "react";
import { Entypo, AntDesign } from "@expo/vector-icons";

import { Container, ButtonContainer, ButtonAction } from "./styles";
import { useAudio } from "../../hooks/audio";

const AudioPlayer: React.FC = () => {
    const { isPlay, handleToggleAudio, handleNextAudio } = useAudio();

    return (
        <Container>
            <ButtonContainer>
                <ButtonAction>
                    <AntDesign name="retweet" size={30} color="white" />
                </ButtonAction>
                <ButtonAction>
                    <Entypo name="controller-jump-to-start" size={30} color="#272736" />
                </ButtonAction>
                <ButtonAction primary onPress={handleToggleAudio}>
                    <Entypo name={isPlay ? "controller-paus" : "controller-play"} size={46} color="#272736" />
                </ButtonAction>
                <ButtonAction onPress={handleNextAudio}>
                    <Entypo name="controller-next" size={30} color="#272736" />
                </ButtonAction>
                <ButtonAction>
                    <Entypo name="share" size={30} color="white" />
                </ButtonAction>
            </ButtonContainer>
        </Container>
    );
};

export default AudioPlayer;
