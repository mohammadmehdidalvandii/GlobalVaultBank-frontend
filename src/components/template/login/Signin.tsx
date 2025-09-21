import { Building2, Eye, EyeOff, Lock, Pencil } from "lucide-react"
import React, { useState } from "react"


const Signin:React.FC = ()=>{
    const [showPassword , setShowPassword] = useState<boolean>(false)
  return (
    <div className="min-h-screen flex items-center justify-center gradient_hero p-4">
        <div className="w-full max-w-md">
            {/* Banking Logo.Brand */}
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-bg rounded-full mb-4 shadow-shadow-banking">
                    <Building2 className="w-8 h-8 text-secondary"/>
                </div>
                <h1 className="text-2xl font-interBold rtl:font-danaBold text-white">Management bank</h1>
                <p className="text-white">Banking management system</p>
            </div>
            {/* Login card */}
            <div className="card p-x-4 py-8">
                <div className="cardHeader text-center">
                    <h3 className="cardTitle">Login to the system</h3>
                    <p className="cardDescription">Log in to access your account.</p>
                </div>
                <div className="cardContent mt-4">
                    <form action="#" className="space-y-6">
                    {/* Email Field */}
                    <div className="space-y-2">
                        <label htmlFor="" className="label_style">Employee Code</label>
                        <div className="relative mt-3">
                            <Pencil className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4"/>
                            <input id="email"  type="text" placeholder="12345678" className="input_style pl-10"  required/>
                        </div>
                    </div>
                    {/* Password Field */}
                    <div className="space-y-2">
                        <label htmlFor="" className="label_style">Employee Code</label>
                        <div className="relative mt-3">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4"/>
                            <input id="email"  type={showPassword ? "text" :" password"} placeholder="12345678" className="input_style pl-10 pr-10"  required/>
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted hover:text-primary"
                            onClick={()=>setShowPassword(!showPassword)}
                            >
                            {showPassword ? <EyeOff className="w-4 h-4"/> : <Eye  className="w-4 h-4"/>}
                            </button>
                        </div>
                    </div>
                    {/* Login Button */}
                    <button className="btn  secondary w-full h-12">Login to the system</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin