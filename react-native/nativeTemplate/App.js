
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

  function Example() {
    const {
      isOpen,
      onOpen,
      onClose
    } = useDisclose();
    return <Center>
      <Button onPress={onOpen}>Actionsheet</Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="16" color="gray.500" _dark={{
              color: "gray.300"
            }}>
              Albums
            </Text>
          </Box>
          <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item>Share</Actionsheet.Item>
          <Actionsheet.Item>Play</Actionsheet.Item>
          <Actionsheet.Item>Favourite</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>;
  }
  return (

    <NativeBaseProvider theme={theme}>
      <Center
        flex={1}>
        <Stack w={"100%"} p={'4'} space={4}>
          <VStack alignItems='center'>
            <Image size={200} resizeMode={"contain"} borderRadius={100} source={{
              uri: "https://assets.graphy.com/images/2021-03-13/0555551d-0d29-4e81-9f29-0d1aad7d9474.jpeg"
            }} alt="Logo" />
          </VStack>
          <Heading size="xl" fontWeight={700}>Welcome Back</Heading>
          <VStack >
            <Input size="2xl" placeholder="Username" />
          </VStack>
          <Input size="2xl" placeholder="Password" />
          <Button size={"lg"} paddingY={12}>Login</Button>
          <HStack space={2} alignItems="center">
            <Text>Forgot Password ?</Text>
            <Text color="primary.700">Reset Now</Text>
          </HStack>
        </Stack> 

<Example />
      </Center>
    </NativeBaseProvider>
  );
};
export default App;
