const baseUrl = 'http://localhost:3000/api/';

interface loginProps{
    employee_code:string,
    password:string,
}

export const login = async ({employee_code , password}:loginProps)=>{
    const response = await fetch(`${baseUrl}auth/login`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({employee_code , password}),
        credentials:'include',
    })
    if(response.status === 400){
        throw new Error('EmployeeCode or Password is not valid')
    } else if(response.status !== 200){
        throw new Error('Login Employee Failed')
    }
    const data = await response.json();
    return data
}

export const getToken = ()=>{
    const token = localStorage.getItem('token');
    const expiry = localStorage.getItem('accessTokenExpiry')

    if(!token || !expiry){
        return null
    }
    if( Date.now() >= parseInt(expiry || "0")) return null
    return token
}

export const logout = async ()=>{
    const res = await fetch(`${baseUrl}auth/logout`,{
        method:"POST",
        credentials:'include',
    })
    if(res.ok){
        localStorage.removeItem("token")
        localStorage.removeItem('accessTokenExpiry')
    }
}