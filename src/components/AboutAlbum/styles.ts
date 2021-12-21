import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const width = Dimensions.get('screen').width - 40;

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    padding-top: 20px;
`

export const InfoTrack = styled.Text`
    color: #FFFFFF;
    font-size: ${props => props.title ? 24 : 20}px;
    font-weight: ${props => props.title ? 700 : 400};
    width: ${width}px;

    text-align: left;
    margin-bottom: ${props => props.title ? 0 : 20}px;
    margin-top: ${props => props.title ? 20 : 0}px;
`

export const Album = styled.Image`
    width: ${width}px;
    height: 350px;
`
