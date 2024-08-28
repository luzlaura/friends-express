import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tooltip } from '@mui/material';
import axios from 'axios';
import {Friend} from "../types/types.ts";

const FriendsTable: React.FC = () => {
    const [friends, setFriends] = useState<Friend[]>([]);

    useEffect(() => {
        const fetchFriends = async () => {
            try {
                // const response = await axios.get('/api/friends');
                const response = await axios.get('http://localhost:8080/api/friends');

                setFriends(response.data);
            } catch (error) {
                console.error('Error fetching friends:', error);
            }
        };

        fetchFriends();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Addresses</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {friends.map(friend => (
                        <TableRow key={friend.id}>
                            <TableCell>{friend.name}</TableCell>
                            <TableCell>{friend.email}</TableCell>
                            <TableCell>
                                {friend.addresses.map(address => (
                                    <Tooltip key={address.id} title={`${address.street}, ${address.number}, ${address.city} `}>
                                        <span> -{address.street}

                                        </span>
                                    </Tooltip>
                                ))}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );

};


export default FriendsTable;
