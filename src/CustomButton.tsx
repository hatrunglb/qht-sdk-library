import React from 'react';
import type { ViewStyle } from 'react-native';
import { Pressable, StyleSheet, Text } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: ViewStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({title, onPress, style, textStyle}) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default CustomButton;
