import React from 'react';
import styles from './Input.styles';
import {Text, TextInput, View} from 'react-native';

const Input = ({label, placeholder, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput placeholder={placeholder} onChangeText={onChangeText} />
      </View>
    </View>
  );
};

export default Input;
