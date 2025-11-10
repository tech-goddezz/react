import { Link } from "react-router-dom";

function Nav() {
    return (
        <>
            <Link to='/'>Home</Link>
            <Link to='/users/john'>John</Link>
            <Link to='/users/liz'>Liz</Link>
            <Link to='/users/happy' >Happy</Link>
        </>
    );
}

export default Nav;