import databaseService from "./database.Service";
// import { ID } from "react-native-appwrite";

// AppWrite database and collection ID
const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID;
const collectionId = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID;

const noteService = {
    // Get Notes
    async getNotes() {
        const response = await databaseService.listDocuments(dbId, collectionId);
        if (response.error) {
            return { error: response.message };
        }

        return { data: response };
    },
};

export default noteService;
