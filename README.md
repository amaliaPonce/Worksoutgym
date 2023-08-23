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
