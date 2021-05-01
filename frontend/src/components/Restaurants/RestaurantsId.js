import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {  getOneRestaurant } from '../../store/restaurant'
import "./Restaurants.css"
import Browser from '../Browser/index';

function RestaurantsId() {
    const { restaurantId } = useParams();
    const dispatch = useDispatch();
    const restaurant = useSelector((state) => state.restaurant[restaurantId]);
    


    // const sessionUser = useSelector(state => state.session.user);
    // // console.log(sessionUser)
    // const dispatch = useDispatch();
    // const { restaurantId } = useParams();

    // const restaurant = useSelector(state => {
    //     return Object.values(state.restaurant);
    // })
    // restaurant.pop();
    // const individual = (e) => {
    //     dispatch(getOneRestaurant(restaurantId));
    // }

    // useEffect(() => {
    //     let change = individual();
    //     // console.log(change);
    //     dispatch(getRestaurants());
    // }, [restaurantId]);

    // const res = useSelector(resta => {
    //     return resta
    // })
    // // console.log(res)
    // // console.log(restaurant)
    // const [showForm, setShowForm] = useState(false);

    // // if (!restaurant) return null;
    return (
        <nav>
            Hello From Test Route
        </nav >
    );
}

export default RestaurantsId;
