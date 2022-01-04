import React, {useState} from 'react';
import {NativeBaseProvider, extendTheme, Text, Box} from 'native-base';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';

import DuoLingoSignIn from './screens/DuoLingoSignIn';
import Flashcards from './screens/Flashcards';
import DuoLingoApi from './DuoLingoApi';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

const customTheme = extendTheme({config});

const App = () => {
  const [retrievedState, setRetrievedState] = useState(true);

  async function getCredentials() {
    try {
      const session = await EncryptedStorage.getItem('dlCredentials');
      console.log(session);
      if (session !== undefined) {
        return JSON.parse(session);
      }
    } catch (error) {
      console.log('error retrieving credentials');
      console.log(error);
    }
  }

  // if (!retrievedState) {
  //   getCredentials().then(credentials => {
  //     console.log(credentials);
  //     this.dl = new DuoLingoApi(credentials.username, credentials.password);
  //     this.dl.work(() => {
  //       console.log('callback retrieved');
  //       setRetrievedState(true);
  //     });
  //   });
  // }

  let renderFlashcards = () => {
    // return <Flashcards translations={this.dl.getTranslations()} />;
    const translations = {
      'au revoir': ['goodbye'],
      bien: ['well', 'good', 'much', 'properly', 'really', 'way'],
      bienvenue: ['welcome'],
      bonjour: ['hello', 'good morning', 'regards'],
      'bonne journée': ['have a good day'],
      "c'est": [
        "he's",
        "it's",
        'he is',
        'she is',
        'this is',
        'it is',
        "that's",
      ],
      chat: ['cat'],
      cheval: ['horse'],
      chien: ['dog'],
      comment: ['how', 'what'],
      croissant: ['croissant'],
      es: ['are', 'feel'],
      et: ['and'],
      femme: ['woman'],
      fille: ['girl'],
      garçon: ['boy'],
      homme: ['man'],
      je: ['I', 'me'],
      mange: ['eat', 'am eating', 'eating', 'eats', 'is eating'],
      manges: ['eat', 'are eating', 'eating'],
      merci: ['thanks', 'thank you'],
      orange: ['orange'],
      oui: ['yes'],
      pizza: ['pizza'],
      salut: ['bye', 'hi', 'hello'],
      suis: ['am following', 'are following', 'am', 'follow', 'following'],
      toi: ['you', 'yourself'],
      très: ['very'],
      tu: ['you'],
      un: ['a', 'an', 'any', 'one'],
      une: ['a', 'an', 'one', 'any', 'some'],
      'à bientôt': ['see you soon'],
      'ça va': ['how are you?', 'I am fine'],
    };
    return <Flashcards translations={translations} />;
  };

  let renderLoadingScreen = () => {
    return <Text>LOADING</Text>;
  };

  return (
    <NativeBaseProvider theme={customTheme}>
      <Box
        height="100%"
        width="100%"
        _dark={{bg: 'coolGray.800'}}
        _light={{bg: 'warmGray.50'}}>
        <SafeAreaView>
          {retrievedState ? renderFlashcards() : renderLoadingScreen()}
        </SafeAreaView>
      </Box>
    </NativeBaseProvider>
  );
};

export default App;
