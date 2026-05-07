# Finanzas Top 💰

## Descripción General
- Esta aplicación móvil está diseñada para ayudar a los usuarios a gestionar sus finanzas personales de manera sencilla. Permite ingresar ingresos y registrar gastos, calculando automáticamente el dinero disponible.

##  Objetivo
- Brindar a los usuarios una herramienta clara y rápida para controlar su dinero, mejorar sus hábitos financieros y tomar decisiones informadas.
---
## Vistas de registro e inicio de sesión
<img width="738" height="1600" alt="movil1" src="https://github.com/user-attachments/assets/07394d3c-3212-47ab-a6a4-9cfe4f9cdae6" />

---
<img width="738" height="1600" alt="movil2" src="https://github.com/user-attachments/assets/725bd035-be75-479f-b715-4a8c8be62513" />

---
## 3 vistas de la app
<img width="738" height="1600" alt="movil3" src="https://github.com/user-attachments/assets/bab143e3-1e77-4592-828a-a9bde850ccf3" />

---
<img width="738" height="1600" alt="movil4" src="https://github.com/user-attachments/assets/9b9a74c1-4e78-47c9-8a12-3288926e7e39" />

---
<img width="738" height="1600" alt="movil5" src="https://github.com/user-attachments/assets/5b330d5f-461e-4347-9568-f8c4031a9d1f" />

---
# Lógica de negocio - Finanzas Top

## 1. Registro y perfil del usuario
**Objetivo:** Identificar y personalizar la experiencia.

**Reglas:**
- El usuario debe registrarse (email, Google, etc.).
- Cada usuario tiene su propio conjunto de datos financieros.
- Se guarda:
  - Salario mensual
  - Moneda (opcional, pero útil)
  - Fecha de corte (ej: inicio de mes o quincena)

---

## 2. Ingreso del salario
**Objetivo:** Definir la base financiera.

**Reglas:**
- El usuario puede:
  - Registrar un salario fijo mensual
  - O actualizarlo manualmente cada mes
- Validaciones:
  - No puede ser negativo
  - Debe existir antes de calcular resultados

---

## 3. Registro de gastos
**Objetivo:** Controlar en qué se va el dinero.

**Reglas:**
- Cada gasto tiene:
  - Monto
  - Categoría (comida, transporte, ocio, etc.)
  - Fecha
  - Descripción opcional
- Validaciones:
  - No permitir valores negativos
  - La fecha debe ser válida

---

## 4. Historial mensual
**Objetivo:** Ver evolución financiera.

**Reglas:**
- Guardar datos por mes:
  - Total ingresos
  - Total gastos
  - Disponible
- Permitir comparar meses

---

## 5. Reportes y visualización
**Objetivo:** Que el usuario entienda su dinero fácil.

**Reglas:**
- Mostrar:
  - Gráficas por categoría
  - Tendencias de gasto
- Ejemplo:
  - "Gastaste más en comida este mes que el anterior"

---

## 6. Seguridad de datos
**Objetivo:** Proteger información sensible.

**Reglas:**
- Datos cifrados
- Autenticación segura
- Posible uso de biometría
---
##  Avance: Gestión del Perfil y de Imágenes

En este avance se implementó con éxito la funcionalidad completa para la personalización del perfil de usuario, integrando la selección de imágenes locales, alojamiento en la nube y persistencia de datos con Firebase.

### 1. Gestión de Imagen con Cloudinary 
Se configuró un flujo optimizado para manejar las imágenes sin saturar la base de datos:
- **Selección de Imagen:** Se implementó `expo-image-picker` para permitir al usuario abrir la galería de su dispositivo de forma nativa y segura.
- **Subida a Cloudinary:** Las imágenes se envían a Cloudinary usando un *Upload Preset* en modo `unsigned` (sin firma), lo que permite cargas directas desde el cliente móvil.
- **Optimización:** Cloudinary se encarga de servir las imágenes de manera rápida y en el formato óptimo, devolviendo una URL segura (`secure_url`) para ser consumida por la aplicación.

