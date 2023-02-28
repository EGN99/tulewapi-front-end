import React, {useEffect, useState} from 'react';

const Favorites=()=>{

const fetchData = () => {
    fetch('http://localhost:9292/favorites')
      .then((response) => response.json())
      .then((data) => {
        const favoriteRestaurants = data.filter((restaurant) => restaurant.isFavorite === true);
        setFavorites(favoriteRestaurants);
      })
      .catch((error) => console.error(error));
    }

    useEffect(()=>{
        fetchData()
    },[])

function toggleFavorite(id) {
  fetch(`http://localhost:9292/favorites/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      isFavorite: !isFavorite
    })
  })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        fetchData()
    });
}

    const [favorites, setFavorites] = useState([]);
      const isFavorite = (id) => favorites.includes(id);
      const addToFavorites = (id) => {
        if (isFavorite(id)) {
          setFavorites(favorites.filter((favoriteId) => favoriteId !== id));
        } else {
          setFavorites([...favorites, id]);
          toggleFavorite(id);
        }
      };


    return(
        <div style={{
        marginLeft:'30px'}}>
            <h1 style={{
                fontSize:'20px',
                textAlign:'center',
            }}>Favorites</h1>
            <p style={{
                textAlign:"center",
                fontSize:'15px',
            }}>All the restaurants you liked will appear here!</p>
            <div className="restaurant-card-container" style={{ width:'100%',}}>
                <div className="ui four column grid" >
       </div>
       </div>
        <div className="row">
          {favorites.map((restaurant) => (
            <div
              className="col-md-2" id="restaurant-card"
              key={restaurant.id}         
            >
              <img style={{height:'auto', width:'100%',}} src={restaurant.image} alt={restaurant.name} />
              <h2 style={{fontSize:'18px', paddingTop:"10px",}}>{restaurant.name}</h2>
              <p style={{fontSize:'12px', paddingTop:"10px",}} className="card-text">{restaurant.description}</p>
              <button style={{fontSize:'20px',paddingTop:'0',}} className="btn" onClick={() => addToFavorites(restaurant.id)}>
              <i className={`${isFavorite(restaurant.id) ? "far" : "fas"} fa-heart`}></i>
              </button>
              </div>
            ))}
          </div>
        </div>
    )
}

export default Favorites; 

