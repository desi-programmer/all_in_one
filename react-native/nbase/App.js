
import React from 'react';
import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Box,
  extendTheme,
  Button,
  Stack,
  Input,
  Icon,
  useToast,
  StatusBar,
} from 'native-base';

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
const App = () => {
  const [show, setShow] = React.useState(false);
  const email = React.useRef();

  const toast = useToast();

  const theme = extendTheme({
    fontConfig: {
      RobotoSlab: {
        100: {
          normal: 'RobotoSlab-Light',
          italic: 'RobotoSlab-LightItalic',
        },
        200: {
          normal: 'RobotoSlab-Light',
          italic: 'RobotoSlab-LightItalic',
        },
        300: {
          normal: 'RobotoSlab-Light',
          italic: 'RobotoSlab-LightItalic',
        },
        400: {
          normal: 'RobotoSlab-Regular',
          italic: 'RobotoSlab-Italic',
        },
        500: {
          normal: 'RobotoSlab-Medium',
        },
        600: {
          normal: 'RobotoSlab-Medium',
          italic: 'RobotoSlab-MediumItalic',
        },
        // Add more variants
        //   700: {
        //     normal: 'RobotoSlab-Bold',
        //   },
        //   800: {
        //     normal: 'RobotoSlab-Bold',
        //     italic: 'RobotoSlab-BoldItalic',
        //   },
        //   900: {
        //     normal: 'RobotoSlab-Bold',
        //     italic: 'RobotoSlab-BoldItalic',
        //   },
      },
    },

    // Make sure values below matches any of the keys in `fontConfig`
    fonts: {
      heading: 'RobotoSlab',
      body: 'RobotoSlab',
      mono: 'RobotoSlab',
    },
    colors: {
      // Add new color
      primary: {
        50: '#f5edfa',
        100: '#f5edfa',
        200: '#e2cbf0',
        300: '#a154ce',
        400: '#aa65d2',
        500: '#b376d7',
        600: '#bd87dc',
        700: '#c698e1',
        800: '#d0a9e6',
        900: '#d9baeb',
      },
      // Redefinig only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar backgroundColor='#1c1c1c' hidden={false} />
      <Center
        _dark={{ bg: 'blueGray.900' }}
        _light={{ bg: 'primary.50' }}
        px={4}
        flex={1}>
        <VStack space={5} alignItems="center">
          <Heading size="lg" fontWeight={600}>Native Base Starter</Heading>
          <Stack space={4}>
            <Input w='100%' placeholder='Email' p='3' fontSize={16} _light={{ fontSize: 16 }} ref={email}></Input>

            <Input w='100%' placeholder='Password' p='3' _light={{ fontSize: 16 }} type='password'></Input>

            <Button
              onPress={() => {
                toast.show({ description: "welcome User" });
                // toast.show({email.current.value});
              }}
              p='3'
              _light={{ bg: 'primary.400' }}>
              <Text
                color='white'
                fontSize={18}
                fontWeight='600'>Login
              </Text>
            </Button>
          </Stack>
          <ToggleDarkMode />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};
export default App;
