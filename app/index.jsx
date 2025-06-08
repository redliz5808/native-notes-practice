import NoteIcon from "@/assets/images/noteIcon-svgrepo.png";
import AppStyles from "@/src/styles";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {
  const router = useRouter();
  return (
    <>
      <View
        style={AppStyles.headingContainer
        }>
        <Text style={AppStyles.heading}>Home</Text>
        <Image source={NoteIcon} style={AppStyles.image} />
      </View>
      <View
        style={AppStyles.bodyContainer}>
        <Text style={AppStyles.centeredParagraph}>Take notes with this practice app of mine!</Text>
      </View>
      <View style={AppStyles.buttonContainer}>
        <TouchableOpacity
          style={AppStyles.primaryBtn}
          onPress={() => router.push("/notes")}
        >
          <Text style={AppStyles.primaryBtnText}>Add/Edit Notes</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default HomeScreen;