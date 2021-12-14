import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, ImgLogo, Button } from './styles';

import logo from '../../assets/images/icon.png';

const Header: React.FC = ({ handleToggleList }) => {
    return (
        <Container>
            <ImgLogo source={logo} />
            <Button onPress={handleToggleList}>
                <Feather name="list" size={24} color="white" />
            </Button>
        </Container>
    );
}

export default Header;