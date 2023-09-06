🏋️‍♀️🏋️‍♀️ WorksOutGym 🏋️‍♀️🏋️‍♀️

Creando una aplicación de un gimnasio con React.

Instrucciones.

abrir los dos proyectos, frontend y backend.

terminal backend: npm run dev desde la carpeta raiz
terminal frontend: npm install, cd frontend, npm start

#

_Componentes:_

- _Navbar:_ Un componente que mostrará la barra de navegación en la parte superior de la aplicación. Puede contener opciones como "Inicio", "Ejercicios", "Favoritos", etc.
- _ExerciseCard:_ Un componente que muestra la información básica de un ejercicio, como nombre, descripción y grupo muscular. Puede tener un botón para marcar o desmarcar el ejercicio como favorito.
- _ExerciseDetail:_ Un componente para mostrar los detalles completos de un ejercicio, incluida su imagen y descripción detallada.
- _ExerciseList:_ Un componente que renderiza una lista de _ExerciseCard_ para mostrar todos los ejercicios disponibles. Puede incluir opciones de filtrado por grupo muscular y búsqueda por nombre.
- _FavoriteExercises:_ Un componente para mostrar la lista de ejercicios marcados como favoritos por el usuario.
- _Login:_ Un formulario para que los usuarios inicien sesión en la aplicación.
- _Register:_ Un formulario para que los nuevos usuarios se registren en la aplicación.

_Hooks:_

- _useAuth:_ Un hook para manejar la autenticación del usuario, almacenar y acceder al token y a la información del usuario.
- _useExerciseData:_ Un hook para manejar la obtención y gestión de datos de ejercicios. Esto incluiría la obtención de la lista de ejercicios, la obtención de ejercicios favoritos y la interacción con la API para marcar/desmarcar ejercicios como favoritos.

_Páginas:_

- _HomePage:_ La página de inicio que muestra una introducción y tal vez algunos ejercicios destacados.
- _ExercisePage:_ La página que muestra la lista de todos los ejercicios. Utiliza el componente _ExerciseList_.
- _FavoritePage:_ La página que muestra la lista de ejercicios favoritos del usuario. Utiliza el componente _FavoriteExercises_.
- _ExerciseDetailPage:_ La página que muestra los detalles completos de un ejercicio específico. Utiliza el componente _ExerciseDetail_.
- _LoginPage:_ La página donde los usuarios pueden iniciar sesión.
- _RegisterPage:_ La página donde los nuevos usuarios pueden registrarse.

_Services:_

- _AuthService:_ Un servicio para manejar la autenticación, como el inicio de sesión y registro.
- _ExerciseService:_ Un servicio para interactuar con la API relacionada con los ejercicios, como obtener la lista de ejercicios, marcar/desmarcar ejercicios como favoritos, etc.


PALETAS DE COLORES

https://colorhunt.co/palette/152a3829435c556e53d1d4c9

#152A38
#29435C
#556E53
#D1D4C9
rgb(21, 42, 56)
rgb(41, 67, 92)
rgb(85, 110, 83)
rgb(209, 212, 201)

https://colorhunt.co/palette/c5d7bd9fb8ad383e56fb743e

#C5D7BD
#9FB8AD
#383E56
#FB743E
rgb(197, 215, 189)
rgb(159, 184, 173)
rgb(56, 62, 86)
rgb(251, 116, 62)

// 
BACKEND
- Cerrar sesion 
- Actualizar Postman
- Otorgar perfil a otro administrador


FRONTEND 
- Implementar las siguientes funcionalidades: 

Cerrar sesion
Eliminar ejercicio
Otorgar perfil a otro administrador
Poner los componentes en sus page correspondiente
Verificar que en listExercises se puede filtrar y si no crearlo (ExercisePost para el formato de mostrar)
Recomendar ejercicios y mostrar lista de ejercicios recomendados
info exercise (ExercisePost para el formato de mostrar)


añadir nav de cliente y admin en sus respectivos dashboards




/// 

### **Endpoints de usuarios** 👥

