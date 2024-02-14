import { Link, NavLink } from "react-router-dom";

export default function Navbar() {

    const className = ({isActive})=> {
        return isActive ? "active navlink" : "inactive navlink"
    }

    return (
        <header className='navbar'>
            <NavLink className={className} to='/'>About</NavLink>
            <NavLink className={className} to='/projects'>Projects</NavLink>
            <NavLink className={className} to='/contact'>Contact</NavLink>
            
        </header>
    )

}
