import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { AnimatedSplashOverlay } from "@/components/animated-icon";
import AppTabs from "@/components/app-tabs";

// Mantener splash screen hasta que monte la app
SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
  useEffect(() => {
    async function hideSplash() {
      try {
        await SplashScreen.hideAsync();
      } catch (e) {
        // Ignorar si ya fue ocultado
      }
    }

    hideSplash();
  }, []);

  return (
    <>
      <AnimatedSplashOverlay />
      <AppTabs />
    </>
  );
}
