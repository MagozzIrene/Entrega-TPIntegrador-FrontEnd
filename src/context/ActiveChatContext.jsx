import { createContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export const ActiveChatContext = createContext({
    activeChatId: "", 
    updateActiveChat: () => { }
});

const ActiveChatProvider = ({ children }) => {
    const [activeChatId, setActiveChatId] = useState("1");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (params.chatId && params.chatId !== activeChatId) {
            setActiveChatId(params.chatId);
        }
    }, [params.chatId]);

    const updateActiveChat = (chatId) => {
        setActiveChatId(chatId);
        navigate(`/chat/${chatId}`);
    };

    return (
        <ActiveChatContext.Provider value={{ 
            activeChatId: activeChatId, 
            updateActiveChat: updateActiveChat }}>
            {children}
        </ActiveChatContext.Provider>
    );
};

export default ActiveChatProvider;