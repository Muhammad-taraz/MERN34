import React from 'react'
import{ Link } from 'react-router-dom'

const Header =() => {
    return<React.Fragment>
        <div className='Header'>
            <li>
                <Link to = "/HomePage">HomePage</Link>
            </li>

            <li>
                <Link to = "/About">About</Link>
            </li>

            <li>
                <Link to = "/ContactUs">ContactUs</Link>
            </li>
        </div>
    </React.Fragment>
}

export default Header
  