🏋️‍♀️🏋️‍♀️ WorksOutGym 🏋️‍♀️🏋️‍♀️

_Descripción:_

WorksOutGym es una aplicación web desarrollada en React que ayuda a los entusiastas del fitness a realizar un seguimiento de sus rutinas de ejercicio. Ofrece funciones de registro e inicio de sesión, gestión de ejercicios y usuarios, y una interfaz de usuario atractiva. Junto con el proyecto del backend. La aplicación permite a los usuarios registrar ejercicios, ver detalles, buscar y gestionar perfiles de usuario, incluyendo roles de administrador.

_Instrucciones:_

Abrir los dos proyectos, frontend y backend.

Terminal backend: npm run dev desde la carpeta raíz. Bajo les facilitamos el enlace del proyecto del Backend:

    https://github.com/Susanistikis/WorkOutGym-

Terminal frontend: npm install, cd frontend, npm start.

_Dependencias:_

    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@mui/material": "^5.14.7",
    "@mui/system": "^5.14.7",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "fetch": "^1.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.15.0",
    "react-scripts": "5.0.1",
    "safe-buffer": "^5.2.1",
    "safer-buffer": "^2.1.2",
    "victory": "^36.6.11",
    "web-vitals": "^2.1.4"

_Componentes:_

- _RegisterComponent:_ Formulario para que los nuevos usuarios se registren en la aplicación.

        ¿Quieres registrarte? Aquí te muestro un ejemplo:

          Nombre: Ejemplo.
          Email: ejemplo@ejemplo.com
          contraseña: ******

- _LoginComponent:_ Formulario para que los usuarios inicien sesión en la aplicación.

        ¿Ya te has registrado? Introduce tu:

          Email: ejemplo@ejemplo.com
          contraseña: ******

- _Dashboard:_ Componente que mostrará dos barras de navegación una en la parte superior de la aplicación y otra en el lateral.

  - _HeaderDashboard:_ Contiene un mensaje de bienvenida con el nombre de usuario que esta conectado y la función de cerrar sesión.

  - _Sidebar:_ Contiene los botones que navegan por las diferentes páginas.

    📈:_ Este botón te lleva al contenido principal de la página de los usuarios.
    🔥:_ Este botón te muestra la lista de los ejercicios.
    🧑🏻:_ Este botón te muestra tu perfil de usuario.
    ⚙️:_ Este botón muestra la lista de usuarios (solo para administradores).

  - _MainContent:_ Es el apartado dónde se irán desplegando las diferentes páginas, principalmente muestra el panel de las estadísticas, últimos ejercicios agregados entre otros.

- _ExerciseList:_ Componente que muestra la lista de todos los ejercicios disponibles. En la cual podrás filtrar los ejercicios, por nombre, grupo muscular, favoritos o los ejercicios recomendados por todos los usuarios.

  - _InfoExerciseComponent:_ Componente que muestra los detalles del ejercicio, foto, nombre, descripción y grupo muscular. Tiene un botón para marcar o desmarcar el ejercicio de favoritos, y otro para marcar o desmarcar de recomendados.

  - _ExercisesPostComponent:_ Componente reutilizable para mostrar cada ejercicio en el mismo formato con los botones de ❤️ (marcar o desmarcar de favorito) y 👍 (marcar o desmarcar de recomendados).

  - _AddExerciseComponent:_ Componente para agregar un ejercicio, nombre, descripción, seleccionar un grupo muscular y agregarle una fotografía.

        ¿Quieres agregar uno? Aquí te muestro un ejemplo:

          Nombre: Thruster.
          Descripción: Movimiento que combina una sentadilla frontal (front squat) seguido de un push press (empuje de hombros) realizado sin una pausa entre ambos.
          Grupo muscular: Full body
          Foto: https://i.ytimg.com/vi/L219ltL15zk/maxresdefault.jpg Descarga la fotográfia para poder añadirla o usa imágenes propias.

  - _ExercisesStatsComponent:_ Componente que muestra las estadisticas de los ejercicios, favoritos, recomendados, por grupo muscular, también muestra una lista de los ejercicios ordenados por fecha de creación o los últimos actualizados.

