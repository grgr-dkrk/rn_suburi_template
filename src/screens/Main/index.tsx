import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Form from 'containers/Form';

/**
 * Props
 */
type MainScreenProps = {};

/**
 * Component
 */
const MainScreen: React.FC<MainScreenProps> = props => {
  return (
    <View style={styles.wrapper}>
      <Form />
    </View>
  );
};

/**
 * styles
 */
const styles = StyleSheet.create({
  wrapper: {},
});

export default MainScreen;
