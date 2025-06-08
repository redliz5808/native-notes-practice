import { Stack } from "expo-router";

const RootLayout = () => {
  return <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: "#C90345",
      },
      headerTintColor: "#FFF",
      headerTitleStyle: {
        fontSize: 28,
        fontWeight: 700,
      },
      contentStyle: {
        padding: 16,
        backgroundColor: "#FBF7F4"
      },
    }}
  >
    <Stack.Screen name="index" options={{ title: "My Notes" }} />
  </Stack>;
}

export default RootLayout;