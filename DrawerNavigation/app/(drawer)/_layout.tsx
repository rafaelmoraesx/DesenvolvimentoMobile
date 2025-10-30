import { Drawer } from "expo-router/drawer";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function DrawerLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={{
                    headerStyle: { backgroundColor: "#0077cc" },
                    headerTintColor: "#fff",
                    drawerActiveTintColor: "#0077cc",
                    drawerLabelStyle: { fontSize: 16 },
                }}
            >
                <Drawer.Screen
                    name="index"
                    options={{
                        title: "Início",
                    }}
                />
                <Drawer.Screen
                    name="profile"
                    options={{
                        title: "Perfil",
                    }}
                />
                <Drawer.Screen
                    name="settings"
                    options={{
                        title: "Configurações",
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}
