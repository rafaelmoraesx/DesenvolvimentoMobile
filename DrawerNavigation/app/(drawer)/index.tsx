import { Link } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela Inicial</Text>
            <Text style={styles.paragraph}>
                Bem-vindo à aplicação com Drawer Navigation!
            </Text>
            <Link href="/(drawer)/profile" asChild>
                <Button title="Ir para Perfil" />
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
    title: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
    paragraph: { fontSize: 16, marginBottom: 20, textAlign: "center" },
});
