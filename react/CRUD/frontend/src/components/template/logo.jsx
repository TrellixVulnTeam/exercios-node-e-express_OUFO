import './logo.css'
import React from 'react'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
export default props =>
    <aside className='logo'>
        <Link to="http://" className='logo'>
            <img src={logo} />
        </Link>
    </aside>