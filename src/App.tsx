import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from '@layouts/MainLayout/MainLayout';
import Dashboard from '@page/Dashboard/Dashboard';
import Accounts from '@page/Accounts/Accounts';
import Transactions from '@page/Transactions/Transactions';
import Transfer from '@page/Transfer/Transfer';
import Exchange from '@page/Exchange/Exchange';


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='Accounts' element={<Accounts/>}/>
            <Route path='Transactions' element={<Transactions/>}/>
            <Route path='Transfer' element={<Transfer/>}/>
            <Route path='Exchange' element={<Exchange/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App