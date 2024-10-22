import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import "./Navbar.css";

export const Navbar = () => {
    const { isLoggedIn } = useAuth();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <NavLink to="/">Sunset Getaways</NavLink>
                    </div>

                    <div className="hamburger" onClick={toggleMobileMenu}>
                        <span className={isMobileMenuOpen ? 'line rotate1' : 'line'}></span>
                        <span className={isMobileMenuOpen ? 'line hide' : 'line'}></span>
                        <span className={isMobileMenuOpen ? 'line rotate2' : 'line'}></span>
                    </div>

                    <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                        <ul>
                            <li>
                                <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/service" onClick={() => setIsMobileMenuOpen(false)}>Services</NavLink>
                            </li>
                            {isLoggedIn ? (
                                <li>
                                    <NavLink to="/logout" onClick={() => setIsMobileMenuOpen(false)}>Logout</NavLink>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <NavLink to="/login" onClick={() => setIsMobileMenuOpen(false)}>Login</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/register" onClick={() => setIsMobileMenuOpen(false)}>Register</NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};
