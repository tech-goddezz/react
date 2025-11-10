import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Users() {

    const { id } = useParams();

    const [info, setInfo] = useState({});

    async function getUserInfo() {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        setInfo(data);
    }

   useEffect(() => {
        getUserInfo();
   }, [])


    return (
        <div>

            <Link to='/'>Go Back to h,</Link>

            <h1> {info.id} </h1>
            <h1> {info.name} </h1>
            <h1> {info.username} </h1>
        </div>
    );
}

export default Users;