import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabaseSync('miapp.db');

// Dentro de este archivo irán las sentencias y queries sql

const init = async () => {
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL
        );
    `);
};

const actualizarGasolina =()=>{
    // const result = db.runSync(
    //     //CONSULTA SQL PARA UPDATE
    // )

}

export default {
    init,
    actualizarGasolina
}