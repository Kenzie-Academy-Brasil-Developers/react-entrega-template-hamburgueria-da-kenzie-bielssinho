import { createContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { SubmitHandler} from 'react-hook-form';
import { toast } from 'react-toastify';
import { iFormLogin } from '../pages/Login';

interface iAuthProviderProps{
    children: React.ReactNode;
}

interface iAuthProviderValue{
    items: null | object;
    loading: boolean;
    submit(data: iFormLogin): Promise<void>;
}

// interface iProducts{
//     id: number;
//     name: string;
//     category: string;
//     price: number;
//     img: string;
// }

export const AuthContext = createContext({} as iAuthProviderValue);

export const AuthProvider = ( {children}: iAuthProviderProps ) => {
    const [ items, setItems ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem('@TOKEN');

            if(!token){
                setLoading(false);
                return;
            }

            try {
                api.defaults.headers.common.authorization = `Bearer ${token}`;
    
                const { data } = await api.get('products')
                console.log(data)
                setItems(data);
    
            } catch (error) {
                navigate('/');
            }finally{
                setLoading(false);
            } 
        }

        loadUser()
    }, [navigate]);
    

    const submit: SubmitHandler<iFormLogin> = async (data) => {
        try {
            const response = await api.post('login', data)
            const { accessToken } = response.data;
            localStorage.setItem('@TOKEN', accessToken)
            api.defaults.headers.common.authorization = `Bearer ${accessToken}`;

            
            const toNavigate = location.state?.from?.pathname || `/dashboard/${response.data.user.name}`;
            
            navigate(toNavigate, { replace: true }); 
        } catch (error) {
            toast.error('Ops! Algo deu errado no Login')
        }
    }

    return (
        <AuthContext.Provider value ={{ items, loading, submit }}>
            {children}
        </AuthContext.Provider>
    )
}