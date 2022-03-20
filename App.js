import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View>
          <Ionicons name="menu-sharp" size={35} color="black" />
        </View>

        <View>
          <FontAwesome name="search" size={30} color="black" />
        </View>

      </View>

      <ScrollView>
  <View style={styles.backforimage}>

    <View style={styles.infobox}>
    <Text style={styles.textheading}>Docko MultiSpecial Hospital</Text>
    <Text style={styles.textheading}>Best Experience Medical Industry</Text>
    <Text style={styles.textheading}>OverAll 20 Years Plus Experience Doctors Available</Text>


    </View>

  </View>
</ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  navbar: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 60,
    backgroundColor: "#f2f2f2",
  },

  backforimage: {
    width: '100%',
    height: 250,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
  },

  infobox: {
    width: '80%',
    height: 200,
    backgroundColor: '#00CCFF',
    borderRadius: 10,
    padding: 20,
  },

  textheading: {
    fontSize: 20,
    marginTop: 8,
    fontWeight: 'bold',
  }
});
