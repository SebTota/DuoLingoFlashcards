import React from 'react';
import {Heading, Button, Center, Text, Input} from 'native-base';
import EncryptedStorage from 'react-native-encrypted-storage';

const DuoLingoSignIn = () => {
  this.state = {
    dlUsername: '',
    dlPassword: '',
  };

  async function saveDuoLingoCredentials(username, password) {
    console.log('Saving DuoLingo credentials');
    try {
      await EncryptedStorage.setItem(
        'dlCredentials',
        JSON.stringify({
          username: username,
          password: password,
        }),
      );
    } catch (error) {
      console.log('Error saving Duo Lingo credentials');
      console.log(error);
    }
  }

  return (
    <Center flex={1} _dark={{bg: 'coolGray.800'}} _light={{bg: 'warmGray.50'}}>
      <Heading textAlign="center" mb="15">
        DuoLingo Flashcards
      </Heading>
      <Text fontSize="lg" display="flex" mb="5">
        Enter your DuoLingo username
      </Text>
      <Input
        placeholder="Username"
        isFullWidth="true"
        size="lg"
        mb="5"
        maxWidth="300px"
        onChangeText={r => {
          this.state.dlUsername = r;
        }}
      />
      <Input
        placeholder="Username"
        isFullWidth="true"
        size="lg"
        mb="5"
        maxWidth="300px"
        onChangeText={r => {
          this.state.dlPassword = r;
        }}
      />
      <Button
        onPress={() => {
          saveDuoLingoCredentials(this.state.dlUsername, this.state.dlPassword);
        }}>
        Start Learning
      </Button>
    </Center>
  );
};

export default DuoLingoSignIn;
