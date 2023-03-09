import React, {useState} from 'react';
import LoginForm from './LoginForm';


const Navbar=()=>{

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


    return(
    <>
    <nav className="navbar navbar-expand-lg">
    <ul 
    style={{
      marginLeft:'20px',
      fontSize:'16px',
    }}
    className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
        <a className="nav-link active" href="/#"><i className="fa fa-home" aria-hidden="true"></i></a>
    </li>
        <li className="nav-item">
          <a className="nav-link active" href="/Explore">Explore <i className="fa fa-paper-plane" aria-hidden="true"></i></a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" href="/Favorites">My Favorites <i className="fa fa-heart" aria-hidden="true"></i></a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" href="/Review">Reviews <i className="fa fa-comments" aria-hidden="true"></i></a>
        </li>
    </ul>
        <div>
          <a style={{
          marginRight:'8px',
          fontSize:'18px',
        }} className="btn" href="/Admin">
            <i className="fa fa-cog" aria-hidden="true"></i>
          </a>
        <button 
        style={{
          marginRight:'20px',
          fontSize:'12px',
        }}
        className="btn btn-dark" onClick={handleLogin}>Login <i className="fa fa-user-circle" aria-hidden="true"></i></button> {isModalOpen && (
        <LoginForm handleCloseModal={handleCloseModal} />
      )}
        </div>
    </nav>
    </>
    )
}

export default Navbar;
