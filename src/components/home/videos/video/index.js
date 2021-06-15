import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import ContentShow from '../../../../utils/contentShow';
import Youtube from 'react-native-youtube';

const VideoScrn = () => {
  return (
    <ScrollView>
      <View>
        <Youtube
          apiKey="Azefghmlinpq-4325reqkdl-98nbutrewp"
          videoId="x_TDPflc9s4"
          style={styles.youtubeContainer}
        />
        <ContentShow />
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
