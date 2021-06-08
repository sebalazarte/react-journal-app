import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const { active: note } = useSelector(state => state.notes);
    const [values, handleInputChange, reset] = useForm(note);
    const { body, title, url } = values;

    const activeId = useRef(note.id);

    useEffect(() => {
        if(note.id !== activeId.current){
            reset(note);
            activeId.current = note.id
        }
    }, [note, reset])

    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="note__content">
                <input
                    type="text"
                    placeholder="some awsone title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder="What happend today?"
                    className="notes__textarea"
                    value={body}
                    onChange={handleInputChange}>
                </textarea>

                {
                    url &&
                    <div className="notes__image">
                        <img
                            src={url}
                            alt="arbol"
                        />
                    </div>
                }

            </div>
        </div>
    )
}
