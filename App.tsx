import React, { Component } from "react";
import { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';

function HookCounter() {
  const [count, setCount] = useState(0)
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={()=>setCount(count+1)}>
        <Text style={styles.buttonText}>Count {count}</Text></TouchableOpacity>
    </View>
  )
}

function HookCounter2() {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)
  const _incrementFive = () => {
    for (let i = 0; i <= 5; i++) {
      setCount(prevCount => prevCount + 1)
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => setCount(initialCount)}>
        <Text style={styles.buttonText}>Reset</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>Increment</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => setCount(count - 1)}>
        <Text style={styles.buttonText}>Decrement</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={_incrementFive}>
        <Text style={styles.buttonText}>Increment by 5</Text></TouchableOpacity>
      <Text style={styles.text}>Count {count}</Text></View>
  )
}

function HookCounter3() {
  const [name, setName] = useState({ firstname: '', lastname: '' })
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="First Name"
        placeholderTextColor="#0984e3"
        autoCapitalize="none"
        returnKeyType='next'
        value={name.firstname}
        onChangeText={e=>setName({...name,firstname: e})}
      />
      <TextInput style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Last Name"
        placeholderTextColor="#0984e3"
        autoCapitalize="none"
        returnKeyType='go'
        value={name.lastname}
        onChangeText={e=>setName({...name,lastname: e})}
      />
      <Text style={styles.text}>FirstName is {name.firstname}</Text>
      <Text style={styles.text}>LastName is {name.lastname}</Text>
      </View>
  )
}

function HookCounter4(){
  const[count, setCount]=useState(0)

  useEffect(()=>{
    document.title='Click = ${count}'
  })

  return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.buttonContainer} onPress={()=>setCount(count+1)}>
            <Text style={styles.buttonText}>Count {count}</Text></TouchableOpacity>
        </View>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    backgroundColor: '#0984e3',
    paddingVertical: 10,
    height: 40,
  },
  buttonText: {
    textAlign: 'center',
    color: 'snow',
    fontWeight: '700'
  },
  text: {
    color: 'black',
    fontSize: 20
  },
  input: {
    height: 40,
    backgroundColor: 'snow',
    color: 'black',
    marginBottom: 20
  },
})

export default HookCounter4