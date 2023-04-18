import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.header}>
        <View style={styles.clogo}>
          <Ionicons style={styles.imenu} name="menu" size={35} color="black" />
          <Text style={styles.Ltexto} >LOGO DA LOJA</Text>
        </View>
        <View style={styles.cicones}>
          <Ionicons style={styles.ilupa} name="search" size={30} color="black" />
          <Ionicons style={styles.icarrinho} name="cart" size={30} color="black" />
        </View>
      </View>

      <View style={styles.body} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },



  header: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: 'row',
  },
  clogo: {
    flex:4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Ltexto: {
    fontSize: 25
  },
  cicones: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },



  body: {
    flex: 8,
    backgroundColor: "grey",
  },
});