- _ListUserComponent:_ Componente que muestra la lista de los usuarios al administrador y dónde el administrador podrá cambiar el rol a los usuarios.

  - _UpdateUserRole:_ Componente en el que el administrador podrá cambiar el rol a los usuarios y que pasen de cliente a admin o viceversa.

  - _UserPostComponent:_ Componente reutilizable para mostrar la información de cada usuario en el mismo formato.

  - _InfoUserComponent:_ Componente que muestra la información de un usuario, dónde podrá editar su perfil y añadir información adicional.

        ¿Quieres saber cómo? Aquí te muestro un ejemplo:

          Nombre: María
          Biografía: Apasionada por el deporte.
          Apellidos: De la Torre Martínez
          Fecha de cumpleaños: 1987-11-18
          Dirección: C/ Manuel de Falla 27
          Teléfono: 123456789

    No es necesario añadir todos los campos, aunque el nombre es obligatorio.

- _FooterComponent:_ Componente reutilizable que muestra la información del pie de página, por quien está hecho el proyecto, un link para que nos conozcan y la promoción y academia en la cual hemos realizado nuestro proyecto final.

- _HeaderComponent:_ Componente que contiene los links de la página principal de la aplicación, que mostraran el registro o el inicio de sesión

- _HomePageComponent:_ Componente que muestra la página principal de la aplicación, contiene imágenes, información para los usuarios y un link para registrarse.

- _Button:_ Queríamos que todos nuestros botones siguieran una misma estructura por eso creamos este componente para poder importarlo a nuestros otros componentes.

_Context:_ Componente fundamental para gestionar el estado global de la aplicación, se utiliza para gestionar el estado global de la aplicación, relacionado con la autenticación de usuarios. Almacena y actualiza información como el rol del usuario, el token de autenticación y el ID de usuario en el almacenamiento local. Además, proporciona funciones para iniciar sesión y cerrar sesión, permitiendo que otros componentes de la aplicación accedan y modifiquen estos datos de manera centralizada.

_Hooks:_

- _useUser:_ Un hook para manejar la autenticación del usuario, se utiliza para obtener información de un usuario específico en la aplicación. Al proporcionar el id del usuario y su token de autenticación, el hook realiza una solicitud para obtener los datos del usuario correspondiente y proporciona estos datos, así como indicadores de carga (loading) y errores (error) para su uso en componentes relacionados con la visualización de la información del usuario.

- _useUserList:_ Un hook para manejar la lista de los usuarios, facilita la gestión y actualización de la lista de usuarios en la aplicación, proporcionando una forma eficiente de cargar usuarios y modificar sus roles, junto con información sobre el estado de la operación.

- _useExercise:_ Un hook para manejar la obtención y gestión de datos de un ejercicio. Al proporcionar el id del ejercicio y su token de autenticación, el hook realiza una solicitud para obtener los detalles del ejercicio correspondiente. Luego, proporciona estos datos, junto con indicadores de carga (loading) y errores (error) para que puedan ser utilizados en componentes relacionados con la visualización de la información detallada del ejercicio.

- _useExerciseList:_ Un hook para manejar la obtención y gestión de datos de la lista de ejercicios. Facilita la carga inicial de ejercicios, así como la adición y eliminación de ejercicios de la lista, proporcionando estados y funciones útiles para interactuar con los datos de los ejercicios.

_Páginas:_

- _ConocenosPage:_ Muestra información de dos desarrolladores, Amalia Ponce Toledo y Susana Martínez Payá, quienes son Full Stack Developers. Cada desarrollador tiene un video de presentación, un enlace de correo electrónico y una breve descripción de sus habilidades y pasión por la tecnología. La página está diseñada para dar a conocer a los desarrolladores y proporciona información sobre cómo contactarlos.

- _HomePage:_ La página representa el inicio de la aplicación. Esta página incluye un encabezado (HeaderComponent) en la parte superior, seguido del contenido principal de la página de inicio (HomePageComponent), y finalmente muestra el pie de página (FooterComponent). La página de inicio es la primera vista que los usuarios ven al acceder a la aplicación, brindándoles una introducción a la misma.

