import React, { useEffect, useState} from 'react';


function Home (){
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);
  const isFavorite = (id) => favorites.includes(id);

  useEffect(() => {
  const fetchData = async () => {
    const res = await fetch('http://localhost:9292/restaurants');
    const data = await res.json();
    const updatedFavorites = data.filter(item => item.isFavorite).map(item => item.id);
    setFavorites(updatedFavorites);
  };
  fetchData();
}, []);


  const handleSearch=(searchTerm)=> {
      fetch('http://localhost:9292/restaurants')
      .then((response) => response.json())
      .then((data) => {
        const results=data.filter((restaurant)=>restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()));

        setSearchResults(results);
      });}

      const handleSubmit = (e) => {
      e.preventDefault();
      handleSearch(searchTerm);
      };

      
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

  //   const handleVisitClick = () => {

  //   fetch(`http://localhost:9292/restaurants/restaurants/$id}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       // Handle the restaurant data returned from the backend API
  //       console.log(data);
  //     })
  //     .catch(error => {
  //       // Handle any errors that occurred during the fetch request
  //       console.error(error);
  //     });
  // }

    return (
      
      <div>

        <div style={{backgroundImage: `url("https://www.businesslist.co.ke/img/cats/restaurants.jpg")`, height:"450px",}}>
          <div  className="searchArea" >
        <form onSubmit={handleSubmit} style={{
          marginTop:'240px',
        }} className="d-flex" role="search">
        <input style={{
          padding:'10px',
          marginLeft:'200px',
        }}onChange={(e)=>setSearchTerm(e.target.value)}
          className="form-control me-2" type="search" placeholder="Find Your Favorite Restaurants" aria-label="Search"/>
          
        <button style={{width:'70px',fontSize:'12px', padding:'0',}} className="btn btn-warning"  type="submit">Let's Go </button>
        </form>
        </div> 
        </div>
            
        <div className="restaurant-card-container" style={{ width:'100%',}}>
        <div className="ui four column grid" >
       </div>
       </div>
        <div style={{paddingLeft:'140px',}} className="row">
          {searchResults.map((restaurant) => (
            <div
              className="col-md-2" id="restaurant-card"
              key={restaurant.id}         
            >
              <img style={{height:'auto', width:'100%',}} src={restaurant.image_url} alt={restaurant.name} />
              <h2 style={{fontSize:'18px', paddingTop:"10px",}}>{restaurant.name}</h2>
              <p style={{fontSize:'12px', paddingTop:"10px",}} className="card-text">{restaurant.description}</p>
              <div style={{alignItems:'inline',}}>
                <button style={{fontSize:'25px',paddingTop:'0px', float:'left',paddingRight:'100px',}} className="btn" onClick={() => addToFavorites(restaurant.id)}>
                    <i className={`${isFavorite(restaurant.id) ? "fas" : "far"} fa-heart`}></i>
                </button>
                  <a href={`/MyRestaurant/${restaurant.id}`} style={{fontSize:'12px',marginTop:'10px',}} className='btn btn-dark btn-sm'>Visit</a>
              </div>
              </div>
            ))}
          </div>

       <span>
      <div style={{minHeight:'100px'}}></div>
       </span>
       </div>

);

  
}

export default Home;