import React from "react";
import { useNavigate } from 'react-router';
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { SlMagnifier } from "react-icons/sl";
import '../styles/ContactDetail.css'

const ContactDetails = ({ contact }) => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="contact-details">
            <header className="contact-details__header">
                <button onClick={handleBack} className="back-button detail"><FaArrowLeft /></button>
                <img src={contact.contact_photo} alt={contact.name} className="contact-details__photo" />
                <h2 className="contact-details__name">{contact.name} <span className="codename">({contact.codename})</span></h2>
                <div className="contact-details__buttons">
                    <button className="contact-details__button"><MdOutlinePhone /></button>
                    <button className="contact-details__button"><AiOutlineVideoCamera /></button>
                    <button className="contact-details__button"><SlMagnifier /></button>
                </div>
            </header>
            <div className="contact-detail__info">
                <p><strong>Arcana:</strong> {contact.arcana}</p>
                <p><strong>Persona:</strong> {contact.persona}</p>
                <p><strong>Debilidad:</strong> {contact.weakness}</p>
                <p><strong>Frase:</strong> <em>"{contact.quote}"</em></p>
                <p><strong>Afinidad:</strong> {contact.affinity}/100</p>
                <p><strong>Habilidades:</strong></p>
                <ul>
                    {contact.skills.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default ContactDetails