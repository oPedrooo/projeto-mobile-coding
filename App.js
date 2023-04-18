import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Header com a logo da loja e ícones */}
      <View style={styles.header}> 

        <View style={styles.HparteDeCima}>
          {/* Caixa com "menu" e logo */}
          <View style={styles.clogo}>
            <Ionicons style={styles.imenu} name="menu" size={35} color="black" />
            <Text style={styles.Ltexto} >LOGO DA LOJA</Text>
          </View>
          {/* Caixa com ícones de pesquisa e carrinho */}
          <View style={styles.cicones}>
            <Ionicons style={styles.ilupa} name="search" size={30} color="black" />
            <Ionicons style={styles.icarrinho} name="cart" size={30} color="black" />
          </View>  
        </View>
        
        {/* Parte de baixo da Header com os atalhos diferentes tipos de produtos */}
        <View style={styles.HparteDeBaixo}>
          <Text style={styles.atalhoHigh}>Novos lançamentos</Text>
          <Text>Camisas</Text>
          <Text>Calças</Text>
          <Text>Bolsas</Text>
          <Text>Sapatos</Text>
        </View>
      </View>

      {/* Corpo do app */}
      <View style={styles.body}>
        {/*<ScrollView>
          <View>
            <Text style={styles.textoCorpo}>NOVOS LANÇAMENTOS</Text>
            <Ionicons  />
          </View>
          
  </ScrollView>   */}
      </View>

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
    flexDirection: 'column',
  },
  HparteDeCima: {
    flex:3,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  HparteDeBaixo: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  clogo: {
    flex:4,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 23,
  },
  Ltexto: {
    fontSize: 25,
    
    marginTop: 3,
  },
  cicones: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 23,
    justifyContent: 'space-around'
  },
  atalhoHigh: {
    backgroundColor: 'grey',
  },



  body: {
    flex: 7,
    backgroundColor: "white",
  },
  textoCorpo: {
    fontSize: 30,
  },
});
