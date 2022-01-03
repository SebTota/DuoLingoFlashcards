import React, {useState} from 'react';
import {NativeBaseProvider, extendTheme, Text} from 'native-base';

import DuoLingoSignIn from './screens/DuoLingoSignIn';
import Flashcards from './screens/Flashcards';
import DuoLingoApi from './DuoLingoApi';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

const customTheme = extendTheme({config});

const App = () => {
  const [retrievedWords, setRetrievedWords] = useState(false);
  const [words, setWords] = useState([]);

  if (!retrievedWords) {
    const dl = new DuoLingoApi('', '');
    dl._login();
    dl._getVocabulary(w => {
      console.log('retrieved words');
      console.log(w);
      setWords(w);
      setRetrievedWords(true);
    });
  }

  function renderFlashcards() {
    console.log('rendering flashcards');
    console.log(words);
    return <Flashcards words={words} />;
  }

  return (
    <NativeBaseProvider theme={customTheme}>
      {retrievedWords ? renderFlashcards() : <Text>LOADING</Text>}
    </NativeBaseProvider>
  );
};

export default App;
