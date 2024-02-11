import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useGetToken } from './useGetToken';
import { IProduct } from '../models/interfaces';

export const useGetProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const { headers } = useGetToken();

    const fetchProducts = async () => {
        try {
            const res = await axios.get(
                `${import.meta.env.VITE_APP_API_URL}/products`,
                { headers }
            );
            setProducts(res?.data?.products || []);
        } catch (err) {
            if (err instanceof AxiosError) {
                console.error('Something went wrong!' + err?.response?.data.message);
            }
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return { products };
};
