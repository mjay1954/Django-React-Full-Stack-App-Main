// src/components/Note.jsx
import React from "react";
import "../styles/Note.css"

function Note({ note, onDelete }) {
    const formattedDate = note.created_at ? new Date(note.created_at).toLocaleString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }) : 'Date not available';

    return (
        <div className="note-container">
            <p className="note-title">{note.title}</p>
            <p className="note-content">{note.content}</p>
            <p className="note-date">{formattedDate}</p>
            <p className="note-author">By: {note.author}</p>
            {note.is_author && (
                <button className="delete-button" onClick={() => onDelete(note.id)}>
                    Delete
                </button>
            )}
        </div>
    );
}

export default Note;