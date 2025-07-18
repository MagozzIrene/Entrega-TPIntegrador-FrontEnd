import { Routes, Route } from "react-router";
import ChatScreen from "./features/chat/screens/ChatScreen";
import ContactScreen from "./features/contacts/screens/ContactScreen";
import ContactDetailScreen from "./features/contacts/screens/ContactDetailScreen";
import SplitScreenLayout from "./features/layouts/SplitScreenLayout";
import useIsMobile from "./hooks/useIsMobile";
import { useEffect, useState } from "react";

import "./App.css";

const App = () => {
  const isMobile = useIsMobile();
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("theme-light", isLight);
  }, [isLight]);

  const toggleTheme = () => setIsLight((prev) => !prev);

  return (
    <Routes>
      <Route path="/contact-detail/:id" element={<ContactDetailScreen />} />

      {isMobile && <Route path="/chat/:id" element={<ChatScreen />} />}
      {isMobile && (
        <Route
          path="/"
          element={
            <ContactScreen toggleTheme={toggleTheme} isLight={isLight} />
          }
        />
      )}

      {!isMobile && (
        <Route
          path="/*"
          element={
            <SplitScreenLayout toggleTheme={toggleTheme} isLight={isLight} />
          }
        />
      )}
    </Routes>
  );
};

export default App;
