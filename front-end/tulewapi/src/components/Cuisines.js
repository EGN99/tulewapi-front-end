import React from 'react';

function Cuisines(){

    return (
        <div style={{marginLeft:'30px', textAlign:'center'}}>
            <h1>Cuisines</h1>
            <p>What cuisine do you want to experience ?</p>
              <div >
                  <button style={{margin:'10px',}} id="BBQ" type="button" className="btn btn-outline-warning"  >BBQ Restaurants</button>
                  <button style={{margin:'10px',}} id="chinese" type="button" className="btn btn-outline-warning"  >Chinese Restaurants</button>
                  <button style={{margin:'10px',}} id="drinks" type="button" className="btn btn-outline-warning" >Cocktail Bars</button>
                  <button style={{margin:'10px',}} id="fastFood" type="button" className="btn btn-outline-warning"   >Pizza Places</button>
                  <button style={{margin:'10px',}} id="soup" type="button" className="btn btn-outline-warning"  >Soup Bars</button>
                 </div>
        </div>
    )
}

export default Cuisines;