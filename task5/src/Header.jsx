import React from 'react'
import{ Link } from 'react-router-dom'

const Header =() => {
    return<React.Fragment>
        <div className='Header flex mt-5 p-5 gap-5 text-lg'>
            <li>
                <Link to = "/HomePage">
                    <button className='bg-green-400 rounded-md border-gray-500 hover:bg-green-950'>HomePage</button>
                    </Link>
            </li>

            <li>
                <Link to = "/TrackTask">
                <button className='bg-green-400 rounded-md border-gray-500 hover:bg-green-950'>
                TrackTask</button>
                </Link>
            </li>
        </div>
    </React.Fragment>
}

export default Header
  