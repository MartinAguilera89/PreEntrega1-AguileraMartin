import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ItemList from './components/ItemList.jsx'
import {ChakraProvider} from "@chakra-ui/react"

ReactDOM.createRoot(document.getElementById('root')).render(
    <div>
        <ChakraProvider>
        <App />
        <ItemList />
        </ChakraProvider>
    </div>
    
)
