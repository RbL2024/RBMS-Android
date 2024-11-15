import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen name="(screens)" options={{ headerShown: false }} />
        <Stack.Screen name="(subscreens)" options={{ headerShown: false }} />
    </Stack>
  );
}
