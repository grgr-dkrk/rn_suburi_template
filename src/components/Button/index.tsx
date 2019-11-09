import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

type ButtonComponentProps = {
  handlePress: () => void;
};

const ButtonComponent: React.FC<ButtonComponentProps> = props => {
  return (
    <TouchableOpacity
      accessible={true}
      accessibilityRole={'button'}
      onPress={props.handlePress}
      style={styles.wrapper}>
      <Text>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default ButtonComponent;
