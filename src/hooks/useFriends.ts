// src/hooks/useFriends.ts
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Friend } from '../types/types.ts';

const useFriends = () => {
    const [friends, setFriends] = useState<Friend[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFriends = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/friends');
                setFriends(response.data);
            } catch (error) {
                setError('Error fetching friends');
            }
        };

        fetchFriends();
    }, []);

    return { friends, error };
};

export default useFriends;
