import React from "react";
import { ScrollView, FlatList, TouchableOpacity } from "react-native";
import { useAudio } from "../../hooks/audio";

import {
    ItemContainer,
    ItemInfoContainer,
    ItemInfoTitle,
    ItemInfoData,
    ImgAlbm,
    Separator,
} from "./styles";

const ListAudio: React.FC = () => {
    const { playlist, PlaySong } = useAudio();

    const RenderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => PlaySong(item, true)}>
                <ItemContainer>
                    <ImgAlbm
                        source={{
                            uri: item.imageSource,
                        }}
                    />
                    <ItemInfoContainer>
                        <ItemInfoTitle>{item.title}</ItemInfoTitle>
                        <ItemInfoData>{item.date}</ItemInfoData>
                    </ItemInfoContainer>
                </ItemContainer>
            </TouchableOpacity>
        );
    };

    return (
        <ScrollView>
            <FlatList
                data={playlist}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <Separator />}
                renderItem={(item) => <RenderItem {...item} />}
            />
        </ScrollView>
    );
};

export default ListAudio;
