import React from 'react';
import {StyleSheet} from 'react-native';
import {Heading, Box} from 'native-base';

const Flashcard = () => {
  this.state = {
    language: 'fr',
    word: 'Bonjour',
    translation: 'Good Morning',
    translationLanguage: 'en',
  };

  return (
    <Box
      shadow="2"
      rounded="lg"
      w="90%"
      h={{base: '64', md: '80', lg: 'md'}}
      _light={{bg: 'coolGray.50'}}
      _dark={{bg: 'gray.700'}}
      style={{justifyContent: 'center'}}>
      <Heading fontSize="2xl" fontWeight="700" textAlign="center">
        {this.state.word}
      </Heading>
    </Box>
  );
};

export default Flashcard;

const styles = StyleSheet.create({});
