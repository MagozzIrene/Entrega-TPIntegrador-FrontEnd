import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import ChatMessages from '../components/ChatMessages'
import NewMessagesForm from '../components/NewMessageForm'
import ChatHeader from '../components/Chatheader'
import { ActiveChatContext } from '@/context/ActiveChatContext'
import { ContactsContext } from '@/context/ContactsContext'
import LoaderSpinner from '@/shared/LoaderSpinner'
import '../styles/ChatScreen.css'

const ChatScreen = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { activeChatId } = useContext(ActiveChatContext);
    const { contacts, isLoadingContacts } = useContext(ContactsContext);
    const navigate = useNavigate()

    const activeContact = contacts.find(c => String(c.id) === String(activeChatId))

    const handleBack = () => {
        navigate('/')
    }

    if (isLoadingContacts || !activeChatId || !activeContact) {
        return (
            <div className='chat-screen'>
                <LoaderSpinner />
            </div>
        );
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
