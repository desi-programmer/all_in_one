
import React from 'react';
import {
    Box,
    Divider,
    HStack,
    IconButton,
    StatusBar,
    Text,
    VStack
} from 'native-base'


const Home = () => {
    return (
        <>
            <VStack width='100%'>
                <Box width={'100%'} safeAreaTop bg="#6200ee" />
            </VStack>
            <HStack bg="#6200ee" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
                <HStack alignItems="center">
                    {/* <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} /> */}
                    <Text color="white" fontSize="24" fontWeight="bold">
                        Home
                    </Text>
                </HStack>
                <HStack>
                    {/* <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
            <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
            <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} /> */}
                </HStack>
            </HStack>
            <Text>Welcome To Home</Text>
            <Box border="1" borderRadius="md">
                <VStack space="4" divider={<Divider />}>
                    <Box px="4" pt="4">
                        NativeBase
                    </Box>
                    <Box px="4">
                        NativeBase is a free and open source framework that enable developers
                        to build high-quality mobile apps using React Native iOS and Android
                        apps with a fusion of ES6.
                    </Box>
                    <Box px="4" pb="4">
                        GeekyAnts
                    </Box>
                </VStack>
            </Box>
        </>
    );
}

export default Home