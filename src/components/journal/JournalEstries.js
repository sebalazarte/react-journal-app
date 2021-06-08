import React from 'react'
import { useSelector } from 'react-redux';
import { JournalEntry } from './JournalEntry';

export const JournalEstries = () => {

    const { notes } = useSelector(state => state.notes);

    return (
        <div className="journal__entries  animate__animated animate__bounceInLeft ">
            {
                notes.map(note => (
                    <JournalEntry 
                        key={note.id} 
                        {...note}/>
                ))
            }
        </div>
    )
}
