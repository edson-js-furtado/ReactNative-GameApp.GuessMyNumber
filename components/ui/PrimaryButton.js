import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function PrimaryButton({ children, pressed }) {
  return (
    <View style={styles.buttonOutContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={pressed}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttomText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOutContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 10,
    paddingHorizontal: 16,
    elevation: 3,
  },
  buttomText: {
    color: "white",
    textAlign: "center",
  },
});
