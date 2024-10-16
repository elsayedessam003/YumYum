import { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import MainContent from '../../components/MainContent/MainContent';

const UserPage = () => {
    const [activeSection, setActiveSection] = useState('accountInfo');

    return (
    <div className="flex">
        <Sidebar setActiveSection={setActiveSection} />
        <MainContent activeSection={activeSection} />
    </div>
    );
};

export default UserPage;
