import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if(!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    } 
    Alert.alert('Success', `Logged in with email: ${email}`);
  }

  const handleRegister = () => {
    Alert.alert('Info', 'Registration feature is not implemented yet.');
  }

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.title}>
        ChegaVaga
      </Text>

      <Text style={styles.subtitle}>
        Encontre sua vaga em segundos
      </Text>


    <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={password}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="emailAddress"
        autoFocus
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Botão Login */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Criar Conta */}
      <TouchableOpacity style={styles.linkButton} onPress={handleRegister}>
        <Text style={styles.linkText}>Não tem conta? Criar agora</Text>
      </TouchableOpacity>

    </View>
    </>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#7F8C8D",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#BDC3C7",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#3498DB",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkButton: {
    marginTop: 15,
  },
  linkText: {
    color: "#3498DB",
    fontSize: 14,
  },
});
