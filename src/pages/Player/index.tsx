import React, { createRef } from 'react'
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActionSheet from 'react-native-actions-sheet';
import { Dimensions } from 'react-native';

import Header from '../../components/Header';
import AboutAlbum from '../../components/AboutAlbum';
import AudioPlayer from '../../components/AudioPlayer';
import ListAudio from '../../components/ListAudio';
import { useAudio } from '../../hooks/audio';

const Player: React.FC = () => {
    const actionSheetRef = createRef();
    const { audio } = useAudio();

    const handleToggleList = () => {
        actionSheetRef.current?.setModalVisible();
    }
    return (
        <SafeAreaView>
            <Header handleToggleList={handleToggleList} />
            <ScrollView>
                <Text>{audio}</Text>
                <AboutAlbum />
                <AudioPlayer />
            </ScrollView>
            <ActionSheet
                ref={actionSheetRef}
                containerStyle={{
                    height: Dimensions.get('screen').height - 150,
                }}
            >
                <ListAudio />
            </ActionSheet>
        </SafeAreaView>
    );
};

export default Player;