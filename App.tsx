import React, {useState} from 'react';
import {Text, Button, SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  const [showHello, setShowHello] = useState(false);
  const [showWorld, setShowWorld] = useState(false);

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  welcomeText: {fontSize: 20, fontWeight: '800'},
});

export default App;
