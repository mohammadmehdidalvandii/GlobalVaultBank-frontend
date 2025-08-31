import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from '@layouts/MainLayout/MainLayout';
import Dashboard from '@page/Dashboard/Dashboard';
// import Dashboard from './page/Dashboard/Dashboard'


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Dashboard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App