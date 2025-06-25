import { StyleSheet } from "react-native";

const AppStyles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: "flex-start",
        width: "100vw",
        height: "auto",
    },
    headingContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        width: "100%",
        textAlign: "center",
        color: "#321325",
        fontSize: 28,
        fontWeight: 700,
    },
    bodyContainer: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
    },
    image: {
        width: "150",
        height: "150",
        margin: 24,
    },
    paragraph: {
        width: "100%",
    },
    centeredParagraph: {
        width: "100%",
        textAlign: "center",
    },

    // BUTTONS
    buttonContainer: {
        flex: 1,
        position: "relative",
        height: "100vh",
        width: "100vw",
    },
    primaryBtn: {
        marginTop: 16,
        marginBottom: 32,
        paddingHorizontal: 32,
        paddingVertical: 16,
        backgroundColor: "#C90345",
        borderRadius: 8,
        outline: 0,
        border: "none",
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,

    },
    primaryBtnText: {
        color: "#FFFFFF",
        fontSize: 18,
        width: "100%",
        textAlign: "center",
    },
    secondaryBtn: {
        marginTop: 32,
        marginBottom: 32,
        paddingHorizontal: 32,
        paddingVertical: 16,
        backgroundColor: "#767779",
        borderRadius: 8,
        outline: 0,
        border: "none",
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,

    },
    secondaryBtnText: {
        color: "#FFFFFF",
        fontSize: 18,
        width: "100%",
        textAlign: "center",
    },

    // MODALS
    modalContainer: {
        padding: 16,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        position: "relative",
        width: "100%",
        paddingVertical: 32,
        paddingHorizontal: 16,
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
    },
    modalBtnsContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        marginTop: 32,
    },
    primaryBtnModal: {
        flex: 1,
        paddingHorizontal: 32,
        paddingVertical: 16,
        backgroundColor: "#C90345",
        borderRadius: 8,
        outline: 0,
        border: "none",
        margin: 8
    },
    primaryBtnModalText: {
        color: "#FFFFFF",
        fontSize: 18,
        width: "100%",
        textAlign: "center",
    },
    secondaryBtnModal: {
        flex: 1,
        paddingHorizontal: 32,
        paddingVertical: 16,
        backgroundColor: "#767779",
        borderRadius: 8,
        outline: 0,
        border: "none",
        margin: 8
    },
    secondaryBtnModalText: {
        color: "#FFFFFF",
        fontSize: 18,
        width: "100%",
        textAlign: "center",
    },

    // INPUTS
    textInput: {
        padding: 8,
        fontSize: 16,
    },
    textInputArea: {
        padding: 8,
        fontSize: 16,
        height: "auto",
        textAlignVertical: "top",
    },
    inputLabel: {
        width: "100%",
        color: "#321325",
        fontSize: 18,
        fontWeight: 700,
    },

    // NOTES
    noteContainer: {
        display: "flex",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 16,
        backgroundColor: "#767779",
        borderRadius: 8,
    },
    listContainer: {
        height: "83%",
    },
    noteHeading: {
        width: "100%",
        color: "#EED2CC",
        fontSize: 18,
        fontWeight: 700,
    },
    noteBody: {
        width: "100%",
        padding: 8,
        fontSize: 16,
        color: "#FFFFFF",
    },
});

export default AppStyles;