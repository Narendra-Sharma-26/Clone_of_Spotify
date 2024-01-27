import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { BsMusicNoteList, BsTrash } from 'react-icons/bs'
import { PlayList } from './PlayList'

const Menuplaylist = () => {
    return (
        <div className='PlayListContainer'>
            <div className='nameContainer'>
                <p>PlayList</p>
                <i><FaPlus /></i>
            </div>
            <div className='PlayListScroll'>
                {
                    PlayList && PlayList.map((list) => (
                        <div key={list.id} className='playList'>
                            <i className='list'><BsMusicNoteList /></i>
                            <p>{list.name}</p>
                            <i className='trash'><BsTrash /></i>
                        </div>
                    ))
                }

            </div>
        </div>

    )
}

export { Menuplaylist } 