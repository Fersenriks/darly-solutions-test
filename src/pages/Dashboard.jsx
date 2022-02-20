import React from 'react';

import {logout} from "../firebase/firebase";

import './dashboard.scss';

const Dashboard = () => {
    const handleLogout = () => {
        logout();
    }

    return (
        <div className={'dashboard'}>
            <header>
                <div onClick={handleLogout} className="logout">Logout</div>
            </header>
            <main>
                <h1>Hello, World!</h1>
            </main>
        </div>
    );
};

export default Dashboard;