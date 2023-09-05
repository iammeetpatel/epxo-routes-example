import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

export default function TabOneScreen() {
  return (

    <View style={styles.container}>
      <StatusBar translucent style='dark' />
      <Text style={styles.title}>Tab One1</Text>
      <Link href={'/(tabs)/three'}>
        <Text style={styles.title}>GO to Screen 3</Text>
      </Link>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFF1F8'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
