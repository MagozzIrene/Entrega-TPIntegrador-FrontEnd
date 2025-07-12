import { useContext } from 'react';
import ChatScreen from '@/features/chat/screens/ChatScreen';
import ContactScreen from '@/features/contacts/screens/ContactScreen';
import { ActiveChatContext } from '../../context/ActiveChatContext';
import ChatPlaceholder from './ChatPlaceholder';
import useIsMobile from '../../hooks/useIsMobile';

import './SplitScreenLayout.css'

const SplitScreenLayout = ({ toggleTheme, isLight }) => {
    const { activeChatId } = useContext(ActiveChatContext);
    const isMobile = useIsMobile();

    if (isMobile) return null;

    return (
        <div className="split-screen">
            <div className="split-screen__left">
                <ContactScreen toggleTheme={toggleTheme} isLight={isLight} />
            </div>
            <div className="split-screen__right">
                {activeChatId ? <ChatScreen /> : <ChatPlaceholder />}
            </div>
        </div>
    );
};

export default SplitScreenLayout;