import React from 'react'
import {Link} from 'react-router-dom'
const PageNotFound = () => {
  return (
    <div style={{ backgroundImage: `url('./bg-img.jpg')` }} className='page-not-found'>
        <header className='navbar container'>
            <ul className='nav-left'>
                <li>
                    <Link to="/">
                        <img src='./logo.png' alt='logo' className='logo' />
                    </Link>
                </li>
            </ul>
        </header>
        <div>
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <Link to="/">Back to Home</Link>
        </div>
    </div>
  )
}

export default PageNotFound