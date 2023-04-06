import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Button from '../Button/Button'

const Welcome = ({navigation}) => {
  
  function goToMemberSign() {
    navigation.navigate('MemberSignScreen');
  }
  
    return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Share Circle</Text>
      <Button text="Kayıt Oluştur" onPress={goToMemberSign} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    header : {
        fontSize:30,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    }
})

export default Welcome;
