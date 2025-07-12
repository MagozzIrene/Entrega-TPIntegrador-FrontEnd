import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router'
import ChatMessages from '../components/ChatMessages'
import NewMessagesForm from '../components/NewMessageForm'
import ChatHeader from '../components/Chatheader'
import { ActiveChatContext } from '@/context/ActiveChatContext'
import { ContactsContext } from '@/context/ContactsContext'
import LoaderSpinner from '@/shared/LoaderSpinner'
import '../styles/ChatScreen.css'

const ChatScreen = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { activeChatId } = useContext(ActiveChatContext)
    const { contacts } = useContext(ContactsContext)

    const navigate = useNavigate()

    const activeContact = contacts.find(c => c.id === activeChatId)

    const handleBack = () => {
        navigate('/')
    }

    if (!activeContact) {
        return (
            <div className='chat-screen'>
                <LoaderSpinner />
            </div>
        )
    }

    return (
        <div className="chat-screen">
            <ChatHeader
                onSearchChange={setSearchTerm}
                activeContact={activeContact}
                onBack={handleBack} />
            <ChatMessages
                searchTerm={searchTerm}
            />
            <NewMessagesForm />
        </div>

    )
}

export default ChatScreen
