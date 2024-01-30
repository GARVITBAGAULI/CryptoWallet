import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
const Web3 = require("web3");
import { Text, TouchableOpacity, View } from "react-native"

function GetBalance({ token_address, set, address, rpcURL }: any) {

  const [balance, setBalance] = useState(0);

  const provider = new ethers.providers.JsonRpcProvider(rpcURL);
  const minABI = [ 
    {
      constant: true,
      inputs: [{ name: "_owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "balance", type: "uint256" }],
      type: "function",
      
    },
    {
      constant: true,
      inputs: [],

      name: "decimals",
      outputs: [
        {
          name: "",
          type: "uint8",
        },
      ],
      payable: false,
      type: "function",
    },
  ];


  const getBalance = async () => {
    if (!address) return;
    console.log(address, "Fucked up");
    const web3 = await new Web3(provider?.connection?.url)
    if (token_address == "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee") {
      let dat = await web3.eth.getBalance(address)
      let bal = (dat / Math.pow(10, 18))
      setBalance(bal)
      return bal;
    }
    const contract = new web3.eth.Contract(minABI, token_address);
    try {

      6
      const res = await contract.methods.balanceOf(address)?.call();

      const decimals = await contract.methods.decimals().call();

      console.warn(decimals, res)

      let format = res / Math.pow(10, decimals)
      console.log(format > 0);
      if (format < 0.001) format = 0;
      setBalance(format)
      return format;
    } catch (e) {
      console.log(e, "check")
    }
  }
  useEffect(() => {

    getBalance();
    // console.log(rpcURL,"url");

  }, [address]);

  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={{ color: "#738CB1", marginRight: 5 }}>

        Balance:{balance.toFixed(6)}
      </Text>
      {/* <TouchableOpacity onPress={() => set(balance)}>
        <Text style={{ color: "#3F85EE" }}>Max</Text>
      </TouchableOpacity> */}
    </View>
  );
}
export default GetBalance;
