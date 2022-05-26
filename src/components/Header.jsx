import React from 'react'
import { Link } from 'react-router-dom'


export default function Header(){
    return(
        <nav className='nav'>
                {/* // {'/'} this just evaluates to a string so it doesn't matter if '/' or {'/ '} they are both strings regardless */}
            <Link to={'/'}>
                <div>People App</div>
            </Link>
        </nav>
    )

}