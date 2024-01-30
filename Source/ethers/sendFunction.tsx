import { ethers } from "ethers";
import { Alert } from "react-native/Libraries/Alert/Alert";
import { daiAbi } from '../ethers/integration'
export const SendTokens = async (payload:any,navigation:any) => {

    const { recipientAddress, amount,network,token,ownerKey,address} = payload;
    // console.log(recipientAddress,'fromfunction');
    
    const provider = new ethers.providers.JsonRpcProvider(network.newRpcUrl);
    const signer = new ethers.Wallet(ownerKey, provider);
    const daiContract = new ethers.Contract(token.smartContract, daiAbi, signer);
    
    const decimal = await daiContract.decimals();
    console.log(Number(decimal),'check');
    
    const amountToSend = (Number(amount)*Math.pow(10,decimal)).toString();
    console.log(amountToSend,'amount');
    
    let fee = await provider.getFeeData();
    
    const receipt= await daiContract.transfer(recipientAddress,amountToSend,{
        gasLimit: 100000,
        gasPrice: fee.gasPrice
    });

    let {transactionHash,status}= await receipt.wait();
    console.log(transactionHash,'haSh');
    if(status == 1){
    //storing transactions in async storage 
    // Alert.alert('Success', 'Token Send succesfully', [

    //     { text: 'OK', onPress: () => navigation.navigate('SendComplete') },
    navigation.navigate('SendComplete')
    // ]);
}
}