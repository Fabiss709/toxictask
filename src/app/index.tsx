import { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Importa las dos pantallas que creamos
import NuevaObligacionScreen from "../screens/NuevaObligacionScreen";
import SocialScreen from "../screens/SocialScreen";

type TabType = "inicio" | "agenda" | "rachas" | "roast" | "social";

export default function MainAppNavigator() {
  const [currentTab, setCurrentTab] = useState<TabType>("inicio");

  // Renderizado dinámico según la pestaña seleccionada
  const renderScreen = () => {
    switch (currentTab) {
      case "inicio":
        return <NuevaObligacionScreen />;
      case "social":
        return <SocialScreen />;
      case "agenda":
        return (
          <View style={styles.placeholderContainer}>
            <Text style={styles.placeholderIcon}>📅</Text>
            <Text style={styles.placeholderTitle}>Agenda & Calendario</Text>
            <Text style={styles.placeholderSub}>
              Aquí van tus bloques y compromisos agendados.
            </Text>
          </View>
        );
      case "rachas":
        return (
          <View style={styles.placeholderContainer}>
            <Text style={styles.placeholderIcon}>🔥</Text>
            <Text style={styles.placeholderTitle}>Rachas de Supervivencia</Text>
            <Text style={styles.placeholderSub}>
              Tus días consecutivos sin procrastinar.
            </Text>
          </View>
        );
      case "roast":
        return (
          <View style={styles.placeholderContainer}>
            <Text style={styles.placeholderIcon}>💀</Text>
            <Text style={styles.placeholderTitle}>
              Zona de Roast & Humillación
            </Text>
            <Text style={styles.placeholderSub}>
              Auditorías destructivas de SlothBot en tiempo real.
            </Text>
          </View>
        );
      default:
        return <NuevaObligacionScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#231535" />

      {/* Barra superior global fija común en ambas vistas */}
      <View style={styles.globalHeader}>
        <View style={styles.headerLeft}>
          <View style={styles.userBadge}>
            <Text style={styles.skullBadgeIcon}>👾</Text>
            <View style={styles.levelTag}>
              <Text style={styles.levelTagText}>LVL 2</Text>
            </View>
          </View>
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.headerTitle}>
              {currentTab === "social" ? "Social" : "Inicio"}
            </Text>
            <Text style={styles.headerSubtitle}>Rango: Flojo Promedio</Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerIconBtn}>
            <Text style={styles.headerIcon}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIconBtn}>
            <Text style={styles.headerIcon}>⚙️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.avatarButton}>
            <Text style={{ fontSize: 13 }}>👤</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Contenido de la pantalla seleccionada */}
      <View style={styles.contentArea}>{renderScreen()}</View>

      {/* Barra inferior fija de navegación */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setCurrentTab("inicio")}
        >
          <Text
            style={[
              styles.navIcon,
              currentTab === "inicio" && styles.navIconActive,
            ]}
          >
            🏠
          </Text>
          <Text
            style={[
              styles.navText,
              currentTab === "inicio" && styles.navTextActive,
            ]}
          >
            Inicio
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setCurrentTab("agenda")}
        >
          <Text
            style={[
              styles.navIcon,
              currentTab === "agenda" && styles.navIconActive,
            ]}
          >
            📅
          </Text>
          <Text
            style={[
              styles.navText,
              currentTab === "agenda" && styles.navTextActive,
            ]}
          >
            Agenda
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setCurrentTab("rachas")}
        >
          <Text
            style={[
              styles.navIcon,
              currentTab === "rachas" && styles.navIconActive,
            ]}
          >
            🔥
          </Text>
          <Text
            style={[
              styles.navText,
              currentTab === "rachas" && styles.navTextActive,
            ]}
          >
            Rachas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setCurrentTab("roast")}
        >
          <Text
            style={[
              styles.navIcon,
              currentTab === "roast" && styles.navIconActive,
            ]}
          >
            💀
          </Text>
          <Text
            style={[
              styles.navText,
              currentTab === "roast" && styles.navTextActive,
            ]}
          >
            Roast
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setCurrentTab("social")}
        >
          <Text
            style={[
              styles.navIcon,
              currentTab === "social" && styles.navIconActive,
            ]}
          >
            👥
          </Text>
          <Text
            style={[
              styles.navText,
              currentTab === "social" && styles.navTextActive,
            ]}
          >
            Social
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#231535",
  },
  globalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#231535",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#36234f",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  userBadge: {
    position: "relative",
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#382255",
    justifyContent: "center",
    alignItems: "center",
  },
  skullBadgeIcon: {
    fontSize: 18,
  },
  levelTag: {
    position: "absolute",
    bottom: -4,
    backgroundColor: "#84cc16",
    borderRadius: 5,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  levelTagText: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#130d20",
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffffff",
  },
  headerSubtitle: {
    fontSize: 10,
    color: "#84cc16",
    fontWeight: "600",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerIconBtn: {
    padding: 4,
  },
  headerIcon: {
    fontSize: 15,
    color: "#a79abf",
  },
  avatarButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#382255",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#54367e",
  },
  contentArea: {
    flex: 1,
    backgroundColor: "#f5f3f9",
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  placeholderIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  placeholderTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#231535",
    marginBottom: 6,
  },
  placeholderSub: {
    fontSize: 12,
    color: "#7b748c",
    textAlign: "center",
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#231535",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#36234f",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    minWidth: 50,
  },
  navIcon: {
    fontSize: 18,
    color: "#7c6d94",
    marginBottom: 2,
  },
  navIconActive: {
    color: "#ffffff",
  },
  navText: {
    fontSize: 10,
    color: "#7c6d94",
    fontWeight: "600",
  },
  navTextActive: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
