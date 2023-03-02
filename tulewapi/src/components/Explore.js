import React, { useEffect, useState} from 'react';

function Explore(){

    const [restaurants, setRestaurants] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const isFavorite = (id) => favorites.includes(id);
    useEffect (()=> {
      fetch('http://localhost:9292/restaurants')
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data);
      })})

    const addToFavorites = async (id) => {
        if (isFavorite(id)) {

          setFavorites(favorites.filter((favoriteId) => favoriteId !== id));
          const response = await fetch(`http://localhost:9292/restaurants/${id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ isFavorite: false }),
          })
              // handle the response as needed
              .then(response => response.json())
              .then(data => {
              console.log(data)
          });
        } else {

          setFavorites([...favorites, id]);
          const response = await fetch(`http://localhost:9292/restaurants/${id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ isFavorite: true }),
          })
              // handle the response as needed
              .then(response => response.json())
              .then(data => {
              console.log(data)
          });
        }
        };

    return (

        <>
        <p style={{textAlign:'center'}}>Away we go...</p>
        <div className="restaurant-card-container" style={{ width:'90%',}}>
        
        <div className="ui four column grid" ></div>
        <div style={{marginLeft:'30px', textAlign:'center'}}>
            
            <div style={{paddingLeft:'140px',}} className="row">
          {restaurants.map((restaurant) => (
            <div
              className="col-md-5" id="restaurant-card"
              key={restaurant.id}         
            >
              <img style={{height:'auto', width:'100%',}} src={restaurant.image_url} alt={restaurant.name} />
              <h2 style={{fontSize:'18px', paddingTop:"10px",}}>{restaurant.name}</h2>
              <p style={{fontSize:'12px', paddingTop:"10px",}} className="card-text">{restaurant.address}</p>
              <div style={{alignItems:'inline',}}>
                <button style={{fontSize:'25px',paddingTop:'0px', float:'left',paddingRight:'100px',}} className="btn" onClick={() => addToFavorites(restaurant.id)}>
                    <i className={`${isFavorite(restaurant.id) ? "fas" : "far"} fa-heart`}></i>
                </button>
                  <a href={`/MyRestaurant/${restaurant.id}`} style={{fontSize:'12px',marginTop:'10px',}} className='btn btn-dark btn-sm'>Visit</a>
              </div>
              </div>
            ))}
          </div>
        </div>
        </div>
        </>
        
    )
}

export default Explore;