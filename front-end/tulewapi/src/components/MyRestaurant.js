import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";


const MyRestaurant=()=>{

    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    const getRestaurant=()=>{

        fetch(`http://localhost:8001/restaurant`)
            .then(response => response.json())
            .then(data => {
            const myRestaurant = data.find(restaurant => restaurant.id === id);
            setRestaurant(myRestaurant);
            console.log(data);
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
                <p>{restaurant.description}</p>
                {/* display other details */}
            </div>
            ) : (
                <p>Loading...</p>
        )}
        </div>
    )
}

export default MyRestaurant;