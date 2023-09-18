# Prueba_diagnostico_desis

La codificación se desarrolló con Visual Studio Code.

Para poder ejecutar el proyecto, es necesario tener instalado PHP y todas las herramientas que PHP requiere. En caso de usar Visual Studio Code, se recomienda descargar XAMPP y algunas extensiones como PHP Intelephense y PHP Debug.

Se debe ejecutar el script que se encuentra en la carpeta SQL_script en MySQL.

Para ejecutar el proyecto, utiliza `php serve: serve project` en el archivo `index.html`.

Utilicé PHP 8.2.4.

Utilicé MySQL 8.0.

No utilicé CSS, ya que las indicaciones no lo contemplaban; por lo tanto, los estilos están en el HTML.

Se recomienda usar la siguiente sintaxis en el archivo `connect.php` para establecer la conexión a la base de datos:

Se recomienda usar la siguiente sintaxis en el archivo connect.php para establecer la conexión a la base de datos: 

// Datos de conexión a la base de datos
$hostname = "localhost"; // Nombre del servidor de la base de datos
$username = "tu_usuario"; // Nombre de usuario de la base de datos
$password = "tu_contraseña"; // Contraseña de la base de datos
$database = "tu_base_de_datos"; // Nombre de la base de datos

// Intenta establecer la conexión a la base de datos
$conn = new mysqli($hostname, $username, $password, $database);

// Verifica si hay errores en la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
