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


const queryClient = new QueryClient()

function App() {
  return (
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
  )
}

export default App