
import React from 'react';
import {
  Text,
  HStack,
  Center,
  Heading,
  NativeBaseProvider,
  VStack,
  Button,
  extendTheme,
  Input,
  Stack,
  FormControl,
  Image,
  useDisclose,
  Actionsheet,
  Box,
} from 'native-base';
// import WarningOutlineIcon from 'icons';


import Home from './src/screens/Home';
import Login from './src/screens/Login';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const App = () => {

  const theme = extendTheme({
    fontConfig: {
      SourceSansPro: {
        100: {
          normal: 'SourceSansPro-Light',
          italic: 'SourceSansPro-LightItalic',
        },
        200: {
          normal: 'SourceSansPro-Light',
          italic: 'SourceSansPro-LightItalic',
        },
        300: {
          normal: 'SourceSansPro-Light',
          italic: 'SourceSansPro-LightItalic',
        },
        400: {
          normal: 'SourceSansPro-Regular',
          italic: 'Roboto-Italic',
        },
        500: {
          normal: 'SourceSansPro-SemiBold',
        },
        600: {
          normal: 'SourceSansPro-SemiBold',
          italic: 'Roboto-MediumItalic',
        },
        // Add more variants
        700: {
          normal: 'SourceSansPro-SemiBold',
        },
        800: {
          normal: 'SourceSansPro-Bold',
        },
        900: {
          normal: 'SourceSansPro-Black',
        },
      },
    },

    // Make sure values below matches any of the keys in `fontConfig`
    fonts: {
      heading: 'SourceSansPro',
      body: 'SourceSansPro',
      mono: 'SourceSansPro',
    },

    colors: {
      // Add new color
      primary: {
        50: '#eae6f8',
        100: '#d6cef1',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#330DB9',
        500: '#330DB9',
        600: '#007AB8',
        700: '#260a89',
        800: '#260a89',
        900: '#1f0872',
      },
      // Redefinig only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
  });




  const Stack = createStackNavigator();



  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>

          <Stack.Screen
            name='Home'
            component={Home}
           options={{
             headerShown: false,
           }}
            // options={{
            //   headerStyle: {
            //     backgroundColor: "#0F4C75"
            //   },
            //   title: "Home",
            //   headerTitleStyle: {
            //     fontSize: 18,
            //     color : "#eeffee"
            //   }
            // }}
          >

          </Stack.Screen>
          <Stack.Screen
            name='Login'
            component={Login}
            options={{
              headerStyle: {
                backgroundColor: "0F4C75"
              },
              title: "Login",
              headerTitleStyle: {
                fontSize: '12',
              }
            }}
          >

          </Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
