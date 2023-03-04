import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar(){

    const [searchTerm, setSearchTerm] = useState('');
    let navigate = useNavigate();

     const handleSubmit = (e) => {
          e.preventDefault();
          if (searchTerm.length > 0) {
            localStorage.setItem('searchTerm', searchTerm);
            navigate('/SearchResults');
          } else {
            alert('Input something to search');
          }
        };

 return(
    <>
        <div className="SearchBar">
            <form onSubmit={handleSubmit}>
                <input className="mini-bar" type="tetx" placeholder="Search" onChange={(e)=>setSearchTerm(e.target.value)}/>
                <button className="mini-btn"><i className="fa fa-search"></i></button>
            </form>
        </div>
    </>
 )
}
export default SearchBar;