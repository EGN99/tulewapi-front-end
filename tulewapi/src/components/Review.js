import React, {useEffect, useState} from 'react';

const Review=()=>{

    const [myReview,setmyReview]=useState("")
    const [myReviews,setmyReviews]=useState([])

    useEffect(() => {
        fetch('http://localhost:9292/app_reviews')
        .then((res) => res.json())
        .then((data) => {
            setmyReviews(data);
        });
     }, []);

    const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:9292/app_reviews', {
      method: 'POST',
      body: JSON.stringify({ myReview }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        setmyReviews([...myReviews, data]);
        setmyReview('');
       
      });
  };

        const handleDelete = (reviewId) => {
            fetch(`http://localhost:9292/app_reviews/${reviewId}`, {
            method: 'DELETE',
            })
            // fetch(`http://localhost:9292/app_reviews/${reviewId}?userId=${user.id}`, {
            //     method: 'DELETE',
            //     })
            .then(() => {
                const updatedReviews = myReviews.filter(review => review.id !== reviewId)
                setmyReviews(updatedReviews);
                
            });
        };

    return (

        <div>
            
             <div
             style={{width: '80%',
                    height: '780px',
            }}
             className ="reviewForm">
            <form onSubmit={handleSubmit}>
                <div style={{alignItems:'center',
            }}>
                <div style={{
                        padding:'25px',
                        marginLeft:'380px',
                }} className="mb-3">
                <label htmlFor="review"  className="form-label">Leave a review with us</label>
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
                {myReviews.map((review) => (

                <li key={review.id} style={{textColor:'black',
            border:'1px solid #ccc',
            backgroundColor: '#f2f2f2',
            padding: '15px',
            fontSize:'14px',
            margin: '5px 5px',
                }}>
                    {review.user.username}: {review.comment}<button onClick={() => handleDelete(review.id)} style={{float:'right',padding:'2px', paddingLeft:'5px',paddingRight:'5px',}} className="deletBtn btn btn-danger"><i style={{fontSize:"15px",}} className="fa fa-trash"></i></button></li>
                ))}
            </ul>


             </div>
        </div>
           
    )
}

export default Review;