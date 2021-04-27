import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { getRestaurants } from '../../store/restaurant'

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);


    const { restaurant } = useParams();
    const resta = useSelector(state => {
        return state
    })

    console.log(resta)


    const dispatch = useDispatch();

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
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        dispatch(getRestaurants());

    }, []);


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
