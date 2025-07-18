import React, { useState } from "react"
import Filter from '@/shared/Filter'
import ThemeToggle from "../../ThemeToggle/ThemeToggle";
import '../styles/ContactListHeader.css'

const ContactListHeader = ({ onSearchChange, toggleTheme, isLight }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (value) => {
        setSearchTerm(value)
        onSearchChange(value)
    }

    return (
        <header className="contact-list-header">
            <div className="contact-list-header__content">
                <h1>Phantom Chats</h1>
                <ThemeToggle toggleTheme={toggleTheme} isLight={isLight} />
            </div>
            <Filter 
                value={searchTerm} 
                onChange={handleSearchChange} 
                filterId="contact-filter"/>
        </header>
    )
}

export default ContactListHeader
