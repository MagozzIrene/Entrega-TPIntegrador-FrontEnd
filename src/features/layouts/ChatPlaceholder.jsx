import './ChatPlaceholder.css'

const ChatPlaceholder = () => {
    return (
        <div className="chat-placeholder">
            <div className="chat-placeholder__box">
                <p className="chat-placeholder__icon">💬</p>
                <p className="chat-placeholder__text">Seleccioná un chat para comenzar</p>
            </div>
        </div>
    );
};

export default ChatPlaceholder;