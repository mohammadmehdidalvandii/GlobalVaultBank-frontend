import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from '@layouts/MainLayout/MainLayout';
import Dashboard from '@page/Dashboard/Dashboard';
import Accounts from '@page/Accounts/Accounts';
import Transactions from '@page/Transactions/Transactions';
import Transfer from '@page/Transfer/Transfer';
import Exchange from '@page/Exchange/Exchange';
import Settings from '@page/Settings/Settings';
import Login from '@page/Login/Login';
import {Toaster} from 'sonner'
import { useEffect } from 'react';
import {HelmetProvider } from 'react-helmet-async'
import { getValidToken } from '@services/authServices';


const queryClient = new QueryClient()

function App() {

  useEffect(()=>{
    const interval = setInterval(async ()=>{
      const expiry = localStorage.getItem('accessTokenExpiry');
      if(!expiry) return

      const timeLeft = Number(expiry) - Date.now();
      if(timeLeft < 60 * 1000){
        await getValidToken()
      }

    }, 60 * 1000);
    return ()=>clearInterval(interval)
  },[])

  return (
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <Toaster position='top-center' richColors/>
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='Accounts' element={<Accounts/>}/>
            <Route path='Transactions' element={<Transactions/>}/>
            <Route path='Transfer' element={<Transfer/>}/>
            <Route path='Exchange' element={<Exchange/>}/>
            <Route path='Settings' element={<Settings/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    </HelmetProvider>
  )
}

export default App