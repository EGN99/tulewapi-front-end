import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Home (){
  const [searchTerm, setSearchTerm] = useState('');
  let navigate = useNavigate();


      const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('searchTerm', searchTerm);
        navigate('/SearchResults')
        
      };

    return (

      <div>
        <div style={{backgroundImage: `url("https://www.businesslist.co.ke/img/cats/restaurants.jpg")`, height:"721px",}}>
          <div  className="searchArea" >
        <form onSubmit={handleSubmit} style={{
          marginTop:'300px',
        }} className="d-flex" role="search">
        <input style={{
          padding:'10px',
          marginLeft:'200px',
        }}onChange={(e)=>setSearchTerm(e.target.value)}
          className="form-control me-2" type="search" placeholder="Find Your Favorite Restaurants" aria-label="Search"/>
          
        <button style={{width:'70px',fontSize:'12px', padding:'0',}} className="btn btn-warning" >Let's Go </button>
        </form>
        </div> 
        </div>
       </div>
);  
}

export default Home;