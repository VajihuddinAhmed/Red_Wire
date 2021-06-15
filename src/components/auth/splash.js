import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {Colors} from '../../utils/tools';
const Splash = () => (
  <View style={styles.contentContainer}>
    <ActivityIndicator color={Colors.black} />
  </View>
);

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    color: Colors.red,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Splash;
