// app/index.tsx
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function Tarjeta({
  texto,
  activo,
  onPress,
}: {
  texto: string;
  activo: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.card, { backgroundColor: activo ? "#264653" : "#9a9a9a" }]}
    >
      <Text style={styles.cardText} numberOfLines={1} adjustsFontSizeToFit>
        {texto}
      </Text>
    </Pressable>
  );
}

export default function HomeScreen() {
  const data = ["Tarjeta 1", "Tarjeta 2", "Tarjeta 3"];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  return (
    <View style={styles.screen}>
      <View style={styles.cardsWrapper}>
        {data.map((item, i) => (
          <Tarjeta
            key={i}
            texto={item}
            activo={selectedIndex === i}
            onPress={() => setSelectedIndex(i)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  cardsWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    width: "70%",
    height: 80,
    marginVertical: 12,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center"
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  },
});
