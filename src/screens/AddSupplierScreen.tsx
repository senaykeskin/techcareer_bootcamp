import React, { useState } from "react";
import axios from "axios";
import { Alert, Button, Text, TextInput, View } from "react-native";

const AddSupplierScreen = () => {

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

  const add = () => {
    let newSupplier = {
      input1: input1,
      input2: input2,
      input3: input3,
      input4: input4
    }
    axios.post("https://northwind.vercel.app/api/suppliers", newSupplier)
      .then(res => {
        Alert.alert("Başarılı ekleme");
      })

  }

  return (
    <>
      <View>
        <Text>Input 1</Text>
        <TextInput onChangeText={setInput1} />
      </View>
      <View>
        <Text>Input 2</Text>
        <TextInput onChangeText={setInput2} />
      </View>
      <View>
        <Text>Input 3</Text>
        <TextInput onChangeText={setInput3} />
      </View>
      <View>
        <Text>Input 4</Text>
        <TextInput onChangeText={setInput4}/>
      </View>
      <View>
        <Button onPress={add} title={"Add"} />
      </View>
    </>

  );


};

export default AddSupplierScreen;
