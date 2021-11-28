/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  Appbar,
  Button,
  DefaultTheme,
  Divider,
  Provider as PaperProvider,
  Snackbar,
  TextInput,
} from 'react-native-paper';
import CustomDivider from './src/divider';
import CustomDialog from './src/dialog';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [visible, setVisible] = React.useState(false);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <PaperProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          backgroundColor={DefaultTheme.colors.primary}
          barStyle={DefaultTheme.dark ? 'dark-content' : 'light-content'}
        />
        <Appbar.Header>
          <Appbar.BackAction onPress={() => {}} />
          <Appbar.Content title="Login" />
          <Appbar.Action icon="magnify" onPress={() => {}} />
          <Appbar.Action icon="dots-vertical" onPress={() => {}} />
        </Appbar.Header>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <CustomDivider />
          <Text style={styles.sectionTitle}>Login Form</Text>
          <View style={styles.sectionContainer}>
            <TextInput
              label="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
              // value={text}
              // onChangeText={text => setText(text)}
            />
            <CustomDivider />
            <TextInput
              label="Phone Number"
              keyboardType="phone-pad"
              textContentType="telephoneNumber"
              // value={text}
              // onChangeText={text => setText(text)}
            />
            <CustomDivider />
            <TextInput
              label="Password"
              keyboardType="visible-password"
              textContentType="password"
              secureTextEntry
              right={<TextInput.Icon name="eye" />}
              // value={text}
              // onChangeText={text => setText(text)}
            />
            <CustomDivider />
            <Button
              labelStyle={styles.login}
              // disabled={true}
              uppercase={false}
              mode="contained"
              onPress={() => {}}>
              Login
            </Button>
          </View>
          <CustomDivider />
          <View style={styles.sectionContainer}>
            <Button
              labelStyle={styles.login}
              uppercase={false}
              mode="contained"
              onPress={() => {
                setVisible(true);
              }}>
              Snackbar
            </Button>
            <CustomDivider />
            <Button
              labelStyle={styles.login}
              uppercase={false}
              mode="contained"
              onPress={() => {}}>
              Alert
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
      <CustomDialog />
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        Hey there! I'm a Snackbar.
      </Snackbar>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    padding: 24,
    backgroundColor: '#ddd',
  },
  login: {
    fontSize: 20,
  },
  sectionTitle: {
    fontSize: 28,
    color: DefaultTheme.colors.primary,
    textAlign: 'center',
    fontWeight: '800',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
