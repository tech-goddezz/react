import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Users() {

    const {username } = useParams();

    useEffect(() => {
        fetch(`https://www.tiktok.com/${username}`);
    }, [])


    return (
        <div>
            <h1> {username} </h1>
        </div>
    );
}

export default Users;