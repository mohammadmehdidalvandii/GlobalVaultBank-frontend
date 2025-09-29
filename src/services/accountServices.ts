const baseUrl = 'http://localhost:3000/api/';
import { fetchWithAuth } from "./fetchWithAuth";

interface createAccountProps {
    customerId:string,
    type:string,
    balance:string,
    interestRate:string,
    currency:string,
    status:string,
}

interface updatedAccountProps{
    id:string,
    update:string
}


export const createAccount = async ({customerId ,  type , balance , interestRate , currency , status }:createAccountProps)=>{
    const response = await fetchWithAuth(`${baseUrl}accounts/create`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            customerId,
            type,
            balance,
            interestRate,
            currency,
            status
        })
    })
    if(!response.ok){
        throw new Error('Failed create account error')
    }
    const data = await response.json();
    return data
}

export const getAccount = async ()=>{
    const response = await fetchWithAuth(`${baseUrl}accounts`,{
        method:"GET",
    })
    if(!response.ok){
        throw new Error('Failed get Accounts')
    }
    const data = await response.json();
    return data.data
}

export const updatedAccount = async ({id , update}:updatedAccountProps)=>{
    const response = await fetchWithAuth(`${baseUrl}accounts/update/${id}`,{
        method:'PATCH',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(update)
    });
    if(!response.ok){
        throw new Error('Updated account failed')
    }
    const data = await response.json();
    return data
}