import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Appbar, Button, Divider, TextInput, Title} from 'react-native-paper';
import UserData from './userData';

const ProfileScreen = ({navigation}) => {
  return (
    <ScrollView>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Home_screen')} />
        <Appbar.Content title="Profile" subtitle="Redwire" />
      </Appbar.Header>
      <View style={styles.title}>
        <Title>Your user Login data</Title>
        <TextInput
          label="Email"
          value={''}
          onChangeText={() => console.log('hey')}
          mode="outlined"
        />
        <TextInput
          label="Password"
          value={''}
          onChangeText={() => console.log('hey')}
          mode="outlined"
        />
        <Button mode="contained" onPress={() => console.log('pressed')}>
          Update
        </Button>
      </View>
      <Divider />
      <UserData />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    padding: 20,
  },
});

export default ProfileScreen;
