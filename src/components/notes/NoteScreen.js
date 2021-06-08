import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const dispatch = useDispatch();
    const { active: note } = useSelector(state => state.notes);
    const [values, handleInputChange, reset] = useForm(note);
    const { body, title, id } = values;

    const activeId = useRef(note.id);

    useEffect(() => {
        if(note.id !== activeId.current){
            reset(note);
            activeId.current = note.id
        }
    }, [note, reset])

    useEffect(() => {
        dispatch(activeNote(values.id, {...values}));
    }, [values, dispatch])

    const handleDelete = () => {
        dispatch(startDeleting(id));
    }

    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="note__content">
                <input
                    type="text"
                    placeholder="some awsone title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder="What happend today?"
                    className="notes__textarea"
                    name="body"
                    value={body}
                    onChange={handleInputChange}>
                </textarea>

                {
                    (note.url) &&
                    <div className="notes__image">
                        <img
                            src={note.url}
                            alt="arbol"
                        />
                    </div>
                }

            </div>
            <button
                className="btn btn-danger"
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    )
}
