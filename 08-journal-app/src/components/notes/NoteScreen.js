import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>

        <NotesAppBar />

        <div className='notes__content'>
            <input type="text" 
            placeholder='Something'
            className='notes__title-input'
            autoComplete='off'
            />

            <textarea
            placeholder='What happened today'
            className='notes__textarea'
            >

            </textarea>

            <div className='notes__image'>
                <img
                src="https://images.hdqwalls.com/download/waterfall-iceland-wide-1920x1200.jpg"
                alt="image"
                />
            </div>
        </div>

    </div>
  )
}
