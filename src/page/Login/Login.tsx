import Signin from "@components/template/login/Signin"
import MetaTag from "@hooks/metaTag"
import React from "react"


const Login:React.FC = ()=>{
  return (
    <>
    <MetaTag title="Login" description="A bank management project for the login department"/>
    <Signin/>
    </>
  )
}

export default Login