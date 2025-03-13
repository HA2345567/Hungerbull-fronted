import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from "sonner"
import { BrowserRouter as Router } from "react-router-dom"


import { Auth0ProviderWithNavigate } from './auth/Auth0ProviderWithNavigate'
import { QueryClient, QueryClientProvider } from "react-query"
import AppRoutes from './Approutes'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,


    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <Auth0ProviderWithNavigate>
          <AppRoutes />
          <Toaster visibleToasts={1} position="top-right" richColors />
        </Auth0ProviderWithNavigate>
      </QueryClientProvider>
    </Router>
  </StrictMode>,
)
