import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { NumericFormat } from 'react-number-format';

export default function Login() {
    const baseUrl = "https://backend-dummy.hospitaldeespecialidades.com.sv/api/medicamentos"

    const [meds, setMed] = useState([]); // Entidad para capturar medicamentos

    useEffect(() => {
        loadMeds();
    }, []);

    const loadMeds = async () => {
        const answer = await axios.get(baseUrl);
        console.log("Resultado de cargar medicamentos");
        console.log(answer.data);

        setMed(answer.data);
    }

    const deleteMed = async (id) => {
        await axios.delete(`${baseUrl}/${id}`);
        loadMeds();
    }

    return (
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>
            <h1 className='text-5xl font-semibold'>Sistema de Recursos Humanos</h1>

            <table className="table table-striped table-hover align-middle">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Proveedor</th>
                        <th scope="col">Costo</th>
                        <th scope="col">Precio Venta</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //Iterar el arreglo de empleados
                        meds.map((med, index) => (
                            <tr key={index}>
                                <td>{med.nombre}</td>
                                <td>{med.proveedor}</td>
                                <td><NumericFormat value={med.costo}
                                    displayType={'text'}
                                    thousandSeparator=',' prefix={'$'}
                                    decimalScale={2} fixedDecimalScale/>
                                </td>
                                <td><NumericFormat value={med.precioVenta}
                                    displayType={'text'}
                                    thousandSeparator=',' prefix={'$'}
                                    decimalScale={2} fixedDecimalScale/>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}