import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Alert,
  Dimensions,
} from 'react-native';
import Dialog from 'react-native-dialog';
import { encodeToMorse } from '../utils/morseUtils';
import Clipboard from '@react-native-clipboard/clipboard';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const Encode = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [visible, setVisible] = useState(false);

  const handleEncode = () => {
    Keyboard.dismiss();
    setResult(encodeToMorse(text));
  };

  const copyToClipboard = () => {
    Clipboard.setString(result);
    setVisible(true);
  };

  const handleCloseDialog = () => {
    setVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter text to encode"
            value={text}
            onChangeText={setText}
            multiline
            numberOfLines={4}
          />
        </View>
        <TouchableOpacity style={styles.buttonstyle} onPress={handleEncode}>
          <Text style={styles.buttonText}>Encode</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onLongPress={copyToClipboard}>
          {result ? <Text style={styles.result}>{result}</Text> : null}
        </TouchableOpacity>
      </ScrollView>

      <Dialog.Container style={styles.dialogContainer} visible={visible} onBackdropPress={handleCloseDialog}>
        <Dialog.Title style={styles.dialogTitle}>Copied to Clipboard!</Dialog.Title>
        <Dialog.Description style={styles.dialogDescription}>
          The encoded Morse code has been copied to the clipboard. ✅
        </Dialog.Description>
        <Dialog.Button
          label="OK"
          onPress={handleCloseDialog}
          style={styles.dialogButton}
        />
      </Dialog.Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4fbef',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.05
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    minHeight: height * 0.2, // Responsive height
    borderColor: '#9fe2b1',
    borderWidth: 3,
    borderRadius: 10,
    
    paddingHorizontal: 8,
    textAlignVertical: 'top',
  },
  result: {
    marginTop: 20,
    fontSize: 24, // Adjusted font size for better readability
    backgroundColor: '#fff',
    padding: 10,
    textAlign: 'center',
    width: width * 0.9, // Responsive width
  },
  buttonstyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#52e599',
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 2,
    width: '60%',
    height: height * 0.07, // Responsive height
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18, // Adjusted font size for better readability
    color: '#fff',
  },
  dialogTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  dialogDescription: {
    fontSize: 16,
    color: '#52e599',
    marginVertical: 10,
    textAlign: 'center',
  },
  dialogButton: {
    backgroundColor: '#52e599',
    borderRadius: 5,
  },
  dialogButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  dialogContainer: {
    backgroundColor: '#fff',
  },
});

export default Encode;
