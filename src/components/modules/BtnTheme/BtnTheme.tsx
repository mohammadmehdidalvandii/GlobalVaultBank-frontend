import { Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const BtnTheme:React.FC = ()=>{
    const [theme , setTheme] = useState<string>('light')

    useEffect(()=>{
        const saveTheme = localStorage.getItem('theme')|| 'light';
        if(saveTheme){
            setTheme(saveTheme);
            document.documentElement.classList.toggle('dark',saveTheme === 'dark')
        }
    },[]);

    const handlerTheme:React.MouseEventHandler<HTMLButtonElement> = ()=>{
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    }

  return (
    <button type='button' className="btn"
    aria-label='button change theme'
    onClick={handlerTheme}
    >
        {theme === 'light' ? <Moon/> :<Sun/>} 
    </button>
  )
}

export default BtnTheme