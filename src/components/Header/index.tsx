import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, ImgLogo, Button, CenterContent, TextHeader } from './styles';

import logo from '../../assets/images/icon.png';

const Header: React.FC = ({ handleToggleList }) => {
    return (
        <Container>
            <ImgLogo source={logo} />
            <CenterContent>
                <TextHeader >TOCANDO DA PLAYLIST</TextHeader>
                <TextHeader bold>As mais tocadas 2021 by goismurilo</TextHeader>
            </CenterContent>
            <Button onPress={handleToggleList}>
                <Feather name="list" size={24} color="white" />
            </Button>
        </Container>
    );
}

export default Header;