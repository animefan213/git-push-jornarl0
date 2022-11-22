import React, {Component} from 'react';
import {ScrollView, View,Text, StyleSheet, Button,ImageBackground,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Home_Page = ({ navigation }) => {

  return (
    <ScrollView >
    <ImageBackground resizeMode="cover" source={require('../../../assets/house.webp')}>

      
    <Text style={estilo.titulo}>
    MetaPoke
    </Text>
    <Text style={estilo.subtitulo}>Play & Earn</Text>
<Text style={estilo.subtitulo}></Text>
<Text style={estilo.corpo}>MetaPoke is a new type of game,{'\n'} partially owned and operated by its players.
  {'\n'}
Earn MPC tokens by playing and{'\n'} use them to decide the future of the game!</Text>

<Text style={estilo.subtitulo}>MetaPoke: BATTLE</Text>
<Text style={estilo.corpo}>Build unstoppable teams of Axies and conquer your enemies!{'\n'}
Each Axie has unique strengths and weaknesses based on its genes.{'\n'} With billions of possible genetic combinations, {'\n'}nthe possibilities are truly infinite!</Text>

<View style={{flexDirection:"row",alignContent:'flex-start'}}>
<Image style={estilo.image} source={require('../../../assets/adventure.webp')}/>
<Text style={estilo.subtitulo}>
  Combat
</Text>
<Text style={estilo.corpo}>
Battle Chimera and earn rare treasures{'\n'} useful for upgrading your Axie army!
</Text>
</View>
  <View style={{flexDirection:'row'}}>
  <Image style={estilo.image} source={require('../../../assets/defence.webp')}/>
</View><Button
     title='Clique e inscreva para a whitelist'
     onPress={() => {navigation.push('cadastro')}}
     />

     </ImageBackground>
      </ScrollView>
  );
};
const estilo=StyleSheet.create({
  scrollView: {
    flexGrow: 1, justifyContent: 'center'
    
  },
  titulo:{
    textAlign:'center',
    fontSize:30,
    paddingBottom:40,textShadowColor:"blue"

  },
  subtitulo:{
    textAlign:'center',
    fontSize:25,paddingBottom:30,
  }
  , 
  corpo:{
    textAlign:'center',
    fontSize:15,
    padding:10      
  },
  Button:{
    flex:3
  },
  image:{
    width:"20%",
    height:"100%"
  }
})
export default Home_Page;
