import React from 'react'
import '../Styles/LeftMenu.css'
import { Menu } from './Menu';
import { MenuList } from './MenuList';
import { Menuplaylist } from './Menuplaylist';
import { TrackList } from './TrackList';

import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import {BiSearchAlt} from "react-icons/bi"



const LeftMenu = () => {
  return (
    <div className='LeftMenu'>
        <div className='logoContainer'>
            <i><FaSpotify /></i>
            <h2>Spotify</h2>
            <i><FaEllipsisH /></i>
        </div>
        <div className='searchBox'>
            <i className='searchIcon'> <BiSearchAlt/> </i>
            <input type='text' placeholder='search...'></input>
        </div>
        
        <Menu title={"Menu"} menuObject={MenuList}></Menu>

        <Menuplaylist />

        <TrackList />
    </div>
  )
}

export {LeftMenu} 