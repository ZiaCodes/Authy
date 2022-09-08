import React from 'react'
import {TbLogout} from 'react-icons/tb'
import {CgProfile} from 'react-icons/cg';
import {AiOutlineHome} from 'react-icons/ai'
import {RiDashboardLine} from 'react-icons/ri'
import {IoLogoFlickr} from 'react-icons/io'
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <section className='Navigation'>
            <div className='Logo'>
              <Link to='/'>
              <IoLogoFlickr/>
              </Link>
            </div>
            <ul className='nav-list'>
                <li>
                  <Link to='/'>
                  <AiOutlineHome/>
                  </Link>
                  </li>
                <li>
                  <Link to='/Dashboard'>
                  <RiDashboardLine/>
                  </Link>
                  </li>
                <li>
                  <Link to="/profile">
                  <CgProfile/>
                  </Link>
                  </li>
                <li>
                  <Link to='/logout'>
                  <TbLogout/>
                  </Link>
                  </li>
            </ul>
        </section>
  )
}

export default Nav