### 2. Gestión del Perfil con Firebase 
Una vez que Cloudinary aloja la imagen, se conecta con los servicios de Google Firebase para hacer el cambio permanente:
- **Firebase Authentication:** Se utiliza el método `updateProfile` para actualizar la propiedad `photoURL` del usuario autenticado en la sesión actual.
- **Cloud Firestore:** Paralelamente, se almacena o actualiza la URL en el documento del usuario (dentro de la colección `users`), lo que garantiza que la información esté disponible para ser consultada globalmente en la app.

### 3. Experiencia de Usuario (UI/UX) 📱
- Se añadió un estado de carga (`isUploading`) que muestra un `ActivityIndicator` superpuesto en la foto mientras la imagen se sube a la nube.
- La pantalla (`UserScreen`) reacciona y se actualiza inmediatamente una vez que Cloudinary y Firebase responden de manera exitosa, mejorando la percepción de fluidez de la aplicación.
---
<img width="738" height="1600" alt="movil6" src="https://github.com/user-attachments/assets/ed12cc55-5313-4e38-8bc2-23de2bde0494" />

---
 <img width="1423" height="422" alt="movil7" src="https://github.com/user-attachments/assets/2354b5bb-4585-449c-ba2e-ea905ca6a932" />

 ---
 # Manual de Usuario - Finanzas Top

¡Bienvenido a **Finanzas Top**! Tu herramienta ideal para mantener tu dinero bajo control. Este manual te guiará paso a paso para que aproveches al máximo todas las funciones de la aplicación.

## 1. Ingreso a la Aplicación

Al abrir la aplicación por primera vez, verás la pantalla de inicio de sesión:
1. Si ya tienes una cuenta, ingresa tu correo electrónico y contraseña.
2. Si eres un usuario nuevo, dirígete a la opción de registro para crear una cuenta proporcionando tus datos.

## 2. Pantalla Principal: "Finanzas Top" (Dashboard)

Una vez inicias sesión, accederás a la pantalla principal. Aquí podrás gestionar tu presupuesto mensual.

### Establecer tus Ingresos
1. Busca la sección **"💰 Ingresos Mensuales"**.
2. En el recuadro con el ícono de billete, escribe tu salario o presupuesto total del mes (ejemplo: `1500000`).
3. El sistema guardará automáticamente esta cantidad. Si cierras la aplicación, ¡tu salario seguirá ahí!

### Registrar un Nuevo Gasto
1. Dirígete a la sección **"🛒 Registrar Gasto"**.
2. En el primer campo, escribe **qué compraste** (ejemplo: "Almuerzo", "Transporte").
3. En el segundo campo (`$$$`), escribe el **monto** del gasto (ejemplo: `15000`).
4. Toca el botón rojo con el signo de **Más (➕)**.
5. Inmediatamente verás cómo tu "Saldo Disponible" disminuye y el gasto aparece en tu historial.

### Consultar y Eliminar Gastos
1. En la parte inferior de la pantalla encontrarás tu **"🧾 Historial de Gastos"**.
2. Allí podrás ver todo lo que has registrado de manera cronológica.
3. Si cometiste un error o quieres borrar un registro, simplemente presiona el ícono del **basurero (🗑️)** que se encuentra al lado derecho del gasto. ¡Tus totales se recalcularán automáticamente!

---

## 3. Configuración de tu Perfil de Usuario

Personaliza tu experiencia agregando tu propia foto de perfil.

1. Navega a la pestaña de **Perfil** utilizando el menú inferior.
2. Toca sobre la imagen de perfil actual (o el avatar por defecto).
3. La aplicación te pedirá permisos para acceder a tu galería fotográfica. (Deberás aceptar).
4. Selecciona tu foto favorita.
5. Espera unos segundos mientras la aplicación guarda tu nueva foto de forma segura. Verás tu nueva imagen actualizada de inmediato. ¡Esta imagen estará vinculada a tu cuenta de por vida!

## 4. Preguntas Frecuentes

*   **¿Qué pasa si me quedo sin internet?**
    La función de registro de gastos e ingresos funciona de manera **local y offline**. Puedes seguir agregando gastos sin internet. Sin embargo, para funciones como cambiar tu foto de perfil sí necesitarás una conexión.

*   **¿Se borrarán mis gastos si cierro la app?**
    No, todos tus movimientos se guardan de forma segura en la memoria interna de tu dispositivo.

