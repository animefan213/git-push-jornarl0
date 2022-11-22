import React, {Component, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Input_Screen = ({navigation}) => {
    
    const [email, emailset] = useState("");
    const [telefone, settelefone] = useState(null);
    const [wallet, walletset] = useState(null);
    const [password, passwordset] = useState(null);
  const [secret, secretset] = useState(null);
saveData= async(chave,valor)=>{
    AsyncStorage.setItem("email",email);
    AsyncStorage.setItem("telefone",telefone);
    AsyncStorage.setItem( "wallet",wallet);
    AsyncStorage.wallet("password",password);
    AsyncStorage.secret("secret",secret);
  };
  RetriveData =async()=>{
    try {
        let getName =await AsyncStorage.getItem("userData");
    } catch (error) {
    }
  }
  
  ;
  return (
      <KeyboardAvoidingView>
      <View style={{borderColor: '#696969', borderWidth: 2, borderRadius: 0.5}}>
        <Text>Insira Seu Email</Text>
        <TextInput onChange={emailset} title={email} />
      </View>
      <View style={{borderColor: '#696969', borderWidth: 2, borderRadius: 0.5}}>
        <Text>Insira seu telefone</Text>
        <TextInput onChange={settelefone} value={telefone} />
      </View>
      <View style={{borderColor: '#696969', borderWidth: 2, borderRadius: 0.5}}>
        <Text>Insira o endereço da sua carteira</Text>
        <TextInput onChange={walletset} value={wallet} />
      </View>
      <View style={{borderColor: '#696969', borderWidth: 2, borderRadius: 0.5}}>
        <Text>Insira seu secret seed</Text>
        <TextInput onChange={secretset} value={secret} />
      </View>
      <View style={{borderColor: '#696969', borderWidth: 2, borderRadius: 0.5}}>
        <Text>Insira a senha da sua carteira</Text>
        <TextInput onChange={passwordset} value={password} />
      </View>

      <Button
  onPress={saveData}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
    </KeyboardAvoidingView>
  );
};

const estilo = StyleSheet.create({
  container: {
    marginTop: '20',
    marginLeft: '20',
    alignContent: 'flex-start',
    borderWidth: 4,
    borderColor: '#20232a',
  },
});

export default Input_Screen;
