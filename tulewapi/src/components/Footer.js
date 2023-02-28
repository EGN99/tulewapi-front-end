import React from "react";

const Footer=()=>{

    return(
        <div className="fixed-bottom"
        style={{
            backgroundColor: "coral",
            minHeight:'80px',
          }}>
            <h3
            style={{
                textColor: "black",
                paddingTop:"5px",
                fontSize:"15px",
                textAlign: "center",
              }}>TuleWapi</h3>

            <p
            style={{
                textColor: "black",
                paddingTop:"5px",
                fontSize:"12px",
                textAlign: "center",
              }}>Find Popular Restaurants Near You</p>

             <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
      <div style={{display:'inline-flex',
      fontSize:'12px',
      marginBottom:'10px',
      color:'black',}}>
          {/* <a className="socials"><i className="fa-brands fa-twitter"></i></a> */}
          <a style={{paddingRight:'10px',color:'black',}} className="socials"><i className="fab fa-facebook-f"></i></a>
          <a style={{paddingLeft:'1px',color:'black',}} className="socials"><i className="fa fa-envelope" aria-hidden="true"></i></a>
        </div>

        </div>
        </div>
    )
}

export default Footer;
