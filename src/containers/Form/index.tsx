import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import ButtonComponent from 'components/Button';
import Input from 'components/Input';

type FormState = {
  inputText: string;
};

const Form: React.FC = () => {
  const [state, setState] = React.useState<FormState>({
    inputText: '',
  });

  const handleChangeText = (text: string) => {
    setState({
      ...state,
      inputText: text,
    });
  };

  const handleSubmit = () => {
    if (!state.inputText.length) return;
    Alert.alert(state.inputText);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.input}>
        <Input handleChangeText={handleChangeText} />
      </View>
      <View
        style={[styles.button, state.inputText.length && styles.buttonActive]}>
        <ButtonComponent handlePress={handleSubmit}>Press</ButtonComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 5,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#eee',
    color: '#fff',
    padding: 10,
    alignItems: 'center',
  },
  buttonActive: {
    backgroundColor: '#67AC5C',
    color: '#fff',
  },
});

export default Form;
