import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Header.scss";
import { FaShoppingCart } from "react-icons/fa"
import { HiOutlineMenu } from "react-icons/hi"

const logo = (
    <div className="logo">
        <Link to="/">
            <h2 style={{ display: 'flex' }}>
                e-<span>Book</span>
            </h2>
        </Link>
    </div>
)

const cart = (
    <span className='cart'>
        <Link to="/cart">
            Panier
            <FaShoppingCart size={20} />
            <p>0</p>
        </Link>
    </span>
)

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const hideMenu = () => {
        setShowMenu(false);
    };

    return (
        <header>
            <div className="header">
                {logo}
                <nav className={showMenu ? "show-nav" : "hide-nav"}>
                    <div className={showMenu ? "nav-wrapper show-nav-wrapper" : "nav-wrapper"}>
                        <ul>
                            <li>
                                <Link to='/'>
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link to='/contact'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <div className='header-right'>
                            <span className='links'>
                                <Link to="/login">Connexion</Link>
                                <Link to="/register">Inscription</Link>
                                <Link to="/historique-commande">Mes commandes</Link>
                            </span>
                            {cart}
                        </div>
                    </div>
                </nav>

                <div className='menu-icon'>
                    {cart}
                    <HiOutlineMenu size={28} onClick={toggleMenu} />
                </div>

            </div>
        </header>
    )
}

export default Header