import React from 'react';
import {
  Heading,
  Button,
  Center,
  Text,
  Input,
  NativeBaseProvider,
  extendTheme,
} from 'native-base';

this.state = {
  dlUsername: '',
};

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

const customTheme = extendTheme({config});

function AppSignIn() {
  return (
    <Center flex={1} _dark={{bg: 'coolGray.800'}} _light={{bg: 'warmGray.50'}}>
      <Heading textAlign="center" mb="15">
        DuoLingo Flashcards
      </Heading>
      <Text fontSize="lg" display="flex" mb="5">
        Enter your DuoLingo username
      </Text>
      <Input
        placeholder="Username"
        isFullWidth="true"
        size="lg"
        mb="5"
        onChangeText={r => {
          this.state.dlUsername = r;
        }}
      />
      <Button
        onPress={() => {
          console.log(this.state.dlUsername);
        }}>
        Start Learning
      </Button>
    </Center>
  );
}

const App = () => {
  return (
    <NativeBaseProvider theme={customTheme}>
      <AppSignIn />
    </NativeBaseProvider>
  );
};

export default App;
