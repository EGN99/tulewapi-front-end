import React, { useEffect, useState} from 'react';
import SearchBar from './SearchBar';

function SearchResults(){

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Get the search query from local storage
    const searchTerm = localStorage.getItem('searchTerm');

    // Fetch data using the search query
    fetch(`http://localhost:9292/restaurants`)
      .then((response) => response.json())
      .then((data) => {

        const results=data.filter((restaurant)=>restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(results);
      })
      .catch((error) => {
        console.error(error);
      });
    }, []);
  
    
    return (
        <div>
        <div className="row">
            {/* <SearchBar handleRouting={true}/> */}
            {searchResults.map((restaurant) => (
            <div
                className="col-md-2" id="restaurant-card"
                key={restaurant.id}         
            >
                <img style={{height:'auto', width:'100%',}} src={restaurant.image_url} alt={restaurant.name} />
                <h2 style={{fontSize:'18px', paddingTop:"10px",}}>{restaurant.name}</h2>
                <p style={{fontSize:'12px', paddingTop:"10px",}} className="card-text">{restaurant.description}</p>
                <div style={{alignItems:'inline',}}>
                {/* <button style={{fontSize:'25px',paddingTop:'0px', float:'left',paddingRight:'100px',}} className="btn" onClick={() => addToFavorites(restaurant.id)}>
                    <i className={`${isFavorite(restaurant.id) ? "fas" : "far"} fa-heart`}></i>
                </button> */}
                    <a href={`/MyRestaurant/${restaurant.id}`} style={{fontSize:'12px',marginTop:'10px',}} className='btn btn-dark btn-sm'>Visit</a>
                </div>
            </div>
            ))}
        <div style={{minHeight:'100px'}}></div>
        </div>
        </div>
        );
}

export default SearchResults;