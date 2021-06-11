/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';

export const Colors = {
  white: '#ffffff',
  black: '#131418',
  black2: '#272930',
  black3: '#1a1a21',
  grey: '#c8c8c8',
  red: '#d74444',
};

export const LogoText = props => (
  <Text
    style={{
      fontFamily: 'Monoton-Regular',
      fontSize: 50,
      color: '#ffffff',
      ...props.style,
    }}>
    RedWire
  </Text>
);
