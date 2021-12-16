import React from "react";
import { useAudio } from "../../hooks/audio";

import { Container, Album, Title } from "./styles";

const AboutAlbum: React.FC = () => {
    const { currentAudioInfo } = useAudio();

    return (
        <Container>
            <Title>{currentAudioInfo?.title || "Selecione um audio"}</Title>
            <Album
                source={{
                    uri:
                        currentAudioInfo?.picture ||
                        "https://lineup-images.scdn.co/wrapped-2021-top100_DEFAULT-pt.jpg",
                }}
            />
        </Container>
    );
};

export default AboutAlbum;
