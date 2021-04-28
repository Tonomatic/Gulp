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
                        style={{ backgroundImage: `url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.today.com%2Ffood%2Fihop-s-family-feast-pancake-party-kit-makes-holidays-instantly-t198114&psig=AOvVaw34zc-eKTuQj6AeE_GaHgSO&ust=1619711137888000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjF-qqkofACFQAAAAAdAAAAABAX')` }}
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
