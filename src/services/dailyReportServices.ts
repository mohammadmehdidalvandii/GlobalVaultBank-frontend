import { fetchWithAuth } from "./fetchWithAuth";

const baseUrl = 'https://globalbankapi.chbk.app/api/';


export const getDailyReport = async ()=>{
    const response = await fetchWithAuth(`${baseUrl}daily-reports`,{
        method:"GET"
    })
    if(!response.ok){
        throw new Error('Failed get daily report server')
    }
    const data = await response.json();
    return data.data
}