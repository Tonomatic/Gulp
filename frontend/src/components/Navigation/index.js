import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/about" className="link">About</NavLink>
                <NavLink to="restaurants">Restaurants</NavLink>
                <ProfileButton user={sessionUser} />
            </>
        );
    } else {
        sessionLinks = (
            <>
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                <NavLink to="/about" className="link">About</NavLink>
            </>
        );
    }
    return (
        <nav>
            <div className="navigationBar">
                <div className="lii">
                    {isLoaded && sessionLinks}
                </div>
            </div>
            <div>

                <div
                    className="homeImg"
                >
                </div>
                <div className="all">

                    <div className="text">
                        <h1 className="hh1">gulp</h1>
                    </div>
                    <form className="searchBar">
                        Find
                        <input
                        type="text"
                        placeholder="Search Restaurant..."
                        />
                        <button type="submit" class="fa fa-search"></button>
                    </form>
                </div>
            </div>


        </nav>
    );
}

export default Navigation;
