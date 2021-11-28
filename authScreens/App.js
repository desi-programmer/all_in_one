/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  TextInput,
  useColorScheme,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const [passwordVisible, setpasswordVisible] = useState(true);

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView backgroundColor="#eee" style={styles.container}>
      <StatusBar
        backgroundColor="#0248FF"
        // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        barStyle={'light-content'}
      />
      <View>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/79/DigitalOcean_logo.png',
          }}
        />
        <Text style={styles.header}> Welcome </Text>
        <TextInput
          style={styles.inputs}
          keyboardType="phone-pad"
          placeholder="Enter Phone Number"
        />
        <TextInput
          style={styles.inputs}
          keyboardType="email-address"
          placeholder="Enter Email"
        />
        <View style={styles.passwordView}>
          <TextInput
            style={styles.passwordInput}
            secureTextEntry={passwordVisible}
            placeholder="Enter Password"
          />
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.showButton}
            onPress={() => {
              setpasswordVisible(!passwordVisible);
            }}>
            <Text style={styles.showButtonText}>
              {passwordVisible ? 'show' : 'hide'}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logo: {
    margin: 12,
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.6,
    height: 44,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1c1c1c',
  },
  inputs: {
    fontSize: 18,
    color: '#1c1c1c',
    borderWidth: 2,
    borderColor: '#1c1d1d',
    borderRadius: 12,
    padding: 12,
    margin: 12,
  },
  passwordView: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 12,
    borderWidth: 2,
    borderColor: '#1c1d1d',
    borderRadius: 12,
    // padding: 24,
  },
  passwordInput: {
    // margin: 12,
    // flex: 1,
    // height: 100,
    fontSize: 18,
    padding: 12,
    color: '#000',
  },
  showButton: {
    width: 60,
    borderRadius: 8,
    backgroundColor: '#ddd',
    marginRight: 8,
    alignItems: 'center',
  },
  showButtonText: {
    color: '#000',
    padding: 4,
    margin: 4,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0248FF',
    color: '#eee',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    margin: 12,
  },

  buttonText: {
    color: '#eee',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default App;