- _ExercisesPage:_ La página representa la vista de la aplicación en la que los usuarios pueden ver una lista de ejercicios. La página incluye un encabezado (HeaderDashboard), una lista de ejercicios (ExerciseListComponent), y una barra lateral de navegación (Sidebar). Además, si el usuario tiene el rol de "admin", se muestra la opción de agregar ejercicios (AddExerciseComponent). Esta página ofrece una experiencia de navegación central para usuarios y administradores.

- _InfoExercisePage:_ La página muestra información detallada de un ejercicio específico en la aplicación. Incluye un encabezado de panel de control (HeaderDashboard), los detalles del ejercicio (InfoExerciseComponent), y una barra lateral de navegación (Sidebar). Esta página permite a los usuarios acceder y aprender más sobre un ejercicio en particular.

- _InfoUserPage:_ La página muestra información detallada de un usuario en la aplicación. Incluye un encabezado de panel de control (HeaderDashboard), los detalles del usuario (InfoUserComponent), y una barra lateral de navegación (Sidebar). Esta página permite a los usuarios acceder y ver información detallada sobre un usuario en particular, incluyendo la capacidad de editar su perfil y agregar información adicional.

- _ListUserPage:_ La página muestra una lista de usuarios en la aplicación y está diseñada principalmente para administradores. Incluye un encabezado de panel de control (HeaderDashboard), la lista de usuarios (ListUserComponent) que solo se muestra si el usuario tiene el rol de "admin", y una barra lateral de navegación (Sidebar). Esta página permite a los administradores ver y gestionar la lista de usuarios y cambiar sus roles.

- _UserPage:_ Es la página principal después de que un usuario haya iniciado sesión en la aplicación. Proporciona una interfaz de usuario completa con un encabezado de panel de control (HeaderDashboard), un contenido principal que puede incluir estadísticas y otros elementos relevantes (MainContent), y una barra lateral de navegación (Sidebar). Esta página ofrece una experiencia de usuario completa y permite a los usuarios acceder y navegar por las diversas funciones y características de la aplicación.

- _LoginPage:_ La página es la vista de inicio de sesión de la aplicación. Incluye un encabezado (HeaderComponent), un formulario de inicio de sesión (LoginComponent), y un enlace que redirige a los usuarios nuevos a la página de registro (/register). Esta página permite a los usuarios existentes iniciar sesión en la aplicación y acceder a sus cuentas.

- _RegisterPage:_ La página representa la vista de registro de la aplicación. Incluye un encabezado (HeaderComponent), un formulario de registro (RegisterComponent), y un enlace que redirige a los usuarios que ya tienen una cuenta a la página de inicio de sesión (/login). Esta página permite a los usuarios nuevos registrarse en la aplicación y unirse a la comunidad de fitness.

_Service:_

- _Index.js:_ Es el fichero dónde se hacen las peticiones al backend, usando una variable de entorno y los diferentes endpoints.

_Styles:_

- _Index.css:_ Es el archivo principal que define la apariencia, contiene definiciones de fuentes, colores, tamaños de fuente, clases reutilizables y estilos para botones, así como reglas de diseño responsivo para adaptarse a diferentes tamaños de pantalla. También establece variables personalizadas para colores y tamaños de fuente que se utilizan en toda la página, lo que facilita la consistencia y la gestión de estilos en el sitio web.

  - _Paleta de colores:_

https://colorhunt.co/palette/c5d7bd9fb8ad383e56fb743e

#C5D7BD
#9FB8AD
#383E56
#FB743E

Luego hemos creado archivos independientes para definir los estilos de las diferentes páginas y componentes:

- _ExercisePage.css:_
- _HeaderDashboard.css:_
- _InfoExercise.css:_
- _Main.css:_
- _Sidebar.css:_
- _addExercise.css:_
- _Conocenos.css:_
- _footer.css:_
- _Header.css:_
- _HomePage.css:_
- _Login.css:_
- _Register.css:_
- _Users.css:_

  - _Creado por:_

    - _Amalia Divina Ponce Toledo:_

      https://www.linkedin.com/in/amaliadivinaponcetoledo/

    - _Susana Martínez Payá:_

      https://www.linkedin.com/in/susanamart%C3%ADnezpay%C3%A1/
