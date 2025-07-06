const getLastMessageText = (messages, contactId) => {
    const chatMessages = messages[contactId] || [];
    const lastMessage = chatMessages.at(-1);

    if (!lastMessage) return "Sin mensajes";

    return lastMessage.text.length > 20
        ? `${lastMessage.text.slice(0, 20)}...`
        : lastMessage.text;
};

export default getLastMessageText