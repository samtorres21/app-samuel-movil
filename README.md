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








  


