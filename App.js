import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Navbar from "./components/Navbar";
import { SafeAreaView } from "react-native-safe-area-context";
import Hero from "./components/Hero";
import TopCharts from "./components/TopCharts";
import NewReleases from "./components/NewReleases";
import { useState } from "react";
import Sidemenu from "./components/Sidemenu";

export default function App() {
  const [menuState, setMenuState] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {menuState ? (
        <Sidemenu setMenuState={setMenuState}/>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Navbar setMenuState={setMenuState} />
          <Hero />
          <TopCharts />
          <NewReleases />
          <StatusBar style="auto" />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingHorizontal: 24,
    backgroundColor: "#1E1E1E",
    display: "flex",
    flex: 1,
    paddingBottom: 120,
  },
});
