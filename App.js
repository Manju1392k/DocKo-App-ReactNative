import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

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

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  navbar: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 60,
   backgroundColor: '#f2f2f2',
  },
});
