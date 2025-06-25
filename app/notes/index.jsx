import AddNoteModal from "@/components/AddNoteModal";
import NoteList from "@/components/NoteList";
import AppStyles from "@/src/styles";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const NoteScreen = () => {
    const [notes, setNotes] = useState([
        { id: '1', title: 'Note One', body: "This is note 1" },
        { id: '2', title: 'Note Two', body: "This is note 2" },
        { id: '3', title: 'Note Three', body: "This is note 3" },
    ])
    const [modalVisible, setModalVisible] = useState(false);
    const [noteTitle, setNoteTitle] = useState("");
    const [noteBody, setNoteBody] = useState("");

    const addNote = () => {
        if (noteTitle.trim() === "" && noteBody === "") return;
        setNotes((prevNotes) => [
            ...prevNotes,
            { id: Date.now.toString(), title: noteTitle, body: noteBody }
        ])
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