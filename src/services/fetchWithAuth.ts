import { getValidToken } from "./authServices"

export const fetchWithAuth = async (url:string, options:RequestInit  = {})=>{
    const token = getValidToken();
    if(!token){
        window.location.replace('/Login');
    }

    return fetch(url,{
        ...options,
        headers:{
            ...options.headers,
            Authorization: `Bearer ${token}`,
        },
        credentials:'include'
    })
}