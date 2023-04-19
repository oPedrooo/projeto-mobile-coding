import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Button, Alert } from 'react-native';
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
          <Text style={styles.corTexto}>Camisas</Text>
          <Text style={styles.corTexto}>Calças</Text>
          <Text style={styles.corTexto}>Bolsas</Text>
          <Text style={styles.corTexto}>Sapatos</Text>
        </View>
      </View>

      {/* Corpo do app */}
      <View style={styles.body}>

        {/* Comando ScrollView para permitir interação com essa parte do app */}
        <ScrollView>

          {/* Titulo da aba selecionada */}
          <View style={styles.cTituloAba}>
            <Text style={styles.textoCorpo}>NOVOS LANÇAMENTOS</Text>
          </View>

          {/* Lista de produtos disponíveis */}
          <View style={styles.listadePro}>
            
            {/* Coluna 1 */}
            <View style={styles.colunas}>

              <View style={styles.produtos}>
                <View style={styles.iProdutos}>
                  <Ionicons name="shirt" size={32} color="black" />
                </View>
                <Button
                  style={styles.tProduto}
                  title="Produto 001"
                  onPress={() => Alert.alert('Produto indisponível')}
                />
                <Text style={styles.tProduto} >$00,00</Text>
              </View>

              <View style={styles.produtos}>
                <View style={styles.iProdutos}>
                  <Ionicons name="shirt" size={32} color="black" />
                </View>
                <Button
                  style={styles.tProduto}
                  title="Produto 002"
                  onPress={() => Alert.alert('Produto indisponível')}
                />
                <Text>$00,00</Text>
              </View>

            </View>
            
            {/* Coluna 2 */}
            <View style={styles.colunas}>

              <View style={styles.produtos}>
                <View style={styles.iProdutos}>
                  <Ionicons name="shirt" size={32} color="black" />
                </View>
                <Button
                  style={styles.tProduto}
                  title="Produto 003"
                  onPress={() => Alert.alert('Produto indisponível')}
                />
                <Text style={styles.tProduto} >$00,00</Text>
              </View>

              <View style={styles.produtos}>
                <View style={styles.iProdutos}>
                  <Ionicons name="shirt" size={32} color="black" />
                </View>
                <Button
                  style={styles.tProduto}
                  title="Produto 004"
                  onPress={() => Alert.alert('Produto indisponível')}
                />
                <Text>$00,00</Text>
              </View>

            </View>

            {/* Coluna 3 */}
            <View style={styles.colunas}>

              <View style={styles.produtos}>
                <View style={styles.iProdutos}>
                  <Ionicons name="shirt" size={32} color="black" />
                </View>
                <Button
                  style={styles.tProduto}
                  title="Produto 005"
                  onPress={() => Alert.alert('Produto indisponível')}
                />
                <Text style={styles.tProduto} >$00,00</Text>
              </View>

              <View style={styles.produtos}>
                <View style={styles.iProdutos}>
                  <Ionicons name="shirt" size={32} color="black" />
                </View>
                <Button
                  style={styles.tProduto}
                  title="Produto 006"
                  onPress={() => Alert.alert('Produto indisponível')}
                />
                <Text>$00,00</Text>
              </View>

            </View>

          </View>
          
        </ScrollView>   
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
  corTexto: {
    color: '#c7c8c1',
  },
  atalhoHigh: {
    backgroundColor: '#456789',
    color: '#c7c8c1',
  },



  body: {
    flex: 7,
    backgroundColor: "white",
  },
  cTituloAba: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 10,
  },
  textoCorpo: {
    flex: 2,
    fontSize: 40,
    color: '#456789',
    fontWeight: '500',
  },
  listadePro: {
    marginLeft: 4,
    marginRight: 4,
  },
  colunas: {
    flexDirection: 'row',
  },
  produtos: {
    flex: 1,
    margin: 4,
    alignItems: 'center',
  },
  iProdutos: {
    backgroundColor: '#456789',
    alignItems: 'center',
    padding: 80,
    borderRadius: 10,
  },
  tProduto: {
    fontSize: 16,
  },
});
