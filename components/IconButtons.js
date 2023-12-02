import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

const IconButtons = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name="star" size={24} color="black" />
    </Pressable>
  );
};

export default IconButtons;
