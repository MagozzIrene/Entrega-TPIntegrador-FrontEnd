import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router";

export const ActiveChatContext = createContext({
    activeChatId: "",
    setActiveChatId: () => { }
});

const ActiveChatProvider = ({ children }) => {
    const [activeChatId, setActiveChatId] = useState("");
    const location = useLocation();

    useEffect(() => {
        const match = location.pathname.match(/^\/chat\/(\d+)/);
        if (match) {
            const chatIdFromUrl = match[1];
            setActiveChatId(chatIdFromUrl);
        }
    }, [location]);

    return (
        <ActiveChatContext.Provider value={{ activeChatId, setActiveChatId }}>
            {children}
        </ActiveChatContext.Provider>
    );
};

export default ActiveChatProvider;