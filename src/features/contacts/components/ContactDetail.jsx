import React from "react";
import { useNavigate } from 'react-router';
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { SlMagnifier } from "react-icons/sl";
import { FaQuoteLeft } from 'react-icons/fa'
import { GiCardJoker } from 'react-icons/gi'
import { BsPersonFill } from 'react-icons/bs'
import { GiBrokenShield } from 'react-icons/gi'
import { FaHeart } from 'react-icons/fa'
import { GiMagicSwirl } from 'react-icons/gi'


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
                <p className="contact-detail__last-time">{`Última conección a las ${contact.last_time_conected}hs`}</p>
                <div className="contact-details__buttons">
                    <button className="contact-details__button"><MdOutlinePhone /><p className="button-text">Llamar</p></button>
                    <button className="contact-details__button"><AiOutlineVideoCamera /><p className="button-text">Video</p></button>
                    <button className="contact-details__button"><SlMagnifier /><p className="button-text">Buscar</p></button>
                </div>
            </header>
            <div className="contact-detail__info">
                <div className="contact-detail__info-section">
                    <p><FaQuoteLeft /><strong>Frase:</strong> <em>"{contact.quote}"</em></p>
                </div>
                <div className="contact-detail__info-section">
                    <p><GiCardJoker /><strong>Arcana:</strong> {contact.arcana}</p>
                </div>
                <div className="contact-detail__info-section">
                    <p><BsPersonFill /><strong>Persona:</strong> {contact.persona}</p>
                </div>
                <div className="contact-detail__info-section">
                    <p><GiBrokenShield /><strong>Debilidad:</strong> {contact.weakness}</p>
                </div>
                <div className="contact-detail__info-section">
                    <p><FaHeart /><strong>Afinidad:</strong> {contact.affinity}/100</p>
                </div>
                <div className="contact-detail__info-section">
                    <p><GiMagicSwirl /><strong>Habilidades:</strong></p>
                    <ul>
                        {contact.skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails