import { FlatList } from "react-native";
import NoteItem from "./NoteItem";

const NoteList = ({ notes }) => {
    // <View>
        {/* Display a list of notes */}
        <FlatList
            // Provide the data for the list
            data={notes}
            // Provide a unique identifier for each item in the list
            keyExtractor={(item) => item.id}
            // Render each item in the list
            renderItem={({ item }) => <NoteItem note={item} />}
        />
    // </View>
}

export default NoteList;