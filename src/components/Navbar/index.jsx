import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

const index = () => {
    return (
        <>
            <header>
                <div className="container">
                    <nav className="nav">
                        <h2 className="nav-logo">Reactjs.uz</h2>
                        <ul className="nav__list d-flex w-50 align-items-center justify-content-between">
                            <li className="nav__list--item">
                                <NavLink className={({isActive})=> isActive ? "text-white" : ""} to="/" >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav__list--item">
                                <NavLink className={({isActive})=> isActive ? "text-white" : ""} to="/about" >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav__list--item">
                                <NavLink className={({isActive})=> isActive ? "text-white" : ""} to="/albums" >
                                    Albums
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default index;
