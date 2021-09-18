import { useState } from 'react';

export const useSession = () => {

    // Hook con la información del usuario, ya este conectado o no
    const initialSessionData = {
        id: null,
        name: '',
        email: '',
        status: 'offline'
    }

    const [sessionData, setSessionData] = useState(initialSessionData);

    const setLoginState = () => {
        if (sessionData.status === "online") {
            setSessionData(initialSessionData);
        } else {
            setSessionData({
                ...sessionData,
                status: 'online'
            });
        }
    };

    const sessionState = () => {
        return sessionData.status;
    }

    return ([sessionData, sessionState, setLoginState]);
}