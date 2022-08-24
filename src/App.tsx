import { useEffect, useState } from 'react';
import './App.css';
import FormUser from './components/FormUser';
import UserList from './components/UserList';
import { User } from './types';

const initialState = [
    {
        id: 1,
        nombre: 'Eric',
        apellido: 'Wajnrajch',
        edad: 27,
    },
    {
        id: 2,
        nombre: 'Juan',
        apellido: 'Montilla',
    },
];

interface AppState {
    users: User[];
    numbers: number;
}

function App() {
    const [count, setCount] = useState<AppState['numbers']>();
    const [users, setUsers] = useState<AppState['users']>([]);

    useEffect(() => {
        setUsers(initialState);
    }, []);

    const handleAdd = (newUser: User) => {
        setUsers([...users, newUser]);
    };

    // const sumar = () =>{
    //   setCount(100)
    // }

    return (
        <div className="App">
            {/* <button onClick={sumar}>+</button>
      <p>{count}</p> */}
            <UserList users={users} />
            <FormUser handleAdd={handleAdd} />
        </div>
    );
}

export default App;
