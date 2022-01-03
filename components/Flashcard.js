import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Heading, Box} from 'native-base';

const Flashcard = ({word, translation}) => {
  const [flashcardText, setFlashcardText] = useState(word);

  function flipFlashcard() {
    if (flashcardText === word) {
      setFlashcardText(translation);
    } else {
      setFlashcardText(word);
    }
  }

  function resetFlashcardText() {
    setFlashcardText(word);
  }

  useEffect(resetFlashcardText, [word]);

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
