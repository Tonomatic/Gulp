import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Logo.css';

function Logo({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    let link;
    let state = false;

    return (
        <nav id="allthis">
            <NavLink to="/" activeClassName="homeNav">
                <button id="logo">
                    <i className="fas fa-hamburger">igulp</i>

                </button>

            </NavLink>
        </nav>
    );
}

export default Logo;
