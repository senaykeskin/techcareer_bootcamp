import React, { useEffect, useState } from "react";
import axios from "axios";
import { FlatList, Text } from "react-native";

const ProductScreen = () => {
  const [product, setProduct] = useState<any[]>([]);

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/suppliers").then(res => {
      setProduct(res.data);
    });
  }, []);

  
  return(
    <FlatList
      data={product}
      renderItem={({item}) => {
        const color = item.address.country === "USA" ? { color: 'red' } : { color: 'black' };
        return (
          <Text style={color}>{item.companyName} - {item.address.country}</Text>)
      }}></FlatList>
  )

}

export default ProductScreen;
