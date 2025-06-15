import AppStyles from "@/src/styles";
import { useState } from "react";
import { FlatList, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";

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
            {/* <NoteList notes={notes} /> */}
            <FlatList
                // Provide the data for the list
                data={notes}
                // Provide a unique identifier for each item in the list
                keyExtractor={(item) => item.id}
                // Render each item in the list
                renderItem={({ item }) => (
                    <View style={AppStyles.noteContainer}>
                        <Text style={AppStyles.noteHeading}>{item.title}</Text>
                        <Text style={AppStyles.noteBody}>{item.body}</Text>
                    </View>
                )}
            />
            
            {/* ADD A NOTE BUTTON */}
            <View style={AppStyles.buttonContainer}>
                <TouchableOpacity style={AppStyles.primaryBtn} onPress={() => setModalVisible(true)}>
                    <Text style={AppStyles.primaryBtnText}>Add Note</Text>
                </TouchableOpacity>
            </View>

            {/* MODAL FOR ADDING NOTES */}
            <Modal
                // Base the visibility of the modal on the state (controlled by the button)
                visible={modalVisible}
                animationType="slide"
                transparent
                // When the modal closes, set the modal's visibility state back to hidden
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={AppStyles.modalContainer}>
                    <View style={AppStyles.modalContent}>
                        <Text style={AppStyles.inputLabel}>Give your note a title:</Text>
                        <TextInput
                            style={AppStyles.textInput}
                            placeholder="A Concise Name 🤔"
                            onChangeText={titleText => setNoteTitle(titleText)}
                            defaultValue={noteTitle}
                        />
                        <Text style={AppStyles.inputLabel}>Enter the thing you want to remember:</Text>
                        <TextInput
                            style={AppStyles.textInputArea}
                            placeholder="Note it NOW! 😉"
                            onChangeText={bodyText => setNoteBody(bodyText)}
                            defaultValue={noteBody}
                        />
                        <View style={AppStyles.modalBtnsContainer}>
                            <TouchableOpacity style={AppStyles.primaryBtnModal} onPress={addNote}>
                                <Text style={AppStyles.primaryBtnModalText}>Save it!</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={AppStyles.secondaryBtnModal} onPress={() => setModalVisible(false)}>
                                <Text style={AppStyles.secondaryBtnModalText}>Nevermind</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default NoteScreen;