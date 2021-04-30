import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getRestaurants, getOneRestaurant } from '../../store/restaurant'
import "./Restaurants.css"
import Browser from '../Browser/index';

function Restaurants() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const { restaurantId } = useParams();

    const restaurant = useSelector(state => {
        return Object.values(state.restaurant);
    })
    restaurant.pop();
    const individual = (e) => {
        dispatch(getOneRestaurant(restaurantId));
    }

    useEffect(() => {
        let change = individual();
        console.log(change);
        dispatch(getRestaurants());
    }, [restaurantId]);

    const res = useSelector(resta => {
        return resta
    })
    // console.log(res)
    // console.log(restaurant)
    const [showForm, setShowForm] = useState(false);

    // if (!restaurant) return null;
    return (
        <nav>

            <div className="motherDiv">

                <div className="map1">
                    <Browser />
                </div>

                {restaurant.map((res) => {

                    return (
                        <NavLink key={res.logo} to={`/restaurant/${res.id}`}>
                            <div>
                                <div className="firstImage">

                                    <button
                                        onClick={() => setShowForm(true)}
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
