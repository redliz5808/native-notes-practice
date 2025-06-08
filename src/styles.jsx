import { StyleSheet } from "react-native";

const AppStyles = StyleSheet.create({
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
    primaryBtn: {
        margin: 32,
        paddingHorizontal: 32,
        paddingVertical: 16,
        backgroundColor: "#C90345",
        borderRadius: 8,
        outline: 0,
        border: "none",
    },
    primaryBtnText: {
        color: "#FFF",
        fontSize: 18,
        width: "100%",
        textAlign: "center",
    },
});

export default AppStyles;