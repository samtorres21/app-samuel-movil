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











  


