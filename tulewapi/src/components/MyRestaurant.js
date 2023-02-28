import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";


const MyRestaurant=()=>{

    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    const getRestaurant=()=>{

        fetch(`http://localhost:9292/MyRestaurant/${id}`)
            .then(response => response.json())
            .then(data => {
                setRestaurant(data);
        }
        );
    }

    useEffect(() => {
        getRestaurant();
    }, [id]);

    

    return(
        <div>
        {restaurant ? (
            <div>
                <h2>{restaurant.name}</h2>
                <p>{restaurant.address}</p>
                <ul>
                    {restaurant.reviews.map((review) => (
                    <li key={review.id}>
                        {review.user.username}: {review.comment}
                    </li>
            ))}
          </ul>
                {/* display other details */}
            </div>
            ) : (
                <p>Loading...</p>
        )}
        </div>
    )
}

export default MyRestaurant;