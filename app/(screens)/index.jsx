import { Link } from "expo-router";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to eit this screenn.</Text>
      <Link href={{pathname:'/bikes'}}>
        <TouchableOpacity >
          <View style={{}}>
            <Text>Goto BIkes</Text>
          </View>
            
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  
})