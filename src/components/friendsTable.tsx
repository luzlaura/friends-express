import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tooltip, CircularProgress, Typography } from '@mui/material';
import useFriends from '../hooks/useFriends';

const FriendsTable: React.FC = () => {
    const {friends, error} = useFriends();



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
