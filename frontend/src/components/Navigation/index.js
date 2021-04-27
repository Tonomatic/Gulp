import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </>
        );
    }

    return (
        <ul>

            <nav id="navigationBar">
                <ul>

                    <li>
                        <NavLink exact to="/" activeClassName="thisboi">Home</NavLink>
                        {isLoaded && sessionLinks}

                    </li>
                    <li>
                        <NavLink to="/browser">Map</NavLink>
                    </li>
                    <li>
                        <a href=" " className="link">Contact</a>
                    </li>

                </ul>
            </nav>
        </ul>
    );
}

export default Navigation;
