import React, { useState} from 'react'
import ContactListHeader from '../components/ContactListHeader'
import ContactList from '../components/ContactList'
/* import '../styles/contacts.css' */
import '../styles/ContactScreen.css'

const ContactScreen = ({ toggleTheme, isLight }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [setActiveChatId] = useState(null);

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