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
        <main className="contact-detail-screen">
            <div className="contact-details">
                <header className="contact-details__header">
                    <button onClick={handleBack} className="back-button detail" aria-label="Volver" title="Volver">
                        <FaArrowLeft />
                    </button>
                    <img
                        src={contact.contact_photo}
                        alt={`Foto de ${contact.name}`}
                        className="contact-details__photo"
                    />
                    <h2 className="contact-details__name">
                        {contact.name} <span className="codename">({contact.codename})</span>
                    </h2>
                    <p className="contact-detail__last-time">
                        {`Última conexión a las ${contact.last_time_conected}hs`}
                    </p>
                    <div className="contact-details__buttons">
                        <button className="contact-details__button" aria-label="Llamar" title="Llamar">
                            <MdOutlinePhone />
                            <p className="button-text">Llamar</p>
                        </button>
                        <button className="contact-details__button" aria-label="Videollamada" title="Videollamada">
                            <AiOutlineVideoCamera />
                            <p className="button-text">Video</p>
                        </button>
                        <button className="contact-details__button" aria-label="Buscar" title="Buscar">
                            <SlMagnifier />
                            <p className="button-text">Buscar</p>
                        </button>
                    </div>
                </header>

                <div className="contact-detail__info">
                    <section className="contact-detail__info-section">
                        <p><FaQuoteLeft /><strong>Frase:</strong> <em>"{contact.quote}"</em></p>
                    </section>
                    <section className="contact-detail__info-section">
                        <p><GiCardJoker /><strong>Arcana:</strong> {contact.arcana}</p>
                    </section>
                    <section className="contact-detail__info-section">
                        <p><BsPersonFill /><strong>Persona:</strong> {contact.persona}</p>
                    </section>
                    <section className="contact-detail__info-section">
                        <p><GiBrokenShield /><strong>Debilidad:</strong> {contact.weakness}</p>
                    </section>
                    <section className="contact-detail__info-section">
                        <p><FaHeart /><strong>Afinidad:</strong> {contact.affinity}/100</p>
                        <div className="affinity-meter">
                            <div
                                className="affinity-progress"
                                style={{ "--affinity": `${contact.affinity}%` }}
                            ></div>
                        </div>
                    </section>
                    <section className="contact-detail__info-section">
                        <p><GiMagicSwirl /><strong>Habilidades:</strong></p>
                        <ul>
                            {contact.skills.map((skill, i) => <li key={i}>{skill}</li>)}
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default ContactDetails