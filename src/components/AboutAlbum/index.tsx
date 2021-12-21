import React from "react";
import { useAudio } from "../../hooks/audio";

import { Container, Album, InfoTrack } from "./styles";

const AboutAlbum: React.FC = () => {
    const { currentAudioInfo } = useAudio();

    return (
        <Container>
            <Album
                source={{
                    uri:
                        currentAudioInfo?.picture ||
                        "https://lineup-images.scdn.co/wrapped-2021-top100_DEFAULT-pt.jpg",
                }}
            />
            <InfoTrack title>{currentAudioInfo?.title || "Selecione um audio"}</InfoTrack>
            <InfoTrack>{currentAudioInfo?.artist}</InfoTrack>
        </Container>
    );
};

export default AboutAlbum;