¡Disfruta tomando el control de tu economía con Finanzas Top!

---
# Manual Técnico - Finanzas Top

Este documento proporciona una visión detallada de la arquitectura, tecnologías y estructura interna de la aplicación móvil "Finanzas Top".

## 1. Tecnologías Utilizadas

La aplicación está construida sobre las siguientes tecnologías y librerías clave:

*   **Framework Principal:** React Native
*   **Plataforma / Toolchain:** Expo SDK 54+
*   **Navegación:** React Navigation (`@react-navigation/native`, `@react-navigation/bottom-tabs`, `@react-navigation/stack`)
*   **Base de Datos Local (Offline):** Expo SQLite (`expo-sqlite`)
*   **Autenticación y Nube:** Firebase (`firebase`)
*   **Almacenamiento de Imágenes:** Cloudinary
*   **Selección de Imágenes:** Expo Image Picker (`expo-image-picker`)
*   **Estilos y UI:** `expo-linear-gradient`, `@expo/vector-icons`

## 2. Estructura del Proyecto

El código fuente principal se encuentra en la carpeta `/src`, organizado de la siguiente manera:

*   `src/screens/`: Contiene las vistas principales de la aplicación.
    *   `HomeScreen.js`: Pantalla del dashboard financiero (manejo de ingresos y gastos).
    *   `UserScreen.js`: Pantalla de perfil (cambio de foto y datos del usuario).
    *   `SettingsScreen.js`: Pantalla de ajustes de la aplicación.
    *   `SplashScreen.js`: Pantalla de carga inicial.
    *   `auth/`: Pantallas de inicio de sesión y registro.
*   `src/services/`: Capa de servicios y conexión a datos.
    *   `sqliteService.js`: Gestor de la base de datos local SQLite.
*   `src/components/`: Componentes reutilizables de UI.
*   `src/constants/`: Variables estáticas y constantes de la app.
*   `navigation/`: Contiene los archivos de configuración de rutas (`AppProvider.js`, etc.).

## 3. Arquitectura de Base de Datos Local (SQLite)

La persistencia de datos financieros y de configuración se maneja localmente mediante el archivo `miapp.db`.

### Tablas Implementadas

**Tabla: `configuracion`**
Guarda información global, como el salario mensual del usuario.
*   `id` (INTEGER PRIMARY KEY): Identificador único (se usa `id = 1` por defecto).
*   `salario` (REAL): Monto total de los ingresos mensuales.

**Tabla: `gastos`**
Mantiene el registro detallado de todas las salidas de dinero.
*   `id` (INTEGER PRIMARY KEY AUTOINCREMENT): Identificador único del gasto.
*   `nombre` (TEXT NOT NULL): Concepto o descripción del gasto.
*   `monto` (REAL NOT NULL): Cantidad monetaria.

### Flujo de Datos (Data Flow)
1.  **Inicialización:** `AppProvider.js` llama a `sqliteService.init()` para asegurar que las tablas existan antes de renderizar la aplicación.
2.  **Operaciones:** `HomeScreen.js` invoca operaciones asíncronas (`guardarSalario`, `agregarGasto`, `obtenerGastos`, `eliminarGasto`) las cuales ejecutan sentencias SQL (`runAsync`, `getAllAsync`, `getFirstAsync`) sin bloquear la interfaz.

## 4. Integración en la Nube (Cloudinary y Firebase)

*   **Perfil de Usuario:** Las imágenes subidas por el usuario se envían a Cloudinary a través de un *unsigned upload preset*. Esto devuelve una URL segura y optimizada.
*   **Persistencia de Perfil:** La URL obtenida de Cloudinary se sincroniza directamente con el perfil del usuario autenticado en Firebase (Firestore o Auth), asegurando que la foto se mantenga a lo largo de las sesiones.

## 5. Instrucciones de Desarrollo

Para ejecutar el entorno de desarrollo localmente:

1.  Clonar el repositorio.
2.  Instalar las dependencias de Node:
    ```bash
    npm install
    ```
3.  Iniciar el servidor de Expo:
    ```bash
    npx expo start
    ```
4.  Utilizar Expo Go en un dispositivo móvil o presionar `a` para iniciar el emulador de Android o `i` para iOS.













  


