import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import ContentShow from '../../../../utils/contentShow';
import Youtube from 'react-native-youtube';
import {useRoute} from '@react-navigation/native';

const VideoScrn = () => {
  const {params} = useRoute();

  return (
    <ScrollView>
      <View>
        <Youtube
          apiKey="Azefghmlinpq-4325reqkdl-98nbutrewp"
          videoId={params.postData.videoId}
          style={styles.youtubeContainer}
        />
        <ContentShow params={params} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  youtubeContainer: {
    height: 300,
    alignSelf: 'stretch',
  },
});

export default VideoScrn;
