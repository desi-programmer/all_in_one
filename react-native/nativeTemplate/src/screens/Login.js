
import React from 'react';
import {
    Button,
    Center,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    VStack
} from 'native-base'

 
const Home = () => {

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
    );
}

export default Home