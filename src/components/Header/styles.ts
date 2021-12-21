import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin: 10px 10px;
`

export const ImgLogo = styled.Image`
    width:43px;
    height:43px;
`

export const Button = styled.TouchableOpacity`
    
`

export const CenterContent = styled.View`
    align-items: center;
`

export const TextHeader = styled.Text`
    font-weight: ${props => props.bold ? 700 : 400};
    font-size: 10px;
    color: #FFF;
`