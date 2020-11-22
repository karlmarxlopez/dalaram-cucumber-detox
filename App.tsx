import React, {useState} from 'react';
import {Text, Button, SafeAreaView, StyleSheet, TextInput} from 'react-native';

const App = () => {
  const [showHello, setShowHello] = useState(false);
  const [showWorld, setShowWorld] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [name, setName] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text accessibilityLabel="welcome" style={styles.welcomeText}>
        Welcome to Detox + Cucumber
      </Text>
      {showHello ? <Text>Hello!</Text> : null}
      {showWorld ? <Text>World!</Text> : null}
      <Button
        testID="hello_button"
        title="Hello"
        onPress={() => setShowHello((prev) => !prev)}
      />
      <Button
        testID="world_button"
        title="World"
        onPress={() => setShowWorld((prev) => !prev)}
      />
      <TextInput
        testID="fullNameInput"
        accessibilityLabel="Full name input"
        placeholderTextColor="white"
        onChangeText={setName}
        style={{
          color: 'white',
        }}
        placeholder="Your name here"
      />
      <Button
        title="Greet"
        accessibilityLabel="Greet button"
        onPress={() => setShowGreeting((prev) => !prev)}
      />
      {showGreeting ? (
        <Text style={{color: 'white'}}>Hello, {name}!</Text>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#010101',
  },
  welcomeText: {fontSize: 20, fontWeight: '800', color: 'white'},
});

export default App;
