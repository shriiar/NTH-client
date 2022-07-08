import { useEffect, useState } from "react"
import axios from "axios";

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post('https://infinite-cliffs-52841.herokuapp.com/login', { email });
                setToken(data.accessToken);
                sessionStorage.setItem('accessToken', data.accessToken);
            }
        }
        getToken();
    }, [user]);
    return [token];
}

export default useToken;