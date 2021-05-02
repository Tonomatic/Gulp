import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOneRestaurant } from '../../store/restaurant'
import "./Restaurants.css"

function Restaurants1() {
    const { id } = useParams();
    const restaurant = useSelector(state => state.restaurant[id]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneRestaurant(id));
        console.log(restaurant.name)

    }, [dispatch, id]);

    if(!restaurant) return null;



    // const sessionUser = useSelector(state => state.session.user);
    // const dispatch = useDispatch();
    // const { restaurantId } = useParams();

    // const restaurant = useSelector((state) => {
    //     return Object.values(state.restaurant);
    // })
    // restaurant.pop();

    // useEffect(() => {
    //     dispatch(getRestaurants());
    // }, [restaurantId]);

    // const res = useSelector(resta => {
    //     return resta
    // })

    return (
        <nav>
            Hello
            <div id="sl1er">
                <div class="sl1es">

                </div>
            </div >
        </nav>
    );
}

export default Restaurants1;
