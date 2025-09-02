import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function RegisterScreen() {
  // Dados pessoais
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Dados do veículo
  const [plate, setPlate] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");

  // Pagamento
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleRegister = () => {
    if (!name || !email || !phone || !plate || !model || !color || !paymentMethod) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    // Aqui você faria a integração com backend/API
    Alert.alert("Cadastro realizado!", `Bem-vindo ao ChegaVaga, ${name}!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro - ChegaVaga 🚗</Text>

      {/* Dados pessoais */}
      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      {/* Dados do veículo */}
      <TextInput
        style={styles.input}
        placeholder="Placa do veículo"
        value={plate}
        onChangeText={setPlate}
      />
      <TextInput
        style={styles.input}
        placeholder="Modelo"
        value={model}
        onChangeText={setModel}
      />
      <TextInput
        style={styles.input}
        placeholder="Cor"
        value={color}
        onChangeText={setColor}
      />

      {/* Métodos de pagamento */}
      <Text style={styles.subtitle}>Método de Pagamento</Text>
      <View style={styles.paymentContainer}>
        <TouchableOpacity
          style={[
            styles.paymentButton,
            paymentMethod === "cartao" && styles.selectedPayment,
          ]}
          onPress={() => setPaymentMethod("cartao")}
        >
          <Text style={styles.paymentText}>Cartão</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.paymentButton,
            paymentMethod === "pix" && styles.selectedPayment,
          ]}
          onPress={() => setPaymentMethod("pix")}
        >
          <Text style={styles.paymentText}>Pix</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.paymentButton,
            paymentMethod === "paypal" && styles.selectedPayment,
          ]}
          onPress={() => setPaymentMethod("paypal")}
        >
          <Text style={styles.paymentText}>PayPal</Text>
        </TouchableOpacity>
      </View>

      {/* Botão Cadastrar */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 20,
    textAlign: "center",
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
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#34495E",
  },
  paymentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  paymentButton: {
    flex: 1,
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#BDC3C7",
    alignItems: "center",
  },
  selectedPayment: {
    backgroundColor: "#3498DB",
    borderColor: "#2980B9",
  },
  paymentText: {
    color: "#2C3E50",
    fontWeight: "bold",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#27AE60",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
