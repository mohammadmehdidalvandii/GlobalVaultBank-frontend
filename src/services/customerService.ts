const baseUrl = 'http://localhost:3000/api/';
import { fetchWithAuth } from "./fetchWithAuth";

interface createCustomerProps{
  firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    nationalID: string;         
    dateOfBirth: string | null; 
    street?: string;
    city?: string;
    postalCode?: string;
    country?: string
}

export const createCustomer = async ({firstName, lastName ,email ,phone, nationalID , dateOfBirth ,street,city,postalCode, country}:createCustomerProps)=>{
    const response = await fetchWithAuth(`${baseUrl}customer/create`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            firstName,
            lastName,
            email,
            phone,
            nationalID,
            dateOfBirth,
            street,
            city,
            postalCode,
            country
        })
    });
    if(response.status === 400){
        throw new Error('Customer is already')
    } else if(response.status === 500){
        throw new Error('Failed created customer')
    }
    
    const data = await response.json();
    return data
}