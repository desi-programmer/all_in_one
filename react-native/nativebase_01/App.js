
import React, { useState } from 'react';
import { 
  Center,
  Heading, 
  NativeBaseProvider,
  VStack,
  Button,
} from 'native-base';

// Color Switch Component
 
const App = () => {

  const [color, setcolor] = useState('#1c1c1c');

  function changeColor() {
    var colors = ['#BF3325', '#383CC1', '#120E43', '#03203C','#50DBB4', '#6EC72D', '#EDC126'];
    var randomnumber = Math.floor(Math.random() * (6 - 0 + 1)) + 0;

    setcolor(colors[randomnumber]);
  }

  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: 'blueGray.900' }}
        _light={{ bg: color }}
        px={4}
        flex={1}>
        <VStack space={5} alignItems="center">
          <Heading size="md" color={'white'}>A Simple Project</Heading>
          <Button _light={{ bg: color }} onPress={changeColor}>Change</Button>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};
export default App;
