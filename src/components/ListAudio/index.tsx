import React from 'react';
import { FlatList, ScrollView } from 'react-native';

import {
    ImgAlbm,
    ItemContainer,
    ItemInfoContainer,
    ItemInfoData,
    ItemInfoTitle,
    Separator
} from './styles';

const ListAudio: React.FC = () => {
    const data = [
        {
            id: "1",
            title: "title",
        }
    ];

    const RenderItem = ({ item }) => {
        return (
            <ItemContainer>
                <ImgAlbm source={{ uri: "https://complianz.io/wp-content/uploads/2019/03/placeholder.jpg" }} />
                <ItemInfoContainer>
                    <ItemInfoTitle>Nome</ItemInfoTitle>
                    <ItemInfoData>01/02/2022</ItemInfoData>
                </ItemInfoContainer>
            </ItemContainer>
        )
    }
    return (
        <ScrollView>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <Separator />}
                renderItem={item => <RenderItem {...item} />}
            />
        </ScrollView>
    );
}

export default ListAudio;