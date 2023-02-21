import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
      <footer className='py-3 my-4'>
        <ul className='nav justify-content-center border-bottom pb-3 mb-3 gap-2'>
          {/* <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li> */}
          <li className='nav-item'><a href="#!" className='nav-link px-2 text-muted'>Home</a></li>
          <li className='nav-item'><a href="#!" className='nav-link px-2 text-muted'>About</a></li>
          <li className='nav-item'><a href="#!" className='nav-link px-2 text-muted'>Works</a></li>
          <li className='nav-item'><a href="#!" className='nav-link px-2 text-muted'>My Blogs</a></li>
          <li className='nav-item'><a href="#!" className='nav-link px-2 text-muted'>Resume</a></li>
        </ul>
        <div className='row'>
          <div className='col-md-4 d-flex align-items-center justify-content-center'>
            <p>Designed & Developed Manivannan.</p>
          </div>
          <div className='col-md-4 d-flex align-items-center justify-content-center'>
            <p>Copyright&#169; 2023 </p>
          </div>
          <div className='col-md-4 d-flex align-items-center justify-content-center'>
            <ul className='d-flex p-0 m-0'>
              <li style={{"list-style-type" : "none"}}><a href='#!' className='mx-3' style={{color : 'black'}}><i className='bi bi-github'></i></a></li>
              <li style={{"list-style-type" : "none"}}><a href='#!' className='mx-3' style={{color : 'black'}}><i className='bi bi-linkedin'></i></a></li>
              <li style={{"list-style-type" : "none"}}><a href='#!' className='mx-3' style={{color : 'black'}}><i className='bi bi-medium'></i></a></li>
              <li style={{"list-style-type" : "none"}}><a href='#!' className='mx-3' style={{color : 'black'}}><i className='bi bi-quora'></i></a></li>
              <li style={{"list-style-type" : "none"}}><a href='#!' className='mx-3' style={{color : 'black'}}><i className='bi bi-twitter'></i></a></li>
              <li style={{"list-style-type" : "none"}}><a href='#!' className='mx-3' style={{color : 'black'}}><i className='bi bi-cloud'></i></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;