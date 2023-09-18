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

- Gama de colores principal

https://colorhunt.co/palette/c5d7bd9fb8ad383e56fb743e

#C5D7BD
#9FB8AD
#383E56
#FB743E

- Theme2

https://colorhunt.co/palette/faf1e4cedebd9eb384435334

#FAF1E4
#CEDEBD
#9EB384
#435334

- Theme3

https://colorhunt.co/palette/f5efe7d8c4b64f709c213555

#F5EFE7
#D8C4B6
#4F709C
#213555

-Theme4

https://paletadecolores.com.mx/paleta/ffaec6/d2849e/a55a76/78304e/4b0626/

#ffaec6
#d2849e
#a55a76
#78304e
#4b0626
