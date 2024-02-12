import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    let navigation = useNavigate();

    const [entity, setEntity] = useState({
        username:"",
        password:""
    })

    const [errors, setErrors] = useState({})
    const [valid, setValid] = useState(true)
    const {username, password} = entity

    const onInputChange = (e) => {
        // Spread operator - expand attributes
        setEntity({...entity, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        let validateErrors = {}

        if(entity.username === "" || entity.password === null) {
            isValid = false;
            validateErrors.username = "Se requiere usuario";
        }
        else if(!/\S+@\S+\.\S+/.test(entity.username)) {
            isValid = false;
            validateErrors.username = "Se requiere usuario";
        }

        if(entity.password === "" || entity.password === null) {

        }

        axios.get
    }

    return (
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>
            <h1 className='text-5xl font-semibold'>Bienvenido</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Inicia sesión con tus credenciales</p>
            <div className='mt-8'>
                <div>
                    <label htmlFor='username' className='text-lg font-medium'>Usuario</label>
                    <input
                        name='username'
                        id='username'
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Ingresa tu correo'
                        required={true}
                        value={username} onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor='password' className='text-lg font-medium' onChange={(e) => setPassword(e.target.value)}>Contraseña</label>
                    <input
                        name='password'
                        id='password'
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Ingresa tu contraseña'
                        type='password'
                        required={true}
                        value={password} onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <input 
                            type='checkbox'
                            id='remember'
                        />
                        <label className='ml-2 font-medium text-base' for='remember'>Recordarme por 30 días</label>
                    </div>
                    <button className='font-medium text-basew text-violet-500'>Olvide mi contraseña</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button onClick={verifyLogin} className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-violet-500 text-white text-lg font-bold'>Ingresar</button>
                </div>
            </div>
        </div>
    )
}