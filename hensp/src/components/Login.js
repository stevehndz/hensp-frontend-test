import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function Login() {
    let navigation = useNavigate();
    const navigate = useNavigate();
    const baseUrl = "https://backend-dummy.hospitaldeespecialidades.com.sv"

    const [entity, setEntity] = useState({
        username: "",
        password: ""
    })

    const {username, password} = entity

    const onInputChange = (e) => {
        setEntity({ ...entity, [e.target.name]: e.target.value })
    }

    const authLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(baseUrl + "/api/auth/login", {
                usuario: username,
                password: password
            });

            const token = response.data.token;
            localStorage.setItem('token', token);
            navigate("/home");
        } catch (error) {
            console.error('Intentalo de nuevo');
        }
    }

    return (
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>
            <h1 className='text-5xl font-semibold'>Bienvenido</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Inicia sesión con tus credenciales</p>
            <div className='mt-8'>
                <form onSubmit={authLogin}>
                    <div>
                        <label className='text-lg font-medium'>Usuario</label>
                        <input
                            name='username'
                            id='username'
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder='Ingresa tu correo'
                            required={true}
                            value={username} onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div>
                        <label className='text-lg font-medium'>Contraseña</label>
                        <input
                            name='password'
                            id='password'
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder='Ingresa tu contraseña'
                            type='password'
                            required={true}
                            value={password} onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className='mt-8 flex flex-col gap-y-4'>
                        <button
                            type='submit'
                            className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-violet-500 text-white text-lg font-bold'>Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}