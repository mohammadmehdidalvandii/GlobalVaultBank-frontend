const baseUrl = 'http://localhost:300/api/';

interface loginProps{
    employeeCode:string,
    password:string,
}

export const login = async ({employeeCode , password}:loginProps)=>{
    const response = await fetch(`${baseUrl}auth/login`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({employeeCode , password}),
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