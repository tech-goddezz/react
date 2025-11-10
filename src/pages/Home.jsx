import { useState, useEffect } from "react";
import axios from "axios";

function Home() {

    const [users, setUsers] = useState([]);

    async function fetchData() {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

        setUsers(data);
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            {
                users.map((user) => (
                    <div key={user.id} style={{border:'1px solid red', color:'green'}} >
                        <div> {user?.name} </div>
                        <div> {user?.username} </div>
                        <div> {user.id} </div>
                    </div>
                ))
            }
        </>
    );
}

export default Home;