import React from 'react'
import '../Styles/RightMenu.css'
import { FaCogs, FaCrown, FaRegHeart, FaSun, FaBell } from 'react-icons/fa'
import profile from '../img/profile.jpg'

const RightMenu = () => {
  return (
    <div className='rightMenu'>
      <div className='goPro'>
        <i>
          <FaCrown />
          <p>
            Go <span>Pro</span>
          </p>
        </i>

        <i>
          <FaBell />
        </i>

        <i>
          <FaRegHeart />
        </i>
      </div>
      <div className='profile'>
        <i><FaSun /></i>
        <i><FaCogs /></i>
        <div className='profileIMage'>
          <img src={profile}></img>
        </div>
      </div>
    </div>
  )
}

export {RightMenu} 