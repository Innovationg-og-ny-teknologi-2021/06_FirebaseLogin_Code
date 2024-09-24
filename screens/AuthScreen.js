import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LoginForm from '../components/LogInComponent';
import SignUpForm from '../components/SignUpComponent';

export default function AuthScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.componentsBox}>
            <SignUpForm />
        </View>
        <View style={styles.componentsBox}>
            <LoginForm />
        </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  componentsBox: {
    width: '90%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
});