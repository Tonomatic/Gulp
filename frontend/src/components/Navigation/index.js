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
                    <a href=" " className="link">About</a>
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
                        <h1 className="hh1">gulp</h1>
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
