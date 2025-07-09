import React, { useState } from "react";
import { useNavigate } from "react-router";
import Filter from "@/shared/Filter";
import { FaArrowLeft } from "react-icons/fa6";

const ChatHeader = ({ onSearchChange, onBack, activeContact }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearchChange = (value) => {
        setSearchTerm(value);
        onSearchChange(value);
    };

    const handleClick = () => {
        navigate(`/contact-detail/${activeContact.id}`);
    };

    return (
        <header className="chat-header">
            <div className="chat-header__content">
                <button onClick={onBack} className="back-button"><FaArrowLeft /></button>
                <img src={activeContact.contact_photo} alt={`Foto de ${activeContact.name}`} />
                <div className="chat-header__info-wrapper">
                    <div className="chat-header__info">
                        <h3
                            className="chat-name"
                            onClick={handleClick}
                            title="Ver detalles del contacto"
                        >
                            {activeContact.name}
                        </h3>
                        <span className="last-time">{`Última conexión ${activeContact.last_time_conected}`}</span>
                    </div>
                </div>
            </div>
            <div className="chat-header__filter">
                <Filter
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Buscar en el chat..."
                />
            </div>
        </header>
    );
};

export default ChatHeader;
