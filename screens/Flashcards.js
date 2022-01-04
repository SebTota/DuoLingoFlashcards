import React, {useState, useEffect} from 'react';
import {Center, Button, Progress, Heading, Box} from 'native-base';
import {StyleSheet, SafeAreaView} from 'react-native';
import Flashcard from '../components/Flashcard';

const Flashcards = ({translations}) => {
  let words = [];
  for (const [key, value] of Object.entries(translations)) {
    words.push(key);
  }

  const [progress, setProgress] = useState(0);
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardWord, setFlashcardWord] = useState(words[flashcardIndex]);
  const [flashcardTranslation, setFlashcardTranslation] = useState(
    translations[flashcardWord],
  );

  function goBackAWord() {
    flashcardIndex > 0 ? setFlashcardIndex(flashcardIndex - 1) : null;
  }

  function goToNextWord() {
    flashcardIndex < words.length - 1
      ? setFlashcardIndex(flashcardIndex + 1)
      : null;
  }

  /*
   * Update the flashcard word and translation word state when the index has changed
   */
  useEffect(() => {
    setFlashcardWord(words[flashcardIndex]);
    setProgress(((flashcardIndex + 1) / words.length) * 100);
  }, [flashcardIndex]);

  useEffect(() => {
    setFlashcardTranslation(translations[flashcardWord].join(', '));
  }, [flashcardWord]);

  return (
    <Box h="full">
      <Heading bold color="coolGray.50" top="0" m="4">
        French
      </Heading>
      <Center
        flex={1}
        _dark={{bg: 'coolGray.800'}}
        _light={{bg: 'warmGray.50'}}
        mt="-4">
        <Flashcard word={flashcardWord} translation={flashcardTranslation} />
        <Button.Group
          colorScheme="blue"
          mt="5"
          mx={{
            base: 'auto',
            md: 0,
          }}
          size="sm">
          <Button
            width="23%"
            height="60px"
            _text={{fontSize: 'md'}}
            onPress={() => {
              goBackAWord();
            }}>
            Back
          </Button>
          <Button
            width="65%"
            height="60px"
            _text={{fontSize: 'md'}}
            onPress={() => {
              goToNextWord();
            }}>
            Next Card
          </Button>
        </Button.Group>
        <Progress mt="10" value={progress} height="10px" width="90%" />
      </Center>
    </Box>
  );
};

export default Flashcards;

const styles = StyleSheet.create({});
