import AppStyles from "@/src/styles";
import { Text, View } from 'react-native';

const NoteItem = ({ note }) => {
    return (
        <View style={AppStyles.noteContainer}>
            <Text style={AppStyles.noteHeading}>{note.noteTitle}</Text>
            <Text style={AppStyles.noteBody}>{note.noteBody}</Text>
        </View>
    )
}

export default NoteItem;