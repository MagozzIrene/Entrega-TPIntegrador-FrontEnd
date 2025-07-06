export function sortContactsByLastMessage(contacts, messages) {
    return [...contacts].sort((a, b) => {
        const aMessages = messages[a.id] || [];
        const bMessages = messages[b.id] || [];

        const aLastTimestamp = aMessages[aMessages.length - 1]?.timestamp || 0;
        const bLastTimestamp = bMessages[bMessages.length - 1]?.timestamp || 0;

        return bLastTimestamp - aLastTimestamp;
    });
}