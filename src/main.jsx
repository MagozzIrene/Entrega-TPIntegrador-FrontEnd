import React from 'react'
import { createRoot } from 'react-dom/client'
import MessagesContextProvider from './context/MessagesContext.jsx'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import ContactsContextProvider from './context/ContactsContext.jsx'
import ActiveChatProvider from './context/ActiveChatContext'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContactsContextProvider>
      <ActiveChatProvider>
        <MessagesContextProvider>
          <App />
        </MessagesContextProvider>
      </ActiveChatProvider>
    </ContactsContextProvider>
  </BrowserRouter>
)
