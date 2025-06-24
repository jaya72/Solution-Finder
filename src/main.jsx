import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SearchInput from './SearchInput.jsx'
import FetchProblemStatements from './FetchYourProblem.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
     </StrictMode>,
)
await client.connect();
console.log("Connected to MongoDB Atlas!");