import React from 'react';
import { User } from '../types';

interface Props {
    users: User[];
}

const UserList = ({ users }: Props) => {
    return (
        <div>
            {users.map((user) => (
                <div
                    style={{ border: '1px solid black', margin: '10px' }}
                    key={user.id}
                >
                    <h3>{user.nombre}</h3>
                    <h3>{user.apellido}</h3>
                </div>
            ))}
        </div>
    );
};

export default UserList;
