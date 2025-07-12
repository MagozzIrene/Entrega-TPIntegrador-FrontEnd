import React, { useContext, useState } from 'react'
import { MessagesContext } from '@/context/MessagesContext'
import EmojiPicker from 'emoji-picker-react';
import { IoSend } from "react-icons/io5";
import { FaRegSmile } from "react-icons/fa";
import '../styles/NewMessageForm.css'

const NewMessageForm = () => {
    const [newMessage, setNewMessage] = useState('')
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const { addNewMessage } = useContext(MessagesContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (newMessage.trim() === '') return
        addNewMessage(newMessage)
        setNewMessage('')
        setShowEmojiPicker(false)
    }

    const handleEmojiClick = (emojiData) => {
        setNewMessage(prev => prev + emojiData.emoji);
    };

    return (
        <form onSubmit={handleSubmit} className="chat-form">
            <label htmlFor="messageTextarea" className="sr-only">Message</label>
            <div className="chat-form__input-wrapper">
                <button
                    type="button"
                    className="emoji-button"
                    onClick={() => setShowEmojiPicker(prev => !prev)}
                    aria-label="Insert emoji"
                >
                    <FaRegSmile />
                </button>

                {showEmojiPicker && (
                    <div className="emoji-picker-wrapper">
                        <EmojiPicker onEmojiClick={handleEmojiClick} theme="dark" />
                    </div>
                )}

                <textarea
                    id="messageTextarea"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}

                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSubmit(e);
                        }
                    }}

                    placeholder="Escribe un mensaje"
                    className="chat-textarea"
                    rows={1}
                />
            </div>
            <button type="submit" className="chat-submit"><IoSend /></button>
        </form>
    )
}

export default NewMessageForm