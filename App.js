import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

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
            <Text style={styles.textheading}>
              Best Experience Medical Industry
            </Text>
            <Text style={styles.textheading}>
              OverAll 20 Years Plus Experience Doctors Available
            </Text>
          </View>
        </View>

        <Text style={styles.Heading}>Categories</Text>

        <View>
          <Text style={styles.CateText}>Cardiologist</Text>
          <Text style={styles.CateText}>Eyes</Text>
          <Text style={styles.CateText}>Pediatrician</Text>
        </View>

        <Text style={styles.Headingtwo}>Top Rated Doctors</Text>

        <View style={styles.DoctorInfoback}>
          <View style={styles.DoctorOne}>
            <Image
              style={styles.ImageOne}
              source={require("./assets/Doc1.jpg")}
            />

            <View style={styles.Stars}>
              <AntDesign name="star" size={24} color="gold" />
              <AntDesign name="star" size={24} color="gold" />
              <AntDesign name="star" size={24} color="gold" />
              <AntDesign name="star" size={24} color="gold" />
              <AntDesign name="star" size={24} color="gold" />
            </View>

            <Text style={styles.NameofDoctor}>Mathew Chambers</Text>

            <Text style={styles.SpecialofDoc}>BoneSpecialist</Text>
          </View>

          <View style={styles.DoctorOne}>
            <Image
              style={styles.ImageOne}
              source={require("./assets/Doc4.jpg")}
            />

            <View style={styles.Stars}>
              <AntDesign name="star" size={24} color="gold" />
              <AntDesign name="star" size={24} color="gold" />
              <AntDesign name="star" size={24} color="gold" />
              <AntDesign name="star" size={24} color="gold" />
              <AntDesign name="star" size={24} color="gold" />
            </View>

            <Text style={styles.NameofDoctor}>Olivia</Text>

            <Text style={styles.SpecialofDoc}>Neurolog</Text>
          </View>
          <View style={styles.DoctorOne}>
            <Image
              style={styles.ImageOne}
              source={require("./assets/Doc3.jpg")}
            />

            <View style={styles.Stars}>
              <AntDesign name="star" size={24} color="gold" />
              <AntDesign name="star" size={24} color="gold" />
              <AntDesign name="star" size={24} color="gold" />
              <AntDesign name="star" size={24} color="gold" />
              <AntDesign name="star" size={24} color="gold" />
            </View>

            <Text style={styles.NameofDoctor}>Robert</Text>

            <Text style={styles.SpecialofDoc}>Ophthalmology</Text>
          </View>

          <View style={styles.DoctorOne}>
            <Image
              style={styles.ImageOne}
              source={require("./assets/Doc2.jpg")}
            />

            <View style={styles.Stars}>
              <AntDesign name="star" size={24} color="gold" />
              <AntDesign name="star" size={24} color="gold" />
              <AntDesign name="star" size={24} color="gold" />
              <AntDesign name="star" size={24} color="gold" />
              <AntDesign name="star" size={24} color="gold" />
            </View>

            <Text style={styles.NameofDoctor}>James</Text>

            <Text style={styles.SpecialofDoc}>Surgeon</Text>
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
    width: "100%",
    height: 250,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  infobox: {
    width: "80%",
    height: 200,
    backgroundColor: "#00CCFF",
    borderRadius: 10,
    padding: 20,
  },

  textheading: {
    fontSize: 20,
    marginTop: 8,
    fontWeight: "bold",
  },

  Heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  CateText: {
    fontSize: 20,
    backgroundColor: "#00CCFF",
    padding: 6,
    fontWeight: "bold",
    color: "#000",
    width: "40%",
    marginTop: 10,
    marginLeft: 15,
    borderRadius: 10,
  },

  DoctorInfoback: {
    width: "100%",
    height: 1700,
    flexDirection: "column",
    alignItems: "center",
  },

  DoctorOne: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 25,
    width: "80%",
    height: 390,
    backgroundColor: "#f2f2f2",
  },

  ImageOne: {
    width: "70%",
    height: 190,
    marginTop: 20,
    borderRadius: 10,
  },

  Headingtwo: {
    marginTop: 40,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  Stars: {
    flexDirection: "row",
    margin: 10,
    padding: 5,
  },

  NameofDoctor: {
    fontWeight: "bold",
    fontSize: 22,
  },

  SpecialofDoc: {
    fontSize: 15,
  },
});
