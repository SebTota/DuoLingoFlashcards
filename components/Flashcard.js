import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Heading, Box, Button, Icon} from 'native-base';
import {Path, G} from 'react-native-svg';

const Flashcard = ({word, translation}) => {
  const [flashcardText, setFlashcardText] = useState(word);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);

  function flipFlashcard() {
    if (flashcardText === word) {
      setFlashcardText(translation);
      setFlashcardFlipped(true);
    } else {
      setFlashcardText(word);
      setFlashcardFlipped(false);
    }
  }

  function resetFlashcardText() {
    setFlashcardText(word);
    setFlashcardFlipped(false);
  }

  useEffect(resetFlashcardText, [word]);

  return (
    <Box
      shadow="2"
      rounded="lg"
      w="90%"
      h="60%"
      _light={{bg: 'coolGray.50'}}
      _dark={{bg: 'gray.700'}}
      style={{justifyContent: 'center'}}
      onStartShouldSetResponder={() => flipFlashcard()}>
      <Heading
        fontSize="2xl"
        fontWeight="700"
        textAlign="center"
        margin="10px"
        onPress={() => {
          flipFlashcard();
        }}>
        {flashcardText}
      </Heading>
      {!flashcardFlipped ? (
        <Button
          bold
          position="absolute"
          color="coolGray.50"
          bottom="5"
          right="5">
          <Icon viewBox="0 0 122.88 92.19">
            <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
              <Path
                d="M78.37 9.74c-1.81 0-3.29-1.47-3.29-3.29 0-1.81 1.47-3.29 3.29-3.29 12.29 0 23.42 4.98 31.47 13.04 8.06 8.06 13.04 19.18 13.04 31.47s-4.98 23.42-13.04 31.47c-8.06 8.06-19.18 13.04-31.47 13.04-1.81 0-3.29-1.47-3.29-3.29s1.47-3.29 3.29-3.29c10.48 0 19.96-4.25 26.83-11.11 6.87-6.87 11.11-16.35 11.11-26.83s-4.25-19.96-11.11-26.83C98.33 13.98 88.84 9.74 78.37 9.74zm-67.9 12.02h24.27L55.4.97a3.271 3.271 0 014.63-.01c.65.63.97 1.47.97 2.32h.01v85.49c0 1.81-1.47 3.29-3.29 3.29-.92 0-1.75-.38-2.35-.99L34.91 73.81H10.47c-2.88 0-5.5-1.18-7.39-3.07C1.18 68.85 0 66.23 0 63.35V32.23c0-2.88 1.18-5.5 3.07-7.39 1.9-1.9 4.52-3.08 7.4-3.08zm25.62 6.57H10.47c-1.07 0-2.04.44-2.75 1.15s-1.15 1.68-1.15 2.75v31.12c0 1.07.44 2.04 1.15 2.75s1.68 1.15 2.75 1.15h25.62v.02c.74 0 1.49.25 2.1.77l16.25 13.69v-70.5L38.59 27.18c-.61.71-1.5 1.15-2.5 1.15zm40.62.19c-1.5 0-2.72-1.22-2.72-2.72 0-1.5 1.22-2.72 2.72-2.72 6.98 0 13.3 2.83 17.87 7.4s7.4 10.89 7.4 17.87-2.83 13.3-7.4 17.87a25.197 25.197 0 01-17.87 7.4c-1.5 0-2.72-1.22-2.72-2.72 0-1.5 1.22-2.72 2.72-2.72 5.48 0 10.44-2.22 14.03-5.81 3.59-3.59 5.81-8.55 5.81-14.03 0-5.48-2.22-10.44-5.81-14.03-3.6-3.57-8.56-5.79-14.03-5.79z"
                fill="black"
              />
            </G>
          </Icon>
        </Button>
      ) : (
        ''
      )}
    </Box>
  );
};

export default Flashcard;

const styles = StyleSheet.create({});
