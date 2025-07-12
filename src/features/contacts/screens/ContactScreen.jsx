import React, { useContext, useState} from 'react'
import ContactListHeader from '../components/ContactListHeader'
import ContactList from '../components/ContactList'
import { ActiveChatContext } from '@/context/ActiveChatContext';
import '../styles/ContactScreen.css'

const ContactScreen = ({ toggleTheme, isLight }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const { setActiveChatId } = useContext(ActiveChatContext);

    return (
        <div className='contact-screen'>
            <ContactListHeader
                onSearchChange={setSearchTerm}
                toggleTheme={toggleTheme}
                isLight={isLight}
            />
            <ContactList searchTerm={searchTerm} onSelect={setActiveChatId} />
        </div>
    )
}

export default ContactScreen