import { NavLink } from "react-router-dom";
import "../style.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="dev">jettison</h1>
            <ul>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "link active" : "link"
                    }
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "link active" : "link"
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? "link active" : "link"
                    }
                >
                    Contact
                </NavLink>
                <NavLink
                    to="/resume"
                    className={({ isActive }) =>
                        isActive ? "link active" : "link"
                    }
                >
                    Resume
                </NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;
