import React from 'react';
import {View, Text, Button} from 'react-native';

const VideosScreen = ({navigation}) => {
  return (
    <View>
      <Text>Video screen page</Text>
      <Button
        title="see article"
        onPress={() => navigation.navigate('Video_scrn')}
      />
    </View>
  );
};

export default VideosScreen;
