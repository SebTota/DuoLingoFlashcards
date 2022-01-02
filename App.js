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

import DuoLingoSignIn from './screens/DuoLingoSignIn';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

const customTheme = extendTheme({config});

const App = () => {
  return (
    <NativeBaseProvider theme={customTheme}>
      <DuoLingoSignIn />
    </NativeBaseProvider>
  );
};

export default App;
