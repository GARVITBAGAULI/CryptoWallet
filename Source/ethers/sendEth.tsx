
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ethers, Wallet } from "ethers";


export const SendEth =async (payload:any)=>{
    console.log('here');
    
    try {
        
        const { recipientAddress, amount,ownerKey,network} = payload;
        const provider = new ethers.providers.JsonRpcProvider(network.newRpcUrl);
    const wallet =new ethers.Wallet(ownerKey,provider);
    const signer = wallet.connect(provider);
    let fee = await provider.getFeeData();
    // console.log('fee',Number(fee.gasPrice)/Math.pow(10,18));
    let nonce = await provider.getTransactionCount(wallet.address)
    
    // Build a transaction object
    const tx:any = {
        nonce: nonce,
        to: recipientAddress,
        value: amount,
        gasLimit: 27000,
        gasPrice: Number(fee.gasPrice),
        chainId: network.chainId
      };
      console.log(tx);
      
    // console.log('tx:',tx);
    
    // Send the transaction
    // const receipt = await signer.sendTransaction(tx);
    // let { transactionHash } = await receipt.wait();
    // console.log("From function:",transactionHash);

    // return transactionHash;
    } catch (error) {
        console.log(error);
        
    }
    
}