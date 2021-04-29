import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
        <nav>
            <div className="navigationBar">
                <li>
                    <NavLink to="/" activeClassName="homeNav">Home</NavLink>
                    {isLoaded && sessionLinks}

                </li>
                <li>
                    <NavLink to="/browser">Map</NavLink>
                </li>
                <li>
                    <a href=" " className="link">Contact</a>
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
                <div className="text">
                    <h1>igulp</h1>
                    Find
                <input />
                    <button>Find</button>
                </div>
            </div>


        </nav>
    );
}

export default Navigation;
