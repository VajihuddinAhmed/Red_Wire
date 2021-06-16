import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Colors, LogoText} from './tools';
import {useDispatch} from 'react-redux';
import {logoutUser} from '../store/actions';

const SideDrawerCustom = props => {
  const dispatch = useDispatch();

  const mainOptions = [
    {title: 'News', location: 'Home'},
    {title: 'Videos', location: 'Videos'},
    {title: 'Profile', location: 'Profile'},
  ];

  return (
    <DrawerContentScrollView {...props}>
      <View>
        <LogoText style={styles.logoTextStyle} />
      </View>
      {mainOptions.map(item => (
        <Button
          key={item.location}
          title={item.title}
          onPress={() => props.navigation.navigate(item.location)}
          buttonStyle={styles.drawerButton}
          titleStyle={styles.titleStyle}
        />
      ))}
      <Button
        title="Logout"
        onPress={() => dispatch(logoutUser())}
        buttonStyle={styles.drawerButton}
        titleStyle={styles.titleStyle}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerButton: {
    backgroundColor: Colors.black,
    borderBottomWidth: 1,
    borderBottomColor: Colors.black2,
  },
  titleStyle: {
    width: '100%',
    marginTop: 15,
    marginBottom: 15,
  },
  logoTextStyle: {
    fontSize: 40,
    textAlign: 'center',
  },
});

export default SideDrawerCustom;
