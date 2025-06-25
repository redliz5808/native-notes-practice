import AddNoteModal from "@/components/AddNoteModal";
import NoteList from "@/components/NoteList";
import noteService from "@/services/noteService";
import AppStyles from "@/src/styles";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const NoteScreen = () => {
    const [notes, setNotes] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [noteTitle, setNoteTitle] = useState("");
    const [noteBody, setNoteBody] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Grab existing notes from the DB
    const fetchNotes = async () => {
        setLoading(true);
        const response = await noteService.getNotes();

        if (response.error) {
            setError(response.err)
            Alert.alert(`Error: ${response.error}`)
        } else {
            setNotes(response.data);
            setError(null);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchNotes();
    }, [])

    // Add a new note
    const addNote = async () => {
        // Don't add blank notes
        if (noteTitle.trim() === "" && noteBody === "") return;

        // Add new notes to the existing list of notes
        const response = await noteService.addNote(noteTitle, noteBody)

        // Check for errors before adding to DB
        if (response.error) {
            Alert.alert(`Error: ${response.error}`)
        } else {
            setNotes([...notes, response.data])
        }
        // Reset note modal
        setNoteTitle("");
        setNoteBody("");
        setModalVisible(false);

    };

    return (
        <View style={AppStyles.body}>
            {/* Display a list of notes */}
            <NoteList notes={notes} />

            {/* ADD A NOTE BUTTON */}
            <View style={AppStyles.buttonContainer}>
                <TouchableOpacity style={AppStyles.primaryBtn} onPress={() => setModalVisible(true)}>
                    <Text style={AppStyles.primaryBtnText}>Add Note</Text>
                </TouchableOpacity>
            </View>

            {/* MODAL FOR ADDING NOTES */}
            <AddNoteModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                noteTitle={noteTitle}
                setNoteTitle={setNoteTitle}
                noteBody={noteBody}
                setNoteBody={setNoteBody}
                addNote={addNote}
            />

        </View>
    )
}

export default NoteScreen;