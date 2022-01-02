import React from 'react';
import {Center} from 'native-base';
import {StyleSheet} from 'react-native';
import Flashcard from '../components/Flashcard';

const Flashcards = () => {
  return (
    <Center flex={1} _dark={{bg: 'coolGray.800'}} _light={{bg: 'warmGray.50'}}>
      <Flashcard />
    </Center>
  );
};

export default Flashcards;

const styles = StyleSheet.create({});
