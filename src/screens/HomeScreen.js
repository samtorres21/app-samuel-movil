import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";

const HomeScreen = () => {
    const [salario, setSalario] = useState("");
    const [gastos, setGastos] = useState([]);
    const [nombreGasto, setNombreGasto] = useState("");
    const [montoGasto, setMontoGasto] = useState("");

    const agregarGasto = () => {
        if (!nombreGasto || !montoGasto) return;

        const nuevoGasto = {
            id: Math.random().toString(),
            nombre: nombreGasto,
            monto: parseFloat(montoGasto) || 0
        };

        setGastos([...gastos, nuevoGasto]);
        setNombreGasto("");
        setMontoGasto("");
    };

    const eliminarGasto = (id) => {
        setGastos(gastos.filter(gasto => gasto.id !== id));
    };

    const salarioNum = parseFloat(salario) || 0;
    const totalGastos = gastos.reduce((acc, curr) => acc + curr.monto, 0);
    const presupuestoRestante = salarioNum - totalGastos;

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('es-CO', { 
            style: 'currency', 
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(amount);
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <LinearGradient colors={colors.gradientePrimario} style={styles.header}>
                <View style={styles.headerTop}>
                    <View>
                        <Text style={styles.greeting}>Resumen Financiero 👋</Text>
                        <Text style={styles.subtitle}>Gestiona y calcula tu presupuesto</Text>
                    </View>
                    <View style={styles.profileIcon}>
                        <Ionicons name="wallet" size={24} color={colors.principal} />
                    </View>
                </View>

                <View style={styles.balanceContainer}>
                    <Text style={styles.balanceLabel}>Disponible / Restante</Text>
                    <Text style={styles.balanceAmount}>{formatCurrency(presupuestoRestante)}</Text>
                </View>
            </LinearGradient>

            <View style={styles.content}>
                <Text style={styles.sectionTitle}>Tu Salario</Text>
                <View style={styles.inputContainer}>
                    <Ionicons name="cash-outline" size={24} color={colors.principal} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa tu salario"
                        keyboardType="numeric"
                        value={salario}
                        onChangeText={setSalario}
                    />
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statCard}>
                        <View style={[styles.iconContainer, { backgroundColor: 'rgba(77, 255, 77, 0.1)' }]}>
                            <Ionicons name="arrow-down" size={24} color={colors.exito} />
                        </View>
                        <Text style={styles.statLabel}>Ingresos</Text>
                        <Text style={[styles.statValue, { color: colors.exito }]}>{formatCurrency(salarioNum)}</Text>
                    </View>

                    <View style={styles.statCard}>
                        <View style={[styles.iconContainer, { backgroundColor: 'rgba(255, 77, 77, 0.1)' }]}>
                            <Ionicons name="arrow-up" size={24} color={colors.alerta} />
                        </View>
                        <Text style={styles.statLabel}>Total Gastos</Text>
                        <Text style={[styles.statValue, { color: colors.alerta }]}>{formatCurrency(totalGastos)}</Text>
                    </View>
                </View>

                <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Agregar Gasto</Text>
                <View style={styles.addExpenseContainer}>
                    <TextInput
                        style={[styles.input, styles.expenseInput]}
                        placeholder="Descripción"
                        value={nombreGasto}
                        onChangeText={setNombreGasto}
                    />
                    <TextInput
                        style={[styles.input, styles.expenseInput, { marginLeft: 10, flex: 0.5 }]}
                        placeholder="Monto"
                        keyboardType="numeric"
                        value={montoGasto}
                        onChangeText={setMontoGasto}
                    />
                    <TouchableOpacity style={styles.addButton} onPress={agregarGasto}>
                        <Ionicons name="add" size={24} color={colors.iluminado} />
                    </TouchableOpacity>
                </View>

                <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Lista de Gastos</Text>
                {gastos.length === 0 ? (
                    <Text style={styles.emptyText}>No has agregado gastos aún.</Text>
                ) : (
                    gastos.map((gasto) => (
                        <View key={gasto.id} style={styles.activityCard}>
                            <View style={[styles.activityIcon, { backgroundColor: 'rgba(255, 77, 77, 0.1)', padding: 10, borderRadius: 12 }]}>
                                <Ionicons name="cart" size={20} color={colors.alerta} />
                            </View>
                            <View style={styles.activityDetails}>
                                <Text style={styles.activityTitle}>{gasto.nombre}</Text>
                            </View>
                            <Text style={styles.expenseAmount}>{formatCurrency(gasto.monto)}</Text>
                            <TouchableOpacity onPress={() => eliminarGasto(gasto.id)} style={{ marginLeft: 10, padding: 5 }}>
                                <Ionicons name="trash-outline" size={24} color={colors.subtitilo} />
                            </TouchableOpacity>
                        </View>
                    ))
                )}
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
        fontSize: 14,
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
    balanceContainer: {
        marginTop: 30,
        alignItems: 'center',
    },
    balanceLabel: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.8)',
    },
    balanceAmount: {
        fontSize: 36,
        fontWeight: 'bold',
        color: colors.iluminado,
        marginTop: 5,
    },
    content: {
        padding: 20,
        paddingBottom: 100,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.oscuro,
        marginBottom: 15,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.iluminado,
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 16,
        color: colors.oscuro,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    statCard: {
        width: '48%',
        backgroundColor: colors.iluminado,
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    statLabel: {
        fontSize: 14,
        color: colors.subtitilo,
        marginBottom: 5,
    },
    statValue: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    addExpenseContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    expenseInput: {
        backgroundColor: colors.iluminado,
        borderRadius: 15,
        paddingHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
        flex: 1,
    },
    addButton: {
        backgroundColor: colors.principal,
        height: 50,
        width: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        shadowColor: colors.principal,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    activityCard: {
        flexDirection: 'row',
        backgroundColor: colors.iluminado,
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 10,
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
    expenseAmount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.alerta,
    },
    emptyText: {
        textAlign: 'center',
        color: colors.subtitilo,
        marginTop: 10,
        fontStyle: 'italic',
    }
});

export default HomeScreen;
