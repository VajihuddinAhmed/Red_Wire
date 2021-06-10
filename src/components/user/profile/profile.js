import React from 'react';
import {View, Text, Button} from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View>
      <Text>profile screen</Text>
      <Button
        title="see article"
        onPress={() => navigation.navigate('Article_screen')}
      />
    </View>
  );
};

export default ProfileScreen;
