import { Platform } from 'react-native';
import { Client, Databases } from 'react-native-appwrite';

const config = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_POJECT_ID,
    db: process.env.EXPO_PUBLIC_APPWRITE_DB_ID,
    collection: {
        notes: process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID
    }
}

const client = new Client()
    .setEndpoint(config.endpoint)
    .setProject(config.projectId);

switch (Platform.OS) {
    case "ios":
        client.setPlatform(process.env.EXPO_PUBLIC_APPWRITE_BUNDLE_ID);
        break;
    case "android":
        client.setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PACKAGE_NAME);
        break;
}
const database = new Databases(client);

export { client, config, database };

