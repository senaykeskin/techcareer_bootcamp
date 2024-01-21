/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet
} from "react-native";
import ProductScreen from "./src/screens/ProductScreen.tsx";


function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ProductScreen />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({});

export default App;
