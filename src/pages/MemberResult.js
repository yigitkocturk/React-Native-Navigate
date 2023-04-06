import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const MemberResult = ({route}) => {
    const {user} = route.params;
    return(
        <SafeAreaView>
            <Text style={styles.message}>Kayıt Tamamlandı!!</Text>
            <Text style={styles.label}>Adı: {user.userName}</Text>
            <Text style={styles.label}>Soyadı: {user.userSurname}</Text>
            <Text style={styles.label}>Yaşı: {user.userAge}</Text>
            <Text style={styles.label}>Yaşadığı Şehir: {user.userCity}</Text>
            <Text style={styles.label}>E-posta Afresi:  {user.userMail}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5,
    },
    message: {
        fontWeight: 'bold',
        fontSize: 50,
        textAlign: 'center',
    }
})

export default MemberResult;