/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Platform, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import VideosScreen from '../components/home/videos';
import HomeScreen from '../components/home/articles';
import ArticleScreen from '../components/home/articles/article';
import {Colors, LogoText} from '../utils/tools';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

export const Stack = createStackNavigator();

export const LeftIcon = () => {
  const navigation = useNavigation();
  return (
    <View style={{margin: 10}}>
      <Icon
        name="menufold"
        type="antdesign"
        color={Colors.white}
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
};

export const screenOptions = {
  headerTitleAlign: 'center',
  headerTintColor: Colors.red,
  headerTitle: () => <LogoText style={{fontSize: 25}} />,
  headerStyle: {
    backgroundColor: Colors.black,
    borderBottomWidth: 6,
    borderBottomColor: Colors.red,
    height: Platform.OS === 'ios' ? 110 : 60,
  },
};

export const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="Home_screen"
    screenOptions={{
      ...screenOptions,
    }}>
    <Stack.Screen
      name="Home_screen"
      component={HomeScreen}
      options={{
        headerLeft: () => <LeftIcon />,
      }}
    />
    <Stack.Screen name="Article_screen" component={ArticleScreen} />
  </Stack.Navigator>
);

export const VideoStack = () => (
  <Stack.Navigator
    initialRouteName="Video_screen"
    screenOptions={{
      ...screenOptions,
    }}>
    <Stack.Screen
      name="Video_screen"
      component={VideosScreen}
      options={{
        headerLeft: () => <LeftIcon />,
      }}
    />
  </Stack.Navigator>
);
