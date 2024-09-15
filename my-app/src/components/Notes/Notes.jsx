import React, { useState, useEffect } from "react";

const Notes = () => {
    const [note, setNote] = useState(""); // Note actuelle
    const [notes, setNotes] = useState([]); // Liste des notes

    // Charger les notes depuis localStorage
    useEffect(() => {
      const savedNotes = localStorage.getItem("global-notes");
      if (savedNotes) {
        setNotes(JSON.parse(savedNotes));
      }
    }, []);

    // Sauvegarder les notes dans localStorage
    useEffect(() => {
      localStorage.setItem("global-notes", JSON.stringify(notes));
    }, [notes]);

    // Ajouter une nouvelle note
    const addNote = () => {
      if (note) {
        setNotes([...notes, note]);
        setNote(""); // Réinitialiser le champ de note
      }
    };

    // Supprimer une note
    const deleteNote = (indexToDelete) => {
      setNotes(notes.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div className="notes-section">
            <h3>Notes personnelles</h3>
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>
                        {note}{" "}
                        <button onClick={() => deleteNote(index)}>Supprimer</button>
                    </li>
                ))}
            </ul>

            <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Ajouter une note"
            />
            <button onClick={addNote}>Ajouter</button>
        </div>
    );
};

export default Notes;
