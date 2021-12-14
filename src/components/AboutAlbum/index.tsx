import React from 'react';

import { Container, Album, Title } from './styles';

const AboutAlbum: React.FC = () => {
    return (
        <Container>
            <Title>Selecione um aúdio</Title>
            <Album source={{ uri: "https://complianz.io/wp-content/uploads/2019/03/placeholder.jpg" }} />
        </Container>
    );
}

export default AboutAlbum;