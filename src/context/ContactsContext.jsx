import { createContext, useState, useEffect } from "react";

export const ContactsContext = createContext({
    contacts: [],
    isLoadingContacts: true
});

const ContactsContextProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);
    const [isLoadingContacts, setIsLoadingContacts] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            const fetchedContacts = [
                {
                    id: "1",
                    name: "Morgana",
                    codename: "Mona",
                    last_time_conected: '01:00',
                    contact_photo: "/profile_pictures/morgana.png",
                    arcana: "Magician",
                    persona: "Zorro",
                    affinity: 75,
                    skills: ["Garú", "Diarama", "Mirada Felina"],
                    quote: "¡Soy Morgana, no un gato!",
                    weakness: "Viento",
                },
                {
                    id: "2",
                    name: "Futaba",
                    codename: "Oracle",
                    last_time_conected: '02:00',
                    contact_photo: "/profile_pictures/futaba.png",
                    arcana: "Hermit",
                    persona: "Necronomicon",
                    affinity: 85,
                    skills: ["Soporte Total", "Análisis", "Curación Automática"],
                    quote: "¡Soy la hacker definitiva!",
                    weakness: "Físico"
                },
                {
                    id: "3",
                    name: "Ann",
                    codename: "Panther",
                    last_time_conected: '03:00',
                    contact_photo: "/profile_pictures/ann.png",
                    arcana: "Lovers",
                    persona: "Carmen",
                    affinity: 80,
                    skills: ["Agilao", "Látigo Encantador", "Charm Boost"],
                    quote: "No soy solo una cara bonita.",
                    weakness: "Hielo"
                },
                {
                    id: "4",
                    name: "Akechi",
                    codename: "Crow",
                    last_time_conected: '04:00',
                    contact_photo: "/profile_pictures/akechi.png",
                    arcana: "Justice",
                    persona: "Robin Hood",
                    affinity: 78,
                    skills: ["Bendecir", "Disparo Preciso", "Análisis Táctico"],
                    quote: "¿Amigo o enemigo? Eso depende de vos.",
                    weakness: "Maldición"
                },
                {
                    id: "5",
                    name: "Yusuke",
                    codename: "Fox",
                    last_time_conected: '05:00',
                    contact_photo: "/profile_pictures/yusuke.png",
                    arcana: "Emperor",
                    persona: "Goemon",
                    affinity: 82,
                    skills: ["Bufu", "Contrataque", "Inspiración Artística"],
                    quote: "El arte es una expresión del alma.",
                    weakness: "Fuego"
                },
                {
                    id: "6",
                    name: "Ryuji",
                    codename: "Skull",
                    last_time_conected: '06:00',
                    contact_photo: "/profile_pictures/ryuji.png",
                    arcana: "Chariot",
                    persona: "Captain Kidd",
                    affinity: 77,
                    skills: ["Zio", "Carga", "Ataque Brutal"],
                    quote: "¡A patear traseros, líder!",
                    weakness: "Hielo"
                },
                {
                    id: "7",
                    name: "Makoto",
                    codename: "Queen",
                    last_time_conected: '07:00',
                    contact_photo: "/profile_pictures/makoto.png",
                    arcana: "Priestess",
                    persona: "Johanna",
                    affinity: 83,
                    skills: ["Freila", "Debilitar Defensa", "Liderazgo Táctico"],
                    quote: "La justicia debe cumplirse.",
                    weakness: "Psíquico"
                },
                {
                    id: "8",
                    name: "Haru",
                    codename: "Noir",
                    last_time_conected: '08:00',
                    contact_photo: "/profile_pictures/haru.png",
                    arcana: "Empress",
                    persona: "Milady",
                    affinity: 76,
                    skills: ["Psi", "Triple Disparo", "Elegancia Mortal"],
                    quote: "Ser refinada también puede ser letal.",
                    weakness: "Nuclear"
                },
            ]

            setContacts(fetchedContacts);
            setIsLoadingContacts(false);
        }, 2000);
    }, []);

    return (
        <ContactsContext.Provider
            value={
                {
                    contacts: contacts,
                    isLoadingContacts: isLoadingContacts
                }
            }
        >
            {children}
        </ContactsContext.Provider>
    )
};

export default ContactsContextProvider