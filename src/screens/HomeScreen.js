import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";

const HomeScreen = () => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <LinearGradient colors={colors.gradientePrimario} style={styles.header}>
                <View style={styles.headerTop}>
                    <View>
                        <Text style={styles.greeting}>Hola, Bienvenido 👋</Text>
                        <Text style={styles.subtitle}>¿Qué quieres hacer hoy?</Text>
                    </View>
                    <View style={styles.profileIcon}>
                        <Ionicons name="person" size={24} color={colors.principal} />
                    </View>
                </View>
            </LinearGradient>

            <View style={styles.content}>
                <Text style={styles.sectionTitle}>Acciones Rápidas</Text>

                <View style={styles.cardsContainer}>
                    <TouchableOpacity style={styles.card}>
                        <View style={[styles.iconContainer, { backgroundColor: 'rgba(77, 59, 255, 0.1)' }]}>
                            <Ionicons name="car-outline" size={32} color={colors.variante2} />
                        </View>
                        <Text style={styles.cardText}>Vehículo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card}>
                        <View style={[styles.iconContainer, { backgroundColor: 'rgba(77, 255, 77, 0.1)' }]}>
                            <Ionicons name="speedometer-outline" size={32} color={colors.exito} />
                        </View>
                        <Text style={styles.cardText}>Rendimiento</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.cardsContainer}>
                    <TouchableOpacity style={styles.card}>
                        <View style={[styles.iconContainer, { backgroundColor: 'rgba(239, 127, 15, 0.1)' }]}>
                            <Ionicons name="location-outline" size={32} color={colors.advertencia} />
                        </View>
                        <Text style={styles.cardText}>Rutas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card}>
                        <View style={[styles.iconContainer, { backgroundColor: 'rgba(77, 255, 243, 0.1)' }]}>
                            <Ionicons name="stats-chart-outline" size={32} color={colors.informacion} />
                        </View>
                        <Text style={styles.cardText}>Estadísticas</Text>
                    </TouchableOpacity>
                </View>

                <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Última Actividad</Text>
                <View style={styles.activityCard}>
                    <View style={styles.activityIcon}>
                        <Ionicons name="checkmark-circle" size={24} color={colors.exito} />
                    </View>
                    <View style={styles.activityDetails}>
                        <Text style={styles.activityTitle}>Viaje completado</Text>
                        <Text style={styles.activitySubtitle}>Ayer, 14:30 hrs</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.fondloClaro,
    },
    header: {
        paddingTop: 60,
        paddingBottom: 30,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.iluminado,
    },
    subtitle: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.8)',
        marginTop: 5,
    },
    profileIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.iluminado,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.oscuro,
        marginBottom: 15,
    },
    cardsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    card: {
        width: '48%',
        backgroundColor: colors.iluminado,
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
    },
    iconContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    cardText: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.oscuro,
    },
    activityCard: {
        flexDirection: 'row',
        backgroundColor: colors.iluminado,
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
    },
    activityIcon: {
        marginRight: 15,
    },
    activityDetails: {
        flex: 1,
    },
    activityTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.oscuro,
    },
    activitySubtitle: {
        fontSize: 14,
        color: colors.subtitilo,
        marginTop: 2,
    }
});

export default HomeScreen;
