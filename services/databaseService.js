import { database } from "./appwrite";

const databaseService = {
    // List Notes
    async listNotes(dbId, collectionId) {
        try {
            // database.listDocuments() is a built-in method
            const response = await database.listDocuments(dbId, collectionId);
            console.log(`DBS: here is the response of listed notes: ${response}`);
            return response.documents || [];
        } catch (error) {
            console.error(`Error fetching documents: ${error.message}`);
            return { error: error.message };
        }
    },

    // Create Notes
    async createNote(dbId, collectionId, data, id = null) {
        try {
            // database.createDocument() is a built-in method
            console.log(`DBS: here is the data to add: \\\nDatabase: ${dbId}\\\nCollection: ${collectionId}\\\nData: ${JSON.stringify(data)}\\\nID: ${id}`);
            return await database.createDocument(dbId, collectionId, id || undefined, data);
        } catch (error) {
            console.error(`Error creating notes: ${error.message}`);
            return { error: error.message };
        }
    },
};

export default databaseService;
