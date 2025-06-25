import { ID } from "react-native-appwrite";
import databaseService from "./databaseService";

// AppWrite database and collection ID
const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID;
const collectionId = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID;

const noteService = {
    // Get Notes
    async getNotes() {
        console.log("NS: hello, we're getting notes!");
        const response = await databaseService.listNotes(dbId, collectionId);
        if (response.error) {
            return { error: response.message };
        }
        console.log(`NS: here is the response of notes: ${response}`);

        return { data: response };
    },
    // Add new note
    async addNote(noteTitle, noteBody) {
        console.log("NS: hello, we're adding a note!");
        // Check that Note Title isn't empty (because the field is required)
        if (!noteTitle) {
            return { error: "Note Title cannot be empty" };
        }

        // Create note object
        const data = {
            noteTitle: noteTitle,
            noteBody: noteBody != null || noteBody != undefined ? noteBody : "",
            // Date formatted for database use
            created: new Date().toISOString(),
        };

        console.log(`NS: here is some raw data: ${JSON.stringify(data)}`);

        // Use the database service to create the note in the AppWrite DB
        const response = await databaseService.createNote(dbId, collectionId, data, ID.unique());

        if (response?.error) {
            return { error: response.error };
        }
        console.log(`NS: here is the response creating the note: ${JSON.stringify(response)}`);

        return { data: response };
    },
};

export default noteService;
