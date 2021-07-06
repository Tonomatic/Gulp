import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getRestaurants } from '../../store/restaurant'
import "./Restaurants.css"
import Browser from '../Browser/index';
import RestaurantsId from './RestaurantsId'

function Restaurants() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const { restaurantId } = useParams();

    const restaurant = useSelector((state) => {
        return Object.values(state.restaurant);
    })
    restaurant.pop();
    restaurant.pop();

    useEffect(() => {
        dispatch(getRestaurants());
    }, [restaurantId]);

    const res = useSelector(resta => {
        return resta
    })

    return (
        <nav>

            <div className="motherDiv">

                <div className="map1">
                    <Browser />
                </div>

                {restaurant.map((res) => {

                    return (
                        <NavLink key={res.id} to={`/restaurants/${res.id}`}>
                            <div>
                                <div className="firstImage">

                                    <button
                                        // onClick={() => setShowForm(true)}
                                        className="nav-entry-image"
                                        style={{ backgroundImage: `url('${res.logo}')` }}
                                    >
                                    </button>
                                    <div className="allText">
                                        <div className="ptext">{res.name}</div>
                                        <div className="stext">
                                            {res.description}
                                        </div>
                                        <div className="htext">{res.hours}</div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    )
                })}

            </div>


        </nav >
    );
}

export default Restaurants;
