import { fetchWithAuth } from "./fetchWithAuth";

const baseUrl = 'http://localhost:3000/api/';



export const getAllTransactions = async () =>{
    const response = await fetchWithAuth(`${baseUrl}transactions`,{
        method:"GET",
    })
    if(!response.ok){
        throw new Error("Get Transactions server")
    }
    const data = await response.json();
    return data.data
}