import { NavLink, Outlet } from "react-router-dom";
import { FaUserAlt, FaHome } from "react-icons/fa";
// import { FaHome } from "react-icons/fa";
import { RiContactsBook3Line } from "react-icons/ri";

export const AdminLayout = () => {
    return <>
    <header>
        <div className="container">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/admin/users"><FaUserAlt /> Users</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/contacts"><RiContactsBook3Line /> Contacts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/"><FaHome /> Home</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    <Outlet />
    </>
}