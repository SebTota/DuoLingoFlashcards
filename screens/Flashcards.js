import React, {useState, useEffect} from 'react';
import {Center, Button} from 'native-base';
import {StyleSheet} from 'react-native';
import Flashcard from '../components/Flashcard';

const Flashcards = () => {
  let language = 'fr';
  let words = ['Oui', 'Bonjour'];
  let translations = ['Yes', 'Good Morning'];
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
  }, [flashcardIndex]);

  return (
    <Center flex={1} _dark={{bg: 'coolGray.800'}} _light={{bg: 'warmGray.50'}}>
      <Flashcard word={flashcardWord} translation={flashcardTranslation} />
      <Button
        mt="5"
        onPress={() => {
          goBackAWord();
        }}>
        Previous
      </Button>
      <Button
        mt="5"
        onPress={() => {
          goToNextWord();
        }}>
        Next
      </Button>
    </Center>
  );
};

export default Flashcards;

const styles = StyleSheet.create({});
