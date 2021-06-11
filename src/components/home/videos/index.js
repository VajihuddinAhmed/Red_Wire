import React from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {Tile} from 'react-native-elements';

const VideosScreen = ({navigation}) => {
  const renderVideos = () => (
    <Tile
      imageSrc={{uri: 'https://picsum.photos/200/300'}}
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      icon={{
        name: 'play-circle',
        type: 'font-awesome',
        color: '#fff',
        size: 50,
      }}
      contentContainerStyle={styles.contentContainerStyle}
      containerStyle={styles.containerStyle}
      titleStyle={styles.titleStyle}
      onPress={() =>
        navigation.navigate('Video_scrn', {
          id: 'poighjrtdy',
          postData: {},
        })
      }
    />
  );

  return (
    <ScrollView>
      <View style={styles.containerView}>{renderVideos()}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerView: {
    padding: 20,
  },
  titleStyle: {
    fontSize: 15,
  },
  containerStyle: {
    width: '100%',
    height: 250,
    marginBottom: 15,
  },
  contentContainerStyle: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e1e8ee',
    shadowColor: 'rgba(0,0,0,0.2)',
  },
});

export default VideosScreen;
