import { useEffect, useState, Image, AppRegistry } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getRestaurants } from '../../store/restaurant'


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


    if (!restaurant) return null;


    return (
        <ul>
            {
                restaurant.map((res) => (
                    <div
                        className="wha"
                    >
                        <div
                            className="nav-entry-image"
                            style={{ backgroundImage: `url('${res.logo}.jpg')` }}
                        >
                            {/* <Image source={`url('${res.log}')`} /> */}

                        </div>
                        <div>
                            <div className="primary-text">{res.name}</div>
                            <div className="secondary-text">
                                {res.description} {res.hours}
                            </div>
                        </div>
                    </div>
                ))
            }

        </ul >
    );
}

export default Restaurants;
