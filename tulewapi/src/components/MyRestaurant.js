import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";


const MyRestaurant=()=>{

    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [myReview,setmyReview]=useState("")

    const getRestaurant=()=>{

        fetch(`http://localhost:9292/myrestaurant/${id}`)
            .then(response => response.json())
            .then(data => {
                setRestaurant(data);
        }
        );
    }

    useEffect(() => {
        getRestaurant();
    }, [id]);

     const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:9292/reviews', {
        method: 'POST',
        body: JSON.stringify({ myReview }),
        headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => res.json())
        .then((data) => {
            setmyReview('');
            console.log(data);
        });
    };

    return(
        <div>
        {restaurant ? (
            <div>
                <div style={{textAlign:'center'}}>
                    <h2>{restaurant.name}</h2>
                    <img style={{height:'550px', width:'auto',}} src={restaurant.image_url} alt={restaurant.name} />
                    <p>Address:{restaurant.address}</p>
                </div>
                <div style={{width: '80%'}}>
                    <form onSubmit={handleSubmit}>
                        <div style={{alignItems:'center',
                    }}>
                        <div style={{
                                padding:'25px',
                                marginLeft:'380px',
                        }} className="mb-3">
                        <label htmlFor="review-restaurant"  className="form-label">Leave a review of {restaurant.name}</label>
                        <input  style={{
                                padding:'10px',
                                borderRadius:'15px',
                        }} value={myReview} onChange={(e) => setmyReview(e.target.value)} type="text" placeholder='Tell us everything !' className="form-control" id="review"/>
                        <button style={{
                                padding:'15px',
                                marginTop:'15px',
                                marginLeft:'480px',
                                borderRadius:'5px',
                                fontSize:'13px',
        
                        }} type="submit" className="btn btn-dark" >Submit</button>
                        </div>
                    
                        
                        </div>

                    </form>
                        <ul style={{listStyleType:'none', marginLeft:'370px',}}className="reviewList">
                            {restaurant.reviews.map((review) => (
                            <li key={review.id} style={{textColor:'black',
                                border:'1px solid #ccc',
                                backgroundColor: '#f2f2f2',
                                padding: '5px',
                                fontSize:'14px',
                                margin: '5px 5px',
                                }}>
                                <div>
                                <h5>{review.user.username}</h5>
                                <p>{review.comment}</p>
                                </div>
                            </li>
                            ))}
                        </ul>
                        <div style={{minHeight:'100px'}}></div>
                </div>
                {/* display other details */}
            </div>
            ) : (
                <p>Loading...</p>
        )}
        </div>
    )
}

export default MyRestaurant;