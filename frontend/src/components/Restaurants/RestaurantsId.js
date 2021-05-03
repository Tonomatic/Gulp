import React, { useEffect, useState } from 'react';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOneRestaurant, createReview } from '../../store/restaurant'
import * as sessionActions from '../../store/session';
import "./RestaurantsId.css"
import { csrfFetch } from '../../store/csrf';

function RestaurantsId({ hideForm }) {
    const { id } = useParams();
    const sessionUser = useSelector(state => state.session);
    const history = useHistory();
    const restaurant = useSelector(state => state.restaurant[id]);
    const dispatch = useDispatch();
    const [reviews, setReviews] = useState([])
    const [personalReview, setPersonalReview] = useState(null)
    const [reviewTextData, setReviewText] = useState();
    const [rating, setRating] = useState(null);
    // const reviews = useSelector(state => state.review[id])
    const updateText = (e) => setReviewText(e.target.value)
    const updateRating = (e) => setRating(e.target.value)
    useEffect(() => {
        dispatch(getOneRestaurant(id));
        console.log(restaurant)
    }, [dispatch]);


    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`/api/restaurants/${id}/reviews`);
            const data = await res.json();
            setReviews(data);
        }
        fetchData()
    }, [id])

    useEffect(() => {

    })

    async function handleSubmit() {
        // e.preventDefault();

        const payload = {
            text: reviewTextData,
            rating
        }

        // const review = await dispatch(createReview(payload))
        // if (review) {
        //     history.push(`/pokemon/${review.id}`);
        //     hideForm();
        // }
        const res = await csrfFetch(`/api/restaurants/${id}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
        })
        const rev = await res.json();
        console.log(rev)
        setPersonalReview(true);
        setReviewText(rev.text);
        setRating(rev.rating)
        console.log(payload)
    };

    console.log(reviews)

    const handleCancelClick = (e) => {
        e.preventDefault();
        hideForm();
    };
    if (!restaurant) return null;

    return (
        <nav>

            <div id="Restaurant">
                <div
                    className="resImg"
                // style={{ backgroundImage: `url('${restaurant.photos}')` }}
                >
                </div>

                <span className="resName">
                    {restaurant.name}
                </span>
                <h2 id="reviewsHead">
                    Reviews
                </h2>
                <div id="reviewId">

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Add Review"
                            value={reviewTextData}
                            onchange={updateText} />
                        <input
                            type="number"
                            placeholder="Rate this Restaurant"
                            min="0"
                            max="5"
                            required
                            value={rating}
                            onChange={updateRating} />
                        <button type="submit">Create Review</button>
                    </form>
                    <div class="sl1es">
                        {reviews.map(review => {
                            return (
                                <div id="reviewFirst">
                                    <span id="reviewUser">
                                        {review.User.username}
                                    </span>
                                    <div>
                                        Rating:{review.rating}
                                    </div>
                                    <div id="reviewSecond">
                                        {review.reviewText}

                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div >

        </nav>
    );
}

export default RestaurantsId;
