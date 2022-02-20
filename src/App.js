import React from 'react';

import {useAuthState} from "react-firebase-hooks/auth";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

import {auth} from "./firebase/firebase";

function App() {
    const [user] = useAuthState(auth);

    return (
        <div className="App">
            {user ? <PrivateRoutes /> : <PublicRoutes />}
        </div>
    );
}

export default App;
