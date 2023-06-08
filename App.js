import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Button, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import Cabecalho from './src/componentes/Cabecalho';

export default function App() {
  return (

    <View style={styles.container}>
      <StatusBar style="auto" />

      <Cabecalho loja = "NOME DA LOJA" />
      
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
