// HomeScreen.tsx
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons";

export default function ExplorarVagasScreen() {
  const [region, setRegion] = useState(null);
  const [location, setLocation] = useState(null);
  const [showFilter, setShowFilter] = useState(false);

  // Exemplo de vagas (mock)
  const vagas = [
    {
      id: 1,
      latitude: -3.7319,
      longitude: -38.5267,
      titulo: "Vaga Coberta",
      preco: "R$ 5,00/h",
    },
    {
      id: 2,
      latitude: -3.7339,
      longitude: -38.5287,
      titulo: "Vaga Descoberta",
      preco: "R$ 3,00/h",
    },
  ];

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permissão negada para acessar localização.");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = currentLocation.coords;

      setLocation({ latitude, longitude });
      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  const centralizarLocalizacao = async () => {
    let currentLocation = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = currentLocation.coords;

    setRegion({
      latitude,
      longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };

  return (
    <View style={styles.container}>
      {region ? (
        <MapView style={styles.map} region={region} showsUserLocation>
          {vagas.map((vaga) => (
            <Marker
              key={vaga.id}
              coordinate={{
                latitude: vaga.latitude,
                longitude: vaga.longitude,
              }}
              title={vaga.titulo}
              description={vaga.preco}
            />
          ))}
        </MapView>
      ) : (
        <Text style={styles.loading}>Carregando mapa...</Text>
      )}

      {/* Botão de centralizar */}
      <TouchableOpacity
        style={styles.locateButton}
        onPress={centralizarLocalizacao}
      >
        <Ionicons name="locate" size={28} color="white" />
      </TouchableOpacity>

      {/* Botão de filtro */}
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => setShowFilter(true)}
      >
        <Ionicons name="options" size={28} color="white" />
      </TouchableOpacity>

      {/* Modal de filtro */}
      <Modal visible={showFilter} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Filtros</Text>
            <Button title="Preço" onPress={() => alert("Filtro por preço")} />
            <Button title="Distância" onPress={() => alert("Filtro por distância")} />
            <Button title="Coberto/Descoberto" onPress={() => alert("Filtro por tipo")} />
            <Button title="Fechar" onPress={() => setShowFilter(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  loading: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
  },
  locateButton: {
    position: "absolute",
    bottom: 100,
    right: 20,
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 50,
    elevation: 5,
  },
  filterButton: {
    position: "absolute",
    bottom: 40,
    right: 20,
    backgroundColor: "#28A745",
    padding: 12,
    borderRadius: 50,
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
