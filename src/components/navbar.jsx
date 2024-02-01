import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <header className='navbar'>
            <Link to='/projects'>Projects</Link>
            <Link to='/about'>About</Link>
        </header>
    )

}