-   **POST** - [/users/register] - Crea un nuevo usuario pidiendo todos los datos incluida la foto (body formData).✅

    -   Ruta para probar en Postman: http://localhost:8000/users/register

-   **POST** - [/users/login] - Logea a un usuario retornando un token, email, y rol. ✅

    -   Ruta para probar en Postman: http://localhost:8000/users/login 

-   **PUT** - [/users] - Devuelve los datos del usuario del token (TOKEN).

    -   Ruta para probar en Postman: http://localhost:8000/users 

-   **PUT** - [/users/profile] - Actualiza el perfil del usuario con detalles adicionales (TOKEN).

    -   Ruta para probar en Postman: http://localhost:8000/users/profile

-   **GET** - [/users/profile/:id] - Obtiene los detalles del perfil de un usuario por su ID (TOKEN).

    -   Ruta para probar en Postman: http://localhost:8000/users/profile/:id

-   **POST** - [/users/listUsers/] - Muestra la lista de todos los usuarios (TOKEN admin).

    -   Ruta para probar en Postman: http://localhost:8000/users/listUsers/

-   **GET** - [/users/updateUserRole/:id] - El usuario admin puede cambiar el rol de un usuario (TOKEN admin).

    -   Ruta para probar en Postman: http://localhost:8000/users/updateUserRole/:id

### **Endpoints de Ejercicios** 🏋🏻‍♂️

-   **POST** - [/exercises/newExercises] - Permite al administrador subir un ejercicio con foto (body formData). (TOKEN admin) ✅

    -   Ruta para probar en Postman: http://localhost:8000/exercises/newExercises

-   **PUT** - [/exercises/updateExerciseController/:id] - Permite al administrador actualizar la información de un ejercicio (TOKEN). ✅ 

***----NOTA: NO PUEDO : ACTUALIZAR LA FOTO, SE ROMPE, 
CUANDO DEJO UN CAMPO VACIO, SE VACIA EN MYSQL, SI NO SE MODIFICA NO DEBE CAMBIAR----***

-   **DELETE** - [/exercises/deleteExercise/:id] - Permite al administrador eliminar un ejercicio (TOKEN admin) ✅

    -   Ejemplo de ruta para probar en Postman: http://localhost:8000/exercises/deleteExercise/8

-   **POST** - [/exercises/favoriteExercises/] - Permite a un usuario dar o quitar de favoritos a un ejercicio (tenerlo o no en preferidos). (TOKEN) ✅

    -   Ruta para probar en Postman: http://localhost:8000/exercises/favoriteExercises/
    -   Añade en Params `idExercise` y el valor de ID de MySQL.

-   **GET** - [/exercises/listExercises] - Devuelve todos los ejercicios con diferentes métodos de filtrado o mostrarlos todos. (TOKEN)✅


    -   Ruta para probar en Postman:
        -   http://localhost:8000/exercises/listExercises ✅
        -   http://localhost:8000/exercises/listExercises?favorites=true ❌
        -   http://localhost:8000/exercises/listExercises?name=Zancada ✅
        -   http://localhost:8000/exercises/listExercises?name=Sentadilla&favorites=true ❌

-   **GET** - [/exercises/infoExercises/:id] - Retorna información de un ejercicio (incluida la descripción). (TOKEN) ✅

    -   Ruta para probar en Postman: http://localhost:8000/exercises/infoExercise/9 

-   **GET** - [/exercises/favorite] - Retorna el listado de los ejercicios favoritos del usuario del token (TOKEN) ✅

    -   Ruta para probar en Postman: http://localhost:8000/exercises/favorite


-   **GET** - [/exercises/recommended] - Devuelve una lista de ejercicios recomendados para el usuario actual. Esto se basa en su historial de ejercicios favoritos. (TOKEN)

-   **POST** - [/exercises/recommendedExercises/:id] - Permite a un usuario marcar o desmarcar un ejercicio como recomendado. (TOKEN)
    -   Ruta para probar en Postman: http://localhost:8000/exercises/recommendedExercises/9