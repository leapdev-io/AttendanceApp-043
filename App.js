import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.warnaMerah} />
      <View style={styles.warnaBiru} />
      <View style={styles.warnaHijau} />
      <View style={styles.warnaOren} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    flexDirection: "row",
  },

  warnaMerah: {
    width: 40,
    height: 20,
    backgroundColor: "red",
  },

  warnaBiru: {
    width: 120,
    height: 70,
    backgroundColor: "blue",
  },

  warnaHijau: {
    width: 120,
    height: 100,
    backgroundColor: "green",
  },

  warnaOren: {
    width: 120,
    height: 150,
    backgroundColor: "orange",
  },
});
