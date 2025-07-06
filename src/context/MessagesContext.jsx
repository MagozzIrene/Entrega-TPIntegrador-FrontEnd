import { createContext, useState, useContext, useEffect } from "react";
import { ActiveChatContext } from "@/context/ActiveChatContext";

export const MessagesContext = createContext({
    messages: {},
    addNewMessage: () => { },
    handleDeleteMessage: () => { }
});

const MessagesContextProvider = ({ children }) => {
    const { activeChatId} = useContext(ActiveChatContext);


    const [messages, setMessages] = useState(
        {
            "1": [
                {
                    id: "101",
                    sender: "morgana",
                    text: "¡Levántate, dormilón! Ya es tarde para vaguear.",
                    time: "07:45",
                },
                {
                    id: "102",
                    sender: "own",
                    text: "¿Cinco minutos más...? 😴",
                    time: "07:46",
                    status: "read",
                },
                {
                    id: "103",
                    sender: "morgana",
                    text: "¡No si querés infiltrarte en Mementos hoy!",
                    time: "07:47",
                },
                {
                    id: "104",
                    sender: "own",
                    text: "Okay okay... ya me levanto. ¿Están los demás listos?",
                    time: "07:49",
                    status: "read",
                },
                {
                    id: "105",
                    sender: "morgana",
                    text: "Ryuji ya está corriendo por los pasillos. Literal.",
                    time: "07:50",
                },
                {
                    id: "106",
                    sender: "own",
                    text: "Lo sabía. Decile que no se olvide las medicinas esta vez.",
                    time: "07:51",
                    status: "no-read",
                },
            ],
            "2": [
                {
                    id: "201",
                    sender: "futaba",
                    text: "¡Hola hola, líder del grupo! 👾",
                    time: "12:03",
                },
                {
                    id: "202",
                    sender: "own",
                    text: "Hey, Navi. ¿Ya terminaste ese análisis de los Shadows?",
                    time: "12:05",
                    status: "read",
                },
                {
                    id: "203",
                    sender: "futaba",
                    text: "Obvio 😏. Les puse nombre, color y emojis también 💥🐙👀",
                    time: "12:06",
                },
                {
                    id: "204",
                    sender: "own",
                    text: "…¿los emojis ayudan con la estrategia?",
                    time: "12:07",
                    status: "read",
                },
                {
                    id: "205",
                    sender: "futaba",
                    text: "¡Claramente! ¿Quién no reacciona más rápido si ve una calavera sonriente atacando? ☠️✨",
                    time: "12:08",
                },
                {
                    id: "206",
                    sender: "own",
                    text: "No sé si eso cuenta como táctica… pero confío en vos.",
                    time: "12:09",
                    status: "no-read",
                },
            ],
            "3": [
                {
                    id: "301",
                    sender: "ann",
                    text: "¡Hola! ¿Te acordás que hoy teníamos que practicar para el show?",
                    time: "15:20",
                },
                {
                    id: "302",
                    sender: "own",
                    text: "Sí, claro. ¿Dónde nos encontramos?",
                    time: "15:22",
                    status: "read",
                },
                {
                    id: "303",
                    sender: "ann",
                    text: "Pensaba en el parque Shibuya... tiene linda luz para fotos 😍📸",
                    time: "15:23",
                },
                {
                    id: "304",
                    sender: "own",
                    text: "Perfecto, llevo la cámara también entonces.",
                    time: "15:25",
                    status: "read",
                },
                {
                    id: "305",
                    sender: "ann",
                    text: "Genial! Y después quiero ir por helado 🍦",
                    time: "15:26",
                },
                {
                    id: "306",
                    sender: "own",
                    text: "Helado y selfies, anotado.",
                    time: "15:27",
                    status: "no-send",
                },
            ],
            "4": [
                {
                    id: "401",
                    sender: "akechi",
                    text: "¿Estás libre esta noche, o los “asuntos de los Phantom Thieves” te ocupan?",
                    time: "18:07",
                },
                {
                    id: "402",
                    sender: "own",
                    text: "Depende… ¿vas a invitarme a café o a un interrogatorio?",
                    time: "18:08",
                    status: "read",
                },
                {
                    id: "403",
                    sender: "akechi",
                    text: "Tienes un buen sentido del humor. Café. Aunque no prometo no hacer preguntas.",
                    time: "18:09",
                },
                {
                    id: "404",
                    sender: "own",
                    text: "Mientras no traigas una cinta para grabar, acepto.",
                    time: "18:10",
                    status: "read",
                },
                {
                    id: "405",
                    sender: "akechi",
                    text: "Tendré consideración. Solo llevaré mi intuición de detective 🎩",
                    time: "18:11",
                },
                {
                    id: "406",
                    sender: "own",
                    text: "Entonces me preparo mentalmente...",
                    time: "18:12",
                    status: "no-send",
                },
            ],
            "5": [
                {
                    id: "501",
                    sender: "yusuke",
                    text: "Hoy vi cómo la luz atravesaba una cortina mojada. Fue… sublime.",
                    time: "14:33",
                },
                {
                    id: "502",
                    sender: "own",
                    text: "¿Ya estás pintando eso también? 😅",
                    time: "14:35",
                    status: "read",
                },
                {
                    id: "503",
                    sender: "yusuke",
                    text: "Por supuesto. La inspiración no avisa. Simplemente ocurre.",
                    time: "14:36",
                },
                {
                    id: "504",
                    sender: "own",
                    text: "Y yo que solo estaba pensando en pedir ramen...",
                    time: "14:37",
                    status: "read",
                },
                {
                    id: "505",
                    sender: "yusuke",
                    text: "El ramen también puede ser arte, si lo mirás con el alma.",
                    time: "14:39",
                },
                {
                    id: "506",
                    sender: "own",
                    text: "¿Querés que almorcemos juntos y me mostrás cómo mirarlo así?",
                    time: "14:40",
                    status: "read",
                },
            ],
            "6": [
                {
                    id: "601",
                    sender: "ryuji",
                    text: "¡Ey! ¿Te acordás que hoy íbamos a correr juntos, no?",
                    time: "08:15",
                },
                {
                    id: "602",
                    sender: "own",
                    text: "¡Sí! Ya estoy cambiándome. No seas impaciente 😤",
                    time: "08:16",
                    status: "read",
                },
                {
                    id: "603",
                    sender: "ryuji",
                    text: "JAJA. Más te vale. No quiero que me ganes otra vez.",
                    time: "08:18",
                },
                {
                    id: "604",
                    sender: "own",
                    text: "Spoiler: voy a ganarte igual 😏",
                    time: "08:20",
                    status: "no-read",
                },
                {
                    id: "605",
                    sender: "ryuji",
                    text: "Che… después de correr, ¿vamos por unas croquetas?",
                    time: "08:25",
                },
                {
                    id: "606",
                    sender: "own",
                    text: "Croquetas + ducha suena como el plan perfecto.",
                    time: "08:27",
                    status: "no-send",
                },
            ],
            "7": [
                {
                    id: "701",
                    sender: "makoto",
                    text: "¿Terminaste el informe de historia? El profesor dijo que lo revisaría hoy.",
                    time: "09:03",
                },
                {
                    id: "702",
                    sender: "own",
                    text: "Casi… me quedé pensando en cómo relacionarlo con los temas actuales.",
                    time: "09:05",
                    status: "read",
                },
                {
                    id: "703",
                    sender: "makoto",
                    text: "Buena idea. Podés usar lo que vimos sobre los regímenes totalitarios como ejemplo.",
                    time: "09:06",
                },
                {
                    id: "704",
                    sender: "own",
                    text: "Perfecto, ¡gracias! A veces me cuesta aterrizar las ideas.",
                    time: "09:09",
                    status: "read",
                },
                {
                    id: "705",
                    sender: "makoto",
                    text: "Para eso estamos 😊. ¿Querés repasar juntos después de clase?",
                    time: "09:10",
                },
                {
                    id: "706",
                    sender: "own",
                    text: "Me encantaría. Llevá tus resúmenes, que son de otro mundo jaja",
                    time: "09:12",
                    status: "read",
                },
            ],
            "8": [
                {
                    id: "801",
                    sender: "haru",
                    text: "Buenos días ☀️ ¿Te gustaría pasar por la azotea más tarde? Planté unos nuevos brotes de lavanda.",
                    time: "08:21",
                },
                {
                    id: "802",
                    sender: "own",
                    text: "¡Claro! Me vendría bien algo de tranquilidad entre tanto estudio.",
                    time: "08:23",
                    status: "read",
                },
                {
                    id: "803",
                    sender: "haru",
                    text: "Perfecto. También preparé un poco de té de jazmín. Creo que te va a gustar ☕",
                    time: "08:24",
                },
                {
                    id: "804",
                    sender: "own",
                    text: "Sos la mejor, Haru 😌 Nos vemos a la salida entonces.",
                    time: "08:26",
                    status: "read",
                },
                {
                    id: "805",
                    sender: "haru",
                    text: "Hasta luego~ ¡Traé una bufanda! Parece que va a refrescar.",
                    time: "08:27",
                },
            ],
        },
    );

    const addNewMessage = (text) => {
    const messageToAdd = {
        id: Date.now(),
        sender: "own",
        text,
        time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        }),
        timestamp: Date.now(),
        status: "no-read",
    }

    setMessages((prev) => ({
        ...prev,
        [activeChatId]: [...(prev[activeChatId] || []), messageToAdd],
    }));
};

    const handleDeleteMessage = (chatId, messageId) => {
        setMessages(prev => ({
            ...prev,
            [chatId]: prev[chatId].filter(message => message.id !== messageId)
        }));
    };

    return (
        <MessagesContext.Provider
            value={{ 
                messages: messages, 
                addNewMessage: addNewMessage, 
                handleDeleteMessage: handleDeleteMessage }}
        >
            {children}
        </MessagesContext.Provider>
    )
};

export default MessagesContextProvider