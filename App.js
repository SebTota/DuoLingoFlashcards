import React from 'react';
import {NativeBaseProvider, extendTheme} from 'native-base';

import DuoLingoSignIn from './screens/DuoLingoSignIn';
import Flashcards from './screens/Flashcards';

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
