import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

type InputProps = {
  handleChangeText: (text: string) => void;
};

const Input: React.FC<InputProps> = props => {
  const handleChangeText = (text: string) => {
    props.handleChangeText(text);
  };

  return (
    <View style={styles.wrapper}>
      <TextInput onChangeText={handleChangeText} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
});

export default Input;
