import React from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.infoView}>
      <Text style={styles.title}>Welcome to Morse Code Converter! 🚀</Text>
      <Text style={styles.feature}>🔡 <Text style={styles.featureText}>Encode to Morse Code:</Text> Convert your text into Morse code easily.</Text>
      <Text style={styles.feature}>🔠 <Text style={styles.featureText}>Decode from Morse Code:</Text> Translate Morse code back to readable text.</Text>
      <Text style={styles.instruction}>Tap a button below to get started!</Text>
      
      </View>
      <TouchableOpacity
        style={styles.buttonstyle}
        onPress={() => navigation.navigate('Encode')}>
        <Text>Encode Morse Code</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonstyle}
        onPress={() => navigation.navigate('Decode')}>
        <Text>Decode Morse Code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e4fbef',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonstyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#52e599',
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 2,
    width: '60%',
    height: 50,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  feature: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
    textAlign: 'left',
    width: '100%',
  },
  featureText: {
    fontWeight: 'bold',
    color: '#333',
  },
  instruction: {
    fontSize: 16,
    color: '#333',
    marginTop: 20,
    marginBottom: 40,
    textAlign: 'center',
  },
  infoView: {width:'90%'},
});

export default Home;
