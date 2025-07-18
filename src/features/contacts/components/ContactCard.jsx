import React, { useContext } from "react";
import { ActiveChatContext } from "@/context/ActiveChatContext";
import '../styles/ContactCard.css'
import { useNavigate } from "react-router";

const ContactCard = ({ id, name, last_time_conected, contact_photo, last_message }) => {

    const { setActiveChatId } = useContext(ActiveChatContext);
    const navigate = useNavigate();

    const handleClick = () => {
        setActiveChatId(id);
        navigate(`/chat/${id}`);
    };

    return (
        <div className="contact" onClick={handleClick}>
            <div className="contact__photo">
                <img src={contact_photo} alt={`Foto de perfil de ${name}`} />
            </div>
            <div className="contact__body">
                <div className="contact__header">
                    <h3 className="contact__name">{name}</h3>
                    <span className="contact__last-seen">{last_time_conected}</span>
                </div>
                <div className="contact__preview">
                    <p className="contact__last-message">{last_message}</p>
                </div>
            </div>
        </div>
    )
}

export default ContactCard