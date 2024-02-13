import { useState } from "react";
import axios from '../api/axios';

const Users = () => {
    const [ Users, setUsers ] = useState();

    return (
        <article>
            <h2>Users List</h2>
            {users?.length
                ? (
                    <ul>
                        {users.map}
                    </ul>
                )

            }
        </article>
    )
}