import { fetchWithAuth } from "./fetchWithAuth";

const baseUrl = 'http://localhost:3000/api/';

interface createTransferProps {
fromAccountId?:string,
toAccountId?:string,
fromCustomerId?:string,
toCustomerId?:string,
amount:string,
currency:string,
transferType:string,
description?:string,
feeAmount:string,
exchangeRate:string,
}

export const createTransfer = async({fromAccountId , toAccountId , fromCustomerId , toCustomerId ,  amount , currency ,transferType , description , feeAmount , exchangeRate}:createTransferProps)=>{
    const response = await fetchWithAuth(`${baseUrl}transfers/create`,{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            fromAccountId,
            toAccountId,
            fromCustomerId,
            toCustomerId,
            amount,
            currency,
            transferType,
            description,
            feeAmount,
            exchangeRate,
        })
    })
    if(!response.ok){
        throw new Error('Failed create Transfer')
    }
    const data = await response.json()
    return data
}