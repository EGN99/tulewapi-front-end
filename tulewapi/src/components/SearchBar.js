import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar({ handleRouting = true }){

    const [searchTerm, setSearchTerm] = useState('');
    let navigate = useNavigate();

     const handleSubmit = (e) => {
          e.preventDefault();
          if (searchTerm.length > 0) {

            localStorage.setItem('searchTerm', searchTerm);
            if (handleRouting) {
                navigate('/SearchResults');
            }else{

            }
          } else {
            alert('Input something to search');
          }
        };

 return(
    <>
        <div className="searchBar">
            <form onSubmit={handleSubmit}>
                <input className="miniBar" type="tetx" placeholder="Search" onChange={(e)=>setSearchTerm(e.target.value)}/>
                <button className="miniBtn"><i className="fa fa-search"></i></button>
            </form>
        </div>
    </>
 )
}
export default SearchBar;