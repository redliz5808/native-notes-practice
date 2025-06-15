import AppStyles from "@/src/styles";
import { Text, View } from 'react-native';

const NoteItem = ({ note }) => {
    <View style={AppStyles.noteContainer}>
        <Text style={AppStyles.noteHeading}>{note.title}</Text>
        <Text style={AppStyles.noteBody}>{note.body}</Text>
    </View>
}

export default NoteItem;