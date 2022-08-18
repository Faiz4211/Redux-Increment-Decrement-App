import React from 'react'
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './src/actions/index'

export default function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>WELCOME TO REDUX APP</Text>
      <Text style={styles.heading}>INCREMENT/DECREMENT COUNTER</Text>

      <View style={styles.outercontainer}>

        <View style={{ flexDirection: "row" }}>
          <TouchableHighlight style={{ ...styles.button, backgroundColor: "red" }} onPress={() => dispatch(decNumber())} >
            <Text style={styles.Text}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{ ...styles.button, backgroundColor: "grey" }} >
            <Text style={styles.Text}>{myState}</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{ ...styles.button, backgroundColor: "limegreen" }} onPress={() => dispatch(incNumber())} >
            <Text style={styles.Text}>+</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    flex: 1,
  },

  heading: {
    color: "#0096FF",
    fontSize: 30,
    fontWeight: 'bold',
    width: "90%",
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
    textDecorationLine: 'underline',
  },
  outercontainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    height: 50,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2
  },

  Text: {
    color: "#000000",

  }
})
