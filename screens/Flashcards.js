import React, {useState, useEffect} from 'react';
import {Center, Button, Progress} from 'native-base';
import {StyleSheet} from 'react-native';
import Flashcard from '../components/Flashcard';

const Flashcards = ({words}) => {
  let language = 'fr';
  // let words = ['Oui!', 'Bonjour', 'Merci'];
  let translations = ['Yes', 'Good Morning', 'Thank You'];
  const [progress, setProgress] = useState(0);
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardWord, setFlashcardWord] = useState(words[flashcardIndex]);
  const [flashcardTranslation, setFlashcardTranslation] = useState(
    translations[flashcardIndex],
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
    setFlashcardTranslation(translations[flashcardIndex]);
    setProgress(((flashcardIndex + 1) / words.length) * 100);
  }, [flashcardIndex]);

  return (
    <Center flex={1} _dark={{bg: 'coolGray.800'}} _light={{bg: 'warmGray.50'}}>
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
          width="45%"
          height="60px"
          _text={{fontSize: 'md'}}
          onPress={() => {
            goBackAWord();
          }}>
          Previous Card
        </Button>
        <Button
          width="45%"
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
  );
};

export default Flashcards;

const styles = StyleSheet.create({});
