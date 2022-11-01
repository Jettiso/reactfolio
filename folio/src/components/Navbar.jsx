import { useRef } from "react";
import { NavLink } from "react-router-dom";
import "../style.css";

const Navbar = () => {
    const navRef = useRef();
    const navButton = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-nav");
    };
    const hamburgerMenu = () => {
        navButton.current.classList.toggle("is-active");
    };

    return (
        <>
            <nav className="navbar">
                <h1 className="dev">jettison</h1>
                <div className="nav__links" ref={navRef}>
                    <ul>
                        <NavLink
                            onClick={() => {
                                showNavbar();
                                hamburgerMenu();
                            }}
                            to="/"
                            className={({ isActive }) => (isActive ? "link active" : "link")}
                        >
                            Projects
                        </NavLink>
                        <NavLink
                            onClick={() => {
                                showNavbar();
                                hamburgerMenu();
                            }}
                            to="/about"
                            className={({ isActive }) => (isActive ? "link active" : "link")}
                        >
                            About
                        </NavLink>
                        <NavLink
                            onClick={() => {
                                showNavbar();
                                hamburgerMenu();
                            }}
                            to="/contact"
                            className={({ isActive }) => (isActive ? "link active" : "link")}
                        >
                            Contact
                        </NavLink>
                    </ul>
                </div>
                <div
                    className="hamburger"
                    id="hamburger-2"
                    ref={navButton}
                    onClick={() => {
                        hamburgerMenu();
                        showNavbar();
                    }}
                >
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
