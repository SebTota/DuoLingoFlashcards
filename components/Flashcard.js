import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Heading, Box} from 'native-base';

const Flashcard = () => {
  this.state = {
    language: 'fr',
    word: 'Bonjour',
    translation: 'Good Morning',
    translationLanguage: 'en',
  };

  const [flashcardText, setFlashcardText] = useState(this.state.word);

  function flipFlashcard() {
    if (flashcardText === this.state.word) {
      setFlashcardText(this.state.translation);
    } else {
      setFlashcardText(this.state.word);
    }
  }

  return (
    <Box
      shadow="2"
      rounded="lg"
      w="90%"
      h={{base: '64', md: '80', lg: 'md'}}
      _light={{bg: 'coolGray.50'}}
      _dark={{bg: 'gray.700'}}
      style={{justifyContent: 'center'}}
      onStartShouldSetResponder={() => flipFlashcard()}>
      <Heading
        fontSize="2xl"
        fontWeight="700"
        textAlign="center"
        onPress={() => {
          flipFlashcard();
        }}>
        {flashcardText}
      </Heading>
    </Box>
  );
};

export default Flashcard;

const styles = StyleSheet.create({});
