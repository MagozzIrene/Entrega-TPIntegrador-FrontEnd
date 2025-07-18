import React, { useContext, useEffect, useRef } from "react"
import Message from "./Message"
import { MessagesContext } from "@/context/MessagesContext"
import { ActiveChatContext } from "@/context/ActiveChatContext";
import '../styles/ChatMessages.css'

const ChatMessages = ({ searchTerm }) => {
    const { messages } = useContext(MessagesContext);
    const { activeChatId } = useContext(ActiveChatContext);
    const activeMessages = messages?.[activeChatId] || [];
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (messagesEndRef.current && activeMessages.length > 0) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [activeMessages, activeChatId]);

    if (!activeChatId || !(activeChatId in messages)) {
        return null;
    }

    if (activeMessages.length === 0) {
        return (
            <div className="chat-container empty">
                <p>No hay mensajes!</p>
            </div>
        );
    }

    return (
        <div className="chat-container">
            {
                activeMessages.map((message) => {
                    return <Message
                        key={message.id}
                        sender={message.sender}
                        time={message.time}
                        text={message.text}
                        status={message.status}
                        searchTerm={searchTerm}
                        id={message.id}
                    />
                })
            }
            <div ref={messagesEndRef} />
        </div>
    )
}

export default ChatMessages