import {React} from 'react';

function SearchBar(){

 return(
    <>
        <div className="SearchBar">
            <form>
                <input className="mini-bar" type="tetx" placeholder="Search"/>
                <button className="mini-btn"><i className="fa fa-search"></i></button>
            </form>
        </div>
    </>
 )
}
export default SearchBar;