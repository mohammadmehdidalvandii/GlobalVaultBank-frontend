import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect , Suspense , lazy } from 'react';
import {HelmetProvider } from 'react-helmet-async'
import {Toaster} from 'sonner'
import { getValidToken } from '@services/authServices';
import MainLayout from '@layouts/MainLayout/MainLayout';
import Loader from '@components/modules/Loader/Loader';
import NotFound from '@page/NotFound/NotFound';
// import Lazy
const Dashboard = lazy(()=>import('@page/Dashboard/Dashboard'));
const Accounts = lazy(()=>import('@page/Accounts/Accounts'))
const Transactions = lazy(()=>import('@page/Transactions/Transactions'))
const Transfer = lazy(()=>import('@page/Transfer/Transfer'))
const Exchange = lazy(()=>import('@page/Exchange/Exchange'))
const Settings = lazy(()=>import('@page/Settings/Settings'))
const Login = lazy(()=>import('@page/Login/Login'))


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
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path='*' element={<NotFound/>}/>
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
      </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
    </HelmetProvider>
  )
}

export default App