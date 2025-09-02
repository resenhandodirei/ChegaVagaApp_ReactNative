import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

export default function DetalhesVagaScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Fotos do local */}
      <Image
        source={{ uri: "https://via.placeholder.com/400x200" }}
        style={styles.image}
      />

      {/* Nome e endereço */}
      <Text style={styles.title}>Estacionamento Central</Text>
      <Text style={styles.address}>Av. Paulista, 1234 - São Paulo, SP</Text>

      {/* Preço e horário */}
      <Text style={styles.price}>💲 R$ 8,00 por hora</Text>
      <Text style={styles.hours}>⏰ Aberto: 06h - 22h</Text>

      {/* Avaliações */}
      <Text style={styles.sectionTitle}>⭐ Avaliações</Text>
      <Text>- "Ótimo atendimento!"</Text>
      <Text>- "Local seguro e bem iluminado."</Text>

      {/* Botão Reservar */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Reservar Vaga</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "#fff" },
  image: { width: "100%", height: 200, borderRadius: 8, marginBottom: 15 },
  title: { fontSize: 22, fontWeight: "bold" },
  address: { fontSize: 16, color: "gray", marginBottom: 10 },
  price: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
  hours: { fontSize: 16, marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  button: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
