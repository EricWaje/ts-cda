import { useState } from 'react';
import { User } from '../types';

interface Props {
    handleAdd: (newUser: User) => void;
}

const FormUser = ({ handleAdd }: Props) => {
    const [formData, setFormData] = useState({ nombre: '', apellido: '' });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAdd({ ...formData, id: Math.random() });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nombre"
                placeholder="Nombre..."
                onChange={handleChange}
                value={formData.nombre}
            />
            <input
                type="text"
                name="apellido"
                placeholder="Apellido..."
                onChange={handleChange}
                value={formData.apellido}
            />
            <button>Enviar</button>
        </form>
    );
};

export default FormUser;
