import styled from 'styled-components/native';


export const ItemContainer = styled.View`
    flex-direction: row;
    padding: 20px 20px;
    background-color: #1b1b2c;
    align-items: center;
`

export const ItemInfoContainer = styled.View`
    padding-left: 20px;
    justify-content: space-between;
    width: 100%;
`

export const ItemInfoTitle = styled.Text`
    font-size: 18px;
    font-weight: 700;
    color: #343A40;
    width: 80%;
`

export const ItemInfoData = styled.Text`
    font-size: 14px;
    font-weight: 300;
    width: 80%;

    color: rgba(0, 0, 0, 0.5);
`

export const ImgAlbm = styled.Image`
    width: 60px;
    height: 60px;
`

export const Separator = styled.View`
    width: 100%;
    height: 1px;
    color: rgba(0, 0, 0, 0.5);
`