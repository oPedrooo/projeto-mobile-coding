import React from "react"
import { StyleSheet, Text, View, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

/* Cabecalho com a logo da loja, ícones e barra de nav */
export default function Cabecalho(props) {
    return (
      <View style={styles.Cabecalho}>
        <View style={styles.cParteDeCima}>
          {/* Caixa com "Logo" e nome da loja */}
          <View style={styles.cLogo}>
            <Ionicons style={styles.iLogo} name="square-outline" size={35} color="black" />
            <Text style={styles.Ltexto} >{props.loja}</Text>
          </View>
          {/* Caixa com ícones de pesquisa e carrinho */}
          <View style={styles.cIcones}>
            <Ionicons style={styles.iCarrinho} name="cart" size={30} color="black" />
          </View>  
        </View>
        
        {/* Parte de baixo do Cabecalho com os atalhos diferentes tipos de produtos */}
        <View style={styles.cParteDeBaixo}>
          <Text style={styles.atalhoHigh}>Novos lançamentos</Text>
          <Text style={styles.corTexto}>Camisas</Text>
          <Text style={styles.corTexto}>Calças</Text>
          <Text style={styles.corTexto}>Bolsas</Text>
          <Text style={styles.corTexto}>Sapatos</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    Cabecalho: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: 'column',
      },
      cParteDeCima: {
        flex:3,
        backgroundColor: 'white',
        flexDirection: 'row'
      },
      cParteDeBaixo: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      cLogo: {
        flex:4,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 23,
        marginLeft: 10,
      },
      Ltexto: {
        fontSize: 25,
        marginTop: 3,
      },
      cIcones: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 23,
        justifyContent: 'flex-end',
        marginRight: 10,
      },
      corTexto: {
        color: '#c7c8c1',
      },
      atalhoHigh: {
        backgroundColor: '#456789',
        color: '#c7c8c1',
      },
})