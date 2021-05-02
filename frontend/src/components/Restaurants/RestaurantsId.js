import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOneRestaurant } from '../../store/restaurant'
import "./Restaurants.css"

function RestaurantsId() {
    const { id } = useParams();
    const restaurant = useSelector(state => state.restaurant[id]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneRestaurant(id));
        console.log(restaurant.name)

    }, [dispatch, id]);

    if(!restaurant) return null;

    return (
        <nav>
            Hello
            <div >
                <div class="sl1es">

                </div>
            </div >
        </nav>
    );
}

export default RestaurantsId;
