import React, { useContext } from "react";
import { MessagesContext } from "@/context/MessagesContext";
import { ActiveChatContext } from "@/context/ActiveChatContext";
import '../styles/Message.css'

const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
        part.toLowerCase() === searchTerm.toLowerCase()
            ? <mark key={index} className="highlight">{part}</mark>
            : part
    );
};

const Message = ({ id, sender, time, text, status, searchTerm }) => {
    const { handleDeleteMessage } = useContext(MessagesContext);
    const { activeChatId } = useContext(ActiveChatContext);


    return (
        <div className={`message-animated message ${sender === "own" ? "own" : "other"}`}>
            <div className="message__text">
                {highlightText(text, searchTerm)}
            </div>
            <div className="message__meta">
                <span className="message__time">{time}</span>
                {sender === 'own' && (
                    <span className={`message__status message__status--${status}`}>
                        {status === 'read' && "✓✓"}
                        {status === 'no-read' && "✓"}
                        {status === 'no-send' && "⏳"}
                    </span>
                )}
            </div>
            <button
                onClick={() => handleDeleteMessage(activeChatId, id)}
                className="delete-btn"
                aria-label="Eliminar mensaje"
            >
                🗑
            </button>
        </div>
    )
}

export default Message