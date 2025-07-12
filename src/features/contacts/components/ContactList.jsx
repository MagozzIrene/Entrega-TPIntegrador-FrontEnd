import React, { useContext } from "react";
import ContactCard from "./ContactCard";
import { ContactsContext } from "@/context/ContactsContext";
import { MessagesContext } from "@/context/MessagesContext";
import LoaderSpinner from "@/shared/LoaderSpinner";
import { sortContactsByLastMessage } from "@/shared/sortContactsByLastMessage";
import getLastMessageText from "@/shared/getLastMessageText";
import '../styles/ContactList.css'

const ContactList = ({ searchTerm }) => {
    const { contacts, isLoadingContacts } = useContext(ContactsContext);
    const { messages } = useContext(MessagesContext);

    if (isLoadingContacts) {
        return (
            <div  className="contact-list">
                <LoaderSpinner />
            </div>
        );
    }

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredContacts.length === 0) {
        return (
            <div className="contact-list__empty">
                <p>No hay contactos para mostrar 😢</p>
            </div>
        );
    }

    const sortedContacts = sortContactsByLastMessage(filteredContacts, messages);

    return (
        <div className="contact-list">
            {sortedContacts.map((contact) => {
                const shortMessage = getLastMessageText(messages, contact.id);
                return (
                    <ContactCard
                        key={contact.id}
                        id={contact.id}
                        name={contact.name}
                        last_time_conected={contact.last_time_conected}
                        contact_photo={contact.contact_photo}
                        last_message={shortMessage}
                    />
                );
            })}

        </div>
    );
};

export default ContactList;
