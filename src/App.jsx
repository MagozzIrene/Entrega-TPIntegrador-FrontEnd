import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import ChatScreen from './features/chat/screens/ChatScreen'
import ContactScreen from './features/contacts/screens/ContactScreen'
import ContactDetailScreen from './features/contacts/screens/ContactDetailScreen'
import './App.css'

const App = () => {

  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('theme-light', isLight);
  }, [isLight]);

  const toggleTheme = () => setIsLight(prev => !prev);

  return (
    <div className='app'>
      <Routes>
        <Route
          path='/chat/:chatId'
          element={<ChatScreen />} />
        <Route
          path='/'
          element={
            <ContactScreen
              toggleTheme={toggleTheme}
              isLight={isLight}
            />
          } />
        <Route
          path='/contact-detail/:id'
          element={<ContactDetailScreen />}
        />
      </Routes>
    </div>
  );
};

export default App;
