import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <header className='navbar'>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
        </header>
    )

}
