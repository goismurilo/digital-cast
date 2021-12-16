import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const width = Dimensions.get('screen').width - 40


export const Container = styled.View`
    justify-content: center;
    align-items: center;
    margin-top:80px;
`

export const ButtonContainer = styled.View`
    flex-direction: row;
    width: ${width};
    justify-content: space-between;
    align-items: center; 
`

export const ButtonAction = styled.TouchableOpacity`
    width: ${props => props.primary ? 85 : 66}px;
    height: ${props => props.primary ? 85 : 66}px;
    background: ${props => props.primary ? '#F43F30' : '#FE9541'};
    border-radius: ${props => props.primary ? 42 : 33}px;

    justify-content: center;
    align-items: center;

`