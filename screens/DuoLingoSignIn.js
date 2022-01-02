import React from 'react';
import {Heading, Button, Center, Text, Input} from 'native-base';

const DuoLingoSignIn = () => {
  this.state = {
    dlUsername: '',
  };

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
      <Button
        onPress={() => {
          console.log(this.state.dlUsername);
        }}>
        Start Learning
      </Button>
    </Center>
  );
};

export default DuoLingoSignIn;
