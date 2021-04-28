import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getRestaurants } from '../../store/restaurant'
import "./Restaurants.css"
import Browser from '../Browser/index';

function Restaurants() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestaurants());
    }, []);
    const restaurant = useSelector(state => {
        return Object.values(state.restaurant);
    })

    console.log(restaurant)


    // if (!restaurant) return null;
    return (
        <ul>


            {restaurant.map((res) => (
                <div
                    className="wha"
                >
                    <div
                        className="nav-entry-image"
                        style={{ backgroundImage: `url('${res.logo}.jpg')` }}
                    >
                    </div>
                    <div>
                        <div className="primary-text">{res.name}</div>
                        <div className="secondary-text">
                            {res.description} {res.hours}
                        </div>
                    </div>
                </div>
            ))}
            <div>
                <Browser/>
            </div>

        </ul >
    );
}

export default Restaurants;
