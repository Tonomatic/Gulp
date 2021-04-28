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
        <nav>


            {restaurant.map((res) => (
                <div
                    className="motherDiv"
                >
                    <div className="firstImage">

                        <div
                            className="nav-entry-image"
                            style={{ backgroundImage: `url('${res.logo}')` }}
                        >
                        </div>
                        <div className="allText">
                            <div className="ptext">{res.name}</div>
                            <div className="stext">
                                {res.description}
                            </div>
                            <div className="htext">{res.hours}</div>
                        </div>
                    </div>
                </div>
            ))}
            <div>
                <Browser />
            </div>

        </nav >
    );
}

export default Restaurants;
