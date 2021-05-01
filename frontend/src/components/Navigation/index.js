import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import Logo from '../Logo/index'
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
        <nav>
            <div className="navigationBar">
                <li>
                    <NavLink to="/" activeClassName="homeNav">Home</NavLink>
                    {isLoaded && sessionLinks}

                </li>
                <li>
                    <a href=" " className="link">About</a>
                </li>
                <li>
                    <NavLink to="restaurants">Restaurants</NavLink>
                </li>

            </div>
            <div>

                <div
                    className="homeImg"
                >
                </div>
                <div className="all">

                    <div className="text">
                        <h1 className="hh1">igulp</h1>
                    Find
                <input />
                        <button>Find</button>
                    </div>
                </div>
            </div>


        </nav>
    );
}

export default Navigation;
