import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const [search, setSearch] = useState("")

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

    console.log(search)

    const updateSearch = (e) => {
        setSearch(e.target.value)
    }

    const resta = async (e) => {
        e.preventDefault();
        return (
            <NavLink to="/restaurants"/>
        )
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
                    <form className="searchBar" onSubmit={resta}>
                        <input
                        type="text"
                        placeholder="Search Restaurant..."
                        value={search}
                        onChange={updateSearch}
                        />
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </div>
            </div>


        </nav>
    );
}

export default Navigation;
