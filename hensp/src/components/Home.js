import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { NumericFormat } from 'react-number-format';

export default function Login() {
    const accessToken = 'token';
    const baseUrl = "https://backend-dummy.hospitaldeespecialidades.com.sv/api/medicamentos";

    const fetchMeds = async (baseUrl) => {
        try {
            const respond = await fetch(baseUrl);
            const data = await respond.json();
            console.log(data);
        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetch(baseUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
    }, []);

    return (
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>
            <h1 className='text-5xl font-semibold'>Sistema de Medicamentos</h1>

            <table className="table table-striped table-hover align-middle">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Proveedor</th>
                        <th scope="col">Costo</th>
                        <th scope="col">Precio Venta</th>
                    </tr>
                </thead>
                
            </table>
        </div>
    )
}