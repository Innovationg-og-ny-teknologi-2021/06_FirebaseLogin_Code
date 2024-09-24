import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { getAuth, signOut } from "firebase/auth";

export default function MainScreen() {
    const auth = getAuth();
    const user = auth.currentUser
    //handleLogout håndterer log ud af en aktiv bruger.
    //Metoden er en prædefineret metode, som firebase stiller tilrådighed  https://firebase.google.com/docs/auth/web/password-auth#next_steps
    //Metoden er et asynkrontkald.
    const handleLogOut = async () => {
        await signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    };

    //Hvis der af en eller anden grund ikke skulle være muligt at fremfinde den aktive bruger,
    //skal der udprintes en besked om dette igennem en tekstkomponent
    if (!auth.currentUser) {
        return <View><Text>Not found</Text></View>;
    }

    //I return() udnyttes en prædefineret metode, som firebase stiller til rådighed.
    // Metoden returnerer mailadressen af den aktive bruger.
    // Mailadressen udskrives ved brug af en tekstkomponent.
    return (
        <View style={styles.container} >
            <Text>Current user: {user.email}</Text>
            <Button onPress={() => handleLogOut()} title="Log out" />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});