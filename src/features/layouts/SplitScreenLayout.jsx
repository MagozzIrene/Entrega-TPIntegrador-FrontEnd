import { useEffect, useState } from 'react';
import ChatScreen from '@/features/chat/screens/ChatScreen';
import ContactScreen from '@/features/contacts/screens/ContactScreen';
import './SplitScreenLayout.css'

const SplitScreenLayout = ({ toggleTheme, isLight }) => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
    const { activeChatId } = useContext(ActiveChatContext);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!isDesktop) return null;

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
