import { useState, useEffect } from "react";
import axios from "axios";
import UserData from "../components/UserData";
import { Link } from "react-router-dom";
import Nav from "../Nav";

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

        <Nav />
            {
                users.map((user) => (

                    <Link   key={user.id} 
                            to={`/users/${user.id}`} 
                    > 
                        <UserData
                            id={user.id}
                            name={user.name}
                            username={user.username}
                        />
                    </Link>
                    
                ))
            }
        </>
    );
}

export default Home;