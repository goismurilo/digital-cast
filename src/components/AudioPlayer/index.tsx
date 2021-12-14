import React from 'react';

import { Feather } from '@expo/vector-icons'

import { Container, ButtonAction, ContainerButtons } from './styles';

const AudioPlayer: React.FC = () => {
    return (
        <Container>
            <ContainerButtons>
                <ButtonAction>
                    <Feather name="chevron-left" size={24} color="white" />
                </ButtonAction>
                <ButtonAction primary>
                    <Feather name="play" size={32} color="white" />
                </ButtonAction>
                <ButtonAction>
                    <Feather name="chevron-right" size={24} color="white" />
                </ButtonAction>
            </ContainerButtons>
        </Container>
    );
}

export default AudioPlayer;