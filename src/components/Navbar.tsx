import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa"
import { data } from "../data"

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const toggleSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <div className="navbar">
                <Link to="#" className="menu-icons">
                    <FaBars onClick={toggleSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-items" onClick={toggleSidebar}>
                    <li className="nav-toggle">
                        <Link to="#" className="menu-icons">
                            <FaTimes />
                        </Link>
                    </li>
                    <li>
                        {data.map((item, index) => {
                            return (
                                <li key={index} className="nav-item">
                                    <Link to={item.path}>
                                        <>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </>
                                    </Link>
                                </li>
                            )
                        })}
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar