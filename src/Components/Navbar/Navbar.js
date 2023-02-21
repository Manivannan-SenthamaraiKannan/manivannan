import React from 'react'
import '../../Assets/Styles/Navbar/Navbar.css'
import "bootstrap/js/src/collapse.js";

const Navbar = () => {
  // const collapseButtonHandler = () => {
  // }
  return (
    <nav className="navbar navbar navbar-expand-md navbar-light fixed-top">
      <div className="container">
        <a className="navbar-brand nav" href="/">M<span className='dot'>.</span></a>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse d-flex justify-content-end" id="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#!"><i class="bi bi-house"></i><span>Home</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!"><i class="bi bi-person"></i><span>About</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!"><i class="bi bi-laptop"></i><span>Works</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!"><i class="bi bi-vector-pen"></i><span>My Blog</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!"><i class="bi bi-file-text"></i><span>Resume</span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;