🏋️‍♀️🏋️‍♀️ WorksOutGym 🏋️‍♀️🏋️‍♀️

Creando una aplicación de un gimnasio con React.

Instrucciones.

abrir los dos proyectos, frontend y backend.

terminal backend: npm run dev desde la carpeta raiz
terminal frontend: npm install, cd frontend, npm start

#

_Componentes:_

- _RegisterComponent:_ Formulario para que los nuevos usuarios se registren en la aplicación.

        ¿Quieres registrarte? Aquí te muestro un ejermplo:

          Nombre: Ejemplo.
          Email: ejemplo@ejemplo.com
          contraseña: ******

- _LoginComponent:_ Formulario para que los usuarios inicien sesión en la aplicación.

        ¿Ya te has registrado? Introduce tu:

          Email: ejemplo@ejemplo.com
          contraseña: ******

- _Dashboard:_ Componente que mostrará dos barras de navegación una en la parte superior de la aplicación y otra en el lateral.

  - _HeaderDashboard:_ Contiene un mensaje de bienvenida con el nombre de usuario que esta conectado y el boton de cerrar sesion de la aplicación.

  - _Sidebar:_ Contiene los botones que navegan por las diferentes páginas.

    📈:_ Este boton te lleva al contenido principal de la página de los usuarios.
    🔥:_ Este boton te muestra la lista de los ejercicios.
    🧑🏻:_ Este boton te muestra tu perfil de usuario.
    ⚙️:_ Este boton muestra la lista de usuarios (solo para administradores).

  - _MainContent:_ Es el apartado dónde se iran desplegando las diferentes páginas, principalmente muestra el panel de las estadísticas, ultimos ejercicios agregados entre otros.

- _ExerciseList:_ Componente que muestra la lista de todos los ejercicios disponibles. En la cual podrás filtar los ejercicios, por nombre, grupo muscular, favoritos o los ejercicios recomendados por todos los usuarios.

  - _InfoExerciseComponent:_ Componente que muestra los detalles del ejercicio, foto, nombre, descripción y grupo muscular. Tiene un botón para marcar o desmarcar el ejercicio de favoritos, y otro para marcar o desmarcar de recomendados.

  - _ExercisesPostComponent:_ Componente reutilizable para mostrar cada ejercicio en el mismo formato con los botones de ❤️ (marcar o desmarcar de favorito) y 👍 (marcar o desmarcar de recomendados).

  - _AddExerciseComponent:_ Componente para agregar un ejercicio, nombre, descripción, seleccionar un grupo muscular y agegarle una fotográfia.

        ¿Quieres agregar uno? Aquí te muestro un ejermplo:

          Nombre: Thruster.
          Descripción: Movimiento que combina una sentadilla frontal (front squat) seguido de un push press (empuje de hombros) realizado sin una pausa entre ambos.
          Grupo muscular: Full body
          Foto: https://i.ytimg.com/vi/L219ltL15zk/maxresdefault.jpg Descarga la fotográfia para poder añadirla o usa imagenes propias.

- _ListUserComponent:_ Componente que muestra la lista de los usuarios al administrador y dónde el administrador podrá cambiar el rol a los usuarios.

  - _UpdateUserRole:_ Componente en el que el administrador podrá cambiar el rol a los usuarios y que pasen de cliente a admin o viceversa.

  - _UserPostComponent:_ Componente reutilizable para mostrar la información de cada usuario en el mismo formato.

  - _InfoUserComponent:_ Componente que muestra la información de un usuario, dónde podra editar su perfil y añadir información adicional.

        ¿Quieres saber cómo? Aquí te muestro un ejemplo:

          Nombre: María
          Biografía: Apasionada por el deporte.
          Apellidos: De la Torre Martínez
          Fecha de cumpleaños: 1987-11-18
          Dirección: C/ Manuel de Falla 27
          Teléfono: 123456789

    No es necesario añadir todos los campos, aunque el nombre es obligatorío.

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

https://colorhunt.co/palette/c5d7bd9fb8ad383e56fb743e

#C5D7BD
#9FB8AD
#383E56
#FB743E
