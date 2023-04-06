import React, {useState} from 'react';
import {Alert, SafeAreaView, Text} from 'react-native';

import Input from '../Input/Input';
import Button from '../Button/Button';

const MemberSign = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [userCity, setUserCity] = useState(null);

  function handleSubmit() {
    if (!userName || !userSurname || !userAge || !userCity || !userMail) {
      Alert.alert('Share Circle', 'bilgiler boş bırakılamaz');
      return;
    }

    const user = {
      userName,
      userSurname,
      userAge,
      userCity,
      userMail,
    };

    navigation.navigate('MemberResultScreen', {user});
  }

  return (
    <SafeAreaView>
      <Input
        label="Adınız :"
        placeholder="İsminizi giriniz..."
        onChangeText={setUserName}
      />
      <Input
        label="Soyadınız :"
        placeholder="Soyadınızı giriniz..."
        onChangeText={setUserSurname}
      />
      <Input
        label="Yaş :"
        placeholder="Yaşınızı giriniz..."
        onChangeText={setUserAge}
      />
      <Input
        label="E-posta :"
        placeholder="E-posta adresinizi giriniz..."
        onChangeText={setUserMail}
      />
      <Input
        label="Şehir :"
        placeholder="Yaşadığınız şehri giriniz..."
        onChangeText={setUserCity}
      />
      <Button text="Kaydı tamamla" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default MemberSign;
