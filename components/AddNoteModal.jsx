import AppStyles from "@/src/styles";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";

const AddNoteModal = ({
    modalVisible,
    setModalVisible,
    noteTitle,
    setNoteTitle,
    noteBody,
    setNoteBody,
    addNote
}) => {
    return (
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
                        onChangeText={setNoteTitle}
                        value={noteTitle}
                    />
                    <Text style={AppStyles.inputLabel}>Enter the thing you want to remember:</Text>
                    <TextInput
                        style={AppStyles.textInputArea}
                        placeholder="Note it NOW! 😉"
                        onChangeText={setNoteBody}
                        value={noteBody}
                    />
                    <View style={AppStyles.modalBtnsContainer}>
                        <TouchableOpacity style={AppStyles.primaryBtnModal} onPress={addNote}>
                            <Text style={AppStyles.primaryBtnModalText}>Save it!</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyles.secondaryBtnModal} onPress={() => resetModal(setNoteTitle, setNoteBody, setModalVisible)}>
                            <Text style={AppStyles.secondaryBtnModalText}>Nevermind</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const resetModal = (setNoteTitle, setNoteBody, setModalVisible) => {
    setNoteTitle("");
    setNoteBody("");
    setModalVisible(false);
}

export default AddNoteModal;