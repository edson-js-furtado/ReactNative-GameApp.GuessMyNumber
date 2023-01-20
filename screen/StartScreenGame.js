import { useState } from "react";
import { TextInput, Alert, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen({onPikedNumber}) {
  const [enteredNumber, setEnteredNumber] = useState("");

  //Add inputText on the variable
  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  //Reset Buttom Function
  function resetInputHandler() {
    setEnteredNumber("");
  }

  //Confirm Buttom Function
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    console.log("OLEH.. ", enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 98) {
      Alert.alert(
        "Invalid Number,",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPikedNumber(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton pressed={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton pressed={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 6,
    elevation: 6,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
