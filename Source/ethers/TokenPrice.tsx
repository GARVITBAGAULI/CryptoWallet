import axios from 'axios'
import React from 'react'

const TokenPrice = async (contract_address:any,type:any,network:any  ) => {
   let chainId = network.id;
//    console.log(chainId);
   // chain.arbitrum,BNBMainnet,GnosisChain,Avalanche,AuroraMainnet,FantomMainnet,KlaytnMainnet
   let chain= "ethereum"
   if(chainId == "137") chain ="polygon-pos"
   if(chainId == "10") chain = "optimistic-ethereum"
   if(chainId=="42161") chain ="arbitrum-one"
   if(chainId == "56") chain = "binance-smart-chain"
   if(chainId == "250" ) chain = "fantom"
   if(chainId == "43114") chain = "avalanche"
   if(chainId == "1313161554") chain = "aurora"
   if(chainId == "8217") chain = "klay-token"
   if(chainId == "100") chain = "xdai"
    if(!contract_address && type == 1) contract_address ="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
    if(!contract_address && type == 2) contract_address="0xdAC17F958D2ee523a2206206994597C13D831ec7"
    let url = `https://api.coingecko.com/api/v3/simple/token_price/${chain}?contract_addresses=${contract_address}&vs_currencies=usd`

 if(contract_address == "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" )  url = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";
 if(contract_address == "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" && (chainId== 10 || chainId == 42161 || 1313161554) )  url = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";

 if(contract_address == "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" && chainId == 137 )  url = "https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd";
 if(contract_address == "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" && chainId == 250)  url = "https://api.coingecko.com/api/v3/simple/price?ids=fantom&vs_currencies=usd";
 if(contract_address == "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" && chainId == 56)  url = "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd";
 if(contract_address == "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" && chainId == 8217)  url = "https://api.coingecko.com/api/v3/simple/price?ids=klay-token&vs_currencies=usd";
 if(contract_address == "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" && chainId == 100)  url = "https://api.coingecko.com/api/v3/simple/price?ids=xdai&vs_currencies=usd";
 if(contract_address == "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" && chainId == 43114)  url = "https://api.coingecko.com/api/v3/simple/token_price/avalanche?contract_addresses=FvwEAhmxKfeiG8SnEvq42hc6whRyY3EFYAvebMqDNDGCgxN5Z&vs_currencies=usd";
 let response = await axios.get(url)
 
 let price = await response.data
 
 return Object.values(price)[0]?.usd
}

export default TokenPrice