import * as React from 'react';

export default function Form() {
    return (
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>
            <h1 className='text-5xl font-semibold'>Bienvenido</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Inicia sesión con tus credenciales</p>
            <div className='mt-8'>
                <div>
                    <label className='text-lg font-medium'>Correo</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Ingresa tu correo'
                    />
                </div>
                <div>
                    <label className='text-lg font-medium'>Contraseña</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Ingresa tu contraseña'
                        type='password'
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
                    <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-violet-500 text-white text-lg font-bold'>Ingresar</button>
                </div>
            </div>
        </div>
    )
}