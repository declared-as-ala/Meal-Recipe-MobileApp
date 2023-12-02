import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import Color from './Color';

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={MaterialIcons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Color.primaryColor}
    />
  );
};

export default CustomHeaderButton;
