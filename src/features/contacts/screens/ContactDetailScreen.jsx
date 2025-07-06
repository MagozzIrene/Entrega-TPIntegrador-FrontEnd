import React, { useContext } from "react";
import { useParams } from "react-router";
import { ContactsContext } from "@/context/ContactsContext";
import ContactDetails from "../components/ContactDetail";
import LoaderSpinner from '@/shared/LoaderSpinner'

const ContactDetailScreen = () => {
    const { contacts } = useContext(ContactsContext);
    const { id } = useParams();

    const contact = contacts.find(c => c.id === id);

    if (!contact) {
        return (
            <div className="contact-detail-screen">
                <LoaderSpinner />
            </div>
        )
    }

    return (
        <div className="contact-detail-screen">
            <ContactDetails contact={contact} />
        </div>
    );
};

export default ContactDetailScreen;