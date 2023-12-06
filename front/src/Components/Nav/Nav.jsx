import { Link } from 'react-router-dom';
const Nav = () => {

    return (
        <div className="nav">
            <div className="links">
            <Link to="/home">Home</Link>
            <Link to="/Landing">Log Out</Link>
            </div>
        </div>
    )   
}

export default Nav