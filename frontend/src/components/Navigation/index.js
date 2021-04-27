import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { getRestaurants } from '../../store/restaurant'

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestaurants());
    }, []);

    const { restaurantId } = useParams();
    const restaurant = useSelector(state => {
        // return state.map((id) => state[id])
        return Object.values(state.restaurant);
    })

    console.log(restaurant)



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


    if (!restaurant) return null;

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
            {/* <nav>
                {restaurant.map((restaurant1) => (
                    <div key={restaurant1}>
                        <div>
                            {restaurant1}
                        </div>
                    </div>
                ))}
            </nav> */}
        </ul>
    );
}

export default Navigation;
