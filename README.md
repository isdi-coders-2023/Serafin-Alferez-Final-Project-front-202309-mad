# Classic Cars - Frontend README

## Proyecto final de Serafín Alférez Alférez

## Descripción del Proyecto
Classic Cars es una aplicación web desarrollada como parte del proyecto final para el bootcamp ISDI-Coders. Se centra en coches clásicos y proporciona características clave para que los usuarios exploren, registren y gestionen entradas de coches clásicos de manera eficiente.

## Funcionalidades Principales
- **Registro y Inicio de Sesión de Usuarios:**
  La aplicación proporciona un sistema de registro e inicio de sesión para que los usuarios gestionen su cuenta.

- **Lista Global de coches Clásicos:**
  Todos los usuarios tienen acceso para ver la lista completa de coches clásicos disponibles en la aplicación.

- **Funcionalidad de Administrador:**
  Los usuarios registrados y logados pueden:
  - Crear nuevas entradas de coches clásicos.
  - Modificar la información de sus propias entradas de coches clásicos existentes.
  - Eliminar entradas de coches clásicos de su inventario privado.

- **Detalles del coche:**
  Todos los usuarios pueden acceder a la página de detalles de cada auto clásico.
  - Se listan las propiedades específicas del coche.
  - Implementación de paginado de coches a razón de 6 publicaciones por página.

## Tecnologías Utilizadas
**MERN Stack:**
- MongoDB con Mongoose (Backend)
- Express (Backend)
- React (Frontend)
- Node (Backend)

**Pruebas:**
- Todas las funcionalidades están probadas con Jest.

## Instrucciones de Ejecución
Antes de ejecutar el frontend de la aplicación, asegúrate de tener instaladas las siguientes dependencias:

- Node.js: Descargar e instalar Node.js.
- MongoDB: Descargar e instalar MongoDB.

### Configuración del Frontend:
1. Clona el repositorio:
   ```bash
   git clone https://github.com/isdi-coders-2023/Serafin-Alferez-Final-Project-front-202309-mad.git

1. Navegue al directorio:
cd Serafin-Alferez-Final-Project-Front-202304-mad

2. Instala las dependencias:
npm install

3. Configure las variables de entorno: Si es necesario, cree un archivo .env en el directorio raíz del proyecto y configure las variables de entorno necesarias.

4. Inicie el servidor de desarrollo:
  npm start
