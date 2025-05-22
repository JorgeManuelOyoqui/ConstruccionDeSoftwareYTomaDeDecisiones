# ConstruccionDeSoftwareYTomaDeDecisiones
Repositorio donde estaré subiendo todos mis trabajos, laboratorios y proyectos de la materia: Construcción de Software y Toma de Decisiones

## Bitácora

### Laboratorio 01
En este primer laboratorio, cree una página HTML con Visual Studio Core y verifiqué su estructura con validator.w3.org. Más aparte, respondí las preguntas que me solicitaba la práctica y añadí los datos perosnales que me pidieron.

### Laboratorio 02
Este laboratorio fue sencillo, pues ya tenía instalado git, igual ya tenía una cuenta en GitHub y sólo me quedó crear un repositorio especial para esta materia y sus entregables, a lo que al final tan sólo subí el archivo del laboratorio 1 y una captura de pantalla que muestre justamente la existencia de este repositorio (auqnue supongo que si estás leyendo esto ya deberías saber que. en efecto, este repositorio existe y es público para que lo leas).

### Laboratorio 03
Agregué y programé un archivo CSS para el archivo del Laboratio 1 para que tuviera un estilo más atractivo. Igualmente, luego de terminar de crear el archivo CSS, le cree una copia la cual minimicé con la siguiente página: http://cssminifier.com/, de modo que mi código pudiera estar mejor optimizado. Lamnetablemnte en la minimización hubo un pequeño error, pues los párrafos del footer no tenían el mismo diseño que tenía originlamente, por lo que tuve que agregar líneas de código extra sólo para corregir ese error, pero aparte de eso todo salió bien con la minimización. De todos modos subí ambos archis CSS para tenerlos como base cuando quiera hacer modificaciones al diseño y subí el documento actualizado del HTML para que ahora tenga diseño y tenga las respuestas a las preguntas de este laboratorio.

### Laboratorio 04
Se agrega un archivo completamente nuevo para el laboratorio 4, donde implemento el uso de javascript para desarrollar distintas funciones que realicen las actividades que me piden. En esta práctica no negaré que tuve varias complicaciones, pero al resolverlas pude aprender mucho de ellas. Al final, este código tiene dos archivos CSS minimizados: uno para todo el código y otro destinado sólo a la sección donde respondo a las preguntas del laboratorio 4; donde esto es así por que me resultó más fácil, y, al estar minimizados ambos archivos, creo que no va afectar mucho al rendimiento. Todavía se puede encontrar uno que otro bus en la sección de "Respuestas Lab04", pero siempre y cuando el usuario se limite a usar su respectivo botón y a usar el botón "Regresar" o el botón de la función que quiera implementar no debería haber ningún problema. (Es que se queda un botón conocido como "Repetir" que dejo en las demás funciones, pero que con el texto de las respuestas también se queda y termina duplicando el texto y los botones. Por eso menciono este problema, pero realmente no es tan grave y se corrije al presionar el botón "Regresar").

### Laboratorio 05
Se agrega el laboratorio 5, el cual se realizó sobre el laboratorio 4, cambiando el diseño, agregando la pregunta que pedía el laboratorio 5 y arreglando el problema quese tenía en el laboratorio 4 con que se mostrara varias veces la parte de mostrar las respuestas a las preguntas de ese laboratorio, de modo que se implementó un nuevo diseño usando el framework Materialize (o sea, se usó la versión minimizada del CSS que contenía) y se corrigieron errores que tenía el laboratorio 4. 

### Laboratorio 06
Se agrega el laboratorio 6, que se trata de un archivo completamente nuevo. Aquí resulevo lo que el laboratorio me pide de hacer un verficiador de contrasñeas, agregándole funcionalidades extras como comprobar si el usuario que intenta ingresar es, en efecto, un persona  através de una prueba de arrastrar un elemento, implemetando lo aprendido en clase y en los textos de programación orientada a eventos. 

### Laboratorio 07
El Laboratorio 7 es en equipo, por eso no se encunetra aquí, sino más bien en el repositorio de mi equipo.

### Laboratorio 08
Se agrega el laboratorio 8. El archivo de Lab08EjerciciosyProblemas.js es el que cotiene los ejercicios de promediar un arreglo de números, generar un archivo de texto de un string y agrego el problema de cambiar un númeor entero a un número binario. Los resultados se entregan en la terminal de la plataforma que estés usando. En mi caso, se visualiza en la terminal de Visual Studio Code. Para visualizarlo se debe correr el programa y buscar en el buscador de tu preferencia "http://localhost:3000". 

El archivo Lab08Server.js usa el laboratorio 6 y lo modifica para trabajar en un servidor local. Los otros dos archivos de Lab08.css y .js respectivamente son los mismos que usé para el Laboratorio 6 pero con un cambio de nombre para adaptarse a este laboratorio. Igualmente, agrego al código la capacidad de que node pueda trabajar con archivos estáticos para que pueda trabajar con el .js y .css que se usaron para darle funcionalidad y estilo a este laboratorio. Para visualizarlo se debe correr el programa y buscar en el buscador de tu preferencia "http://localhost:4000" . 

### Casos de Estudio 2
Subo el ejercicio de crear los modelos de entidad relación de los casos de estudio de Farmacéutica y Liga de Futbol a mi repositorio individual.

### Laboratorio 09
Se agrega el laboratorio 9. Se realizaron las instrucciones solicitadas, se creó una base de datos con las respectivas tablas y columnas solicitas y se insertaron sus datos desde los .csv respectivos de cada tabla. Se creo un script de SQL y escribí el código que se requería para hacer las consultas. Para esta entrega subo un .pdf quecontiene las imrpesiones de pantalla del código que usé para las consultas y los resultados de estas, al igual que un archivo .txt para copiar y pegar directamente el código por si lo desearan usar, para no tener que copiarlo todo a mano.

### Caso de Estudio 3
Subo el ejercicio de crear un diagrama de clases haciendo uso formal de la nomenclatura UML para modelar un videojuego a mi repositorio individual. Si revisan los repositorios de mis compañeros de equipo, notarán que son los mismos que el que yo tengo pues esta actividad la realizamos juntos, y luego lo subimos a nuestros repositorios individuales.

### Laboratorio 10
Agrego el laboratorio 10. Para este laboratorio decidí reutilizar el código del Laboratorio 08, donde igualmente uso sus .js y .css (que se mantienen con el mismo nombre). Igualmente incluyo un archivo de texto del resultado de mandar el texto desde Postman usando POST. Realicé los cambios necesarios y agregué tres nuevas rutas diferentes (Antes que nada, quiero avisar que estoy hablando de la segunda versión del laboratorio 10, luego de corregir el aspecto de que /procesar debía hcaer también el formulario, mandarlo y guardarlo en la dirección del servidor, pero ya explciaré en un moemnto cómo hacer eso):

- /acerca: Redirige al usaurio a una ruta que muestra sólo un poco de texto y ya.
  
- /formulario: Redirige al usuario a un formulario donde se le pide que escriba su nombre y un mensaje, el cual al ser enviado se manda en formato de texto al servidor. Este es el mismo formulario que se usará para /procesar. Posdata, esta ruta la dejo para varias razones: para cumplir con el requisito de crear 3 rutas, para que la gente vea como es el formulario que se contesta en /procesar y para reutilizar el código por si alguna vez lo llegara a ocupar.
  
- /procesar: Es el único que no funciona si se hace directo en la red, y requiere, recomendablemente, Postman (que fue lo que yo usé) para hacerle post a la dirección http://localhost:4000/procesar para mostrar su información. Ya que seleccionaste que Postman va a atrabajar con el tipo Post y va usar la dirección que ya les proporcioné, abajo hay unos botones, denle clic a body, luego de entre las opciones que ofrece seleccionen x-www-form-urlencoded. Les va a aparece una tabla. En la columna "key" pongan "nombre" y "mensaje" repsectivamente, y en la columna de "Value" pongan (de modo que los valores queden en la celda izquierda de la key a la que pretenecen), por ejemplo "Jorge" y "Hola Mundo desde Postman!" respectivamente, que fueron los datos que yo usé para hacer las pruebas. Da clic en "Send" y con eso se mandaría el archivo de texto. Si buscas en la dirección donde tiene gusradado tu archivo, encontrarás un nuevo archivo de texto llamado "mensajes" que tendrá el mensaje que mandaste. Ahora, la razón por la que no aparece el fprmulario es porqeu Postman no carga HTMLs como otros porgramas, y al usar POST se considera como que el usuario ya mandó el formulario, por ello se requiere todo el proceso del body que ya mencioné, y justamente por eso aparece sólo el mensaje de "Mensaje recibido", que es la acción que la página realiza luego de mandar el mensaje. IMPORTANTE: si desearas ver el formulario en Postman, cambia de tipo a GET y cambia la url a http://localhost:4000/formulario; con eso te aparecerá el formulario (pero todo aparece sin .css, que, por lo que creo, Postman no los recibe ni los usa, por lo que todo lo que se verá será sin formato).
  
Aparte, si no se encuentra la página, se envía un error 404, e indica que no se encontró la página (o sea, se explcia el error). Esto se puede probar al poner en el buscador de tu preferencia (ggogle, internet explorer, etc): http://localhost:4000/procesar, que te llevará a la ruta /procesar que no funciona más que en una app como Postman.

Para correr este programa, escribe en la terminal: "node Lab10Server.js".

### Laboratorio 11
Se añade el laboratorio 11, donde este trabaja con el laboratiro 10, donde se agregan más rutas para que tenga al menos 5. Una de esta rutas, que sería la ruta /json, es la que contiene la respuesta a la pregunta de : Describe el archivo package.json. Separo mis rutas de .js principal (que sería el Lab11Server.js) y los cambié para que estuvieran dentro de una carpeta llamada routes, que contiene 2 módulos: uno para las rutas principales (que contiene las rutas / (principal), /acerca, /json, /saludo) y otros para las rutas con formularios (/formulario, /procesar). Más allá de eso, sólo mejoré cómo se introducen los archivos estáticos (o sea, los archivos .css y .js). Ahora, para correr la página ya no se usa "node Lab11Server.js", pues al estar trabajando con Node, principalmente con Express, ahora el programa usa el npm de start para correr el programa, facilitando mucho el código que se debe escribir. Así que para correr esta nueva versión que usar Node para ejecutar una versión mejorada del Lab10, escribe en la termina:

"npm start"

Si no tienes instalado ni package.json ni Express, entonces escribe esto primero en la terminal:

// Para descargar package.json
npm init -y
// Para descargar Express
npm install express

Y luego intenta de nuevo escribir npm start.

### Laboratorio 12
Se añade el laboratorio 12, donde ahora modifico la estructura del código haciendo una nueva carpeta llamada public para los archivos estáticos CSS y JS. Igualmente agrego un nuevo archivo /templatingEngines en el que vienen las respuestas a la pregunta de este laboratorio. Pero, principalmente, adapto el código del laboratorio 11 (que fue el que usé para este laboratorio) para que fuera dinámico con EJS, para hacer un uso efectivo de los partials, refactoricé la aplicación para que mantuviera la funcionalidad pero trabajando con un motor de vistas (que si mal no recuerdo, se agregó desde el Lab11) y mejoré la aplicación para que en lugar de guardar los datos en un archivo, ahora también los despliegue en una de las páginas, que en este caso sería la página /formulario, donde, luego de enviar un mensaje, se ven todos los mensajes enviados en orden de antiguedad de mayor a menor.

### Laboratorio 13
Se añade el laboratorio 13. En esta ocasión, y para simplificarme la vida, cree un archivo completamente nuevo, donde, siguiendo las instrucciones, este laboratorio adopta un estilo arquitectónico MVC (que es visible en el código). Más aparte, como funcionalidad, muestra las respuestas a las preguntas del laboratorio 13 y aparte tiene una pestaña para añadir objetos a una lista y otra pestaña para ver la lista. Las rutas que tiene son: "/", "/add", "/list" y "/preguntas".

### Laboratorio 14
Se añade el laboratorio 14. Siguiendo con el trabajo realizado en el laboratorio 13, en este nuevo laboratorio de agrega el trabajo con cookies, sesiones y flash. Ahora, hay una sección para el Laboratorio 4 donde puedes iniciar sesión, donde, al volver a la página principal, te muestra un mensaje de bienvenida generada con flash y un nuevo botón para cerrar sesión usando express-sessions. Aparte, se genera una cookie para desplegar un mensaje, que se puede ver en la pestaña "/ver_cookie". Las pestañas en esta página son: Las del Lab 13 ( "/", "/add", "/list" y "/preguntas") y las nuevas son: "/login" (para iniciar sesión), "/logout" (para salir de la sesión, pero eso se hace de forma automática al presionar el botón, pero si inicias sesión y luego escribes "/logout" también sales de la sesión) y "/ver_cookie" (para ver el mensaje de la cookie que debería ser: "Valor de la cookie: ningún_dato_sale_o_entra_de_aquí_Data_shall_not_pass_>:3").

### Laboratorios 15 Y 16
Como prueba de mi desarrollo de los laboratorio 15 y 16, que se realizaron en clase, subo en la carpeta Lab 15 una foto del archivo que el profesor generó mostrando aquellos alumnos que sí estuvieron presentes durante la realización de estos laboratorios y que, en efecto, cumplieron con su desarrollo.

### Laboratorio 17
Se añade el laboratorio 17 (pero en este repositorio sóllo están las preguntas, para ver los archivos del programa debes ir a la carpeta de Avance 3 del repositorio grupal), donde en este caso no realicé una actividad desde 0, sino que usé el mismo proyecto que se está desarrollando para el socioformador para cumplir con este laboratorio, de modo que se agrega al index una conexión a la base de datos (que en mi caso tuve que agregar otros aspectos como el tipo de port que usaba, pues yo rabajo con el 3307 y mis compañeros con el 3306). Igualmente, se usa el archivo tablas.js en la carpeta routes para hacer tanto las rutas como la lógica para mostrar las tablas de la base de datos, donde sólo la tabla clientes (en clientesConrtoller.js en la carpta controllers) tiene algunas funciones extra. Si desea ver como funciona nuestro laboratorio, descargue el archivo PrototipoEsplendor_ver3.4.zip de la carpeta de Avance 3 del repositorio grupal, registrese con una cuenta aleatoria y, en el botón filtrar, seleccione alguna de las tablas, lo que lo redirigira a ver los datos de la tabla (sin formato aún)

Actualmente, hay una nueva versión de este archivo adaptado al modelo MVC para las próximas entregas, como el Laboratorio 18, donde ahora hay un archivo especial para la conexión con la base de datos (llamado database.js) y se agrego a cada tabla su propio model y controller, y se cambio la funcionalidad de tablas.js para que sólo haga referencia a las rutas de las tablas, y así poder verlas (pero sin formato aún).

Ahora, como ya mencioné, en este repositorio sólo encontrarán las respuestas a las preguntas del laboratorio 17, los archivos para el laboratorio se encuentran en el repositorio grupal (pues fue un laboratorio que entre mi equipo y yo realizamos de forma colaborativa, tanto para desarrollar el proyecto como para cumplir este laboratorio. En el repositorio grupal, se puede encontrar en la carpeta de Avance 3. Ahí viene un .zip (con el nombre PrototipoEsplendor_ver3.4.zip) que contiene todos los archivos necesarios para el programa y contiene los scripts y demás que se ocupa para recrear la base de datos que nosotros usamos para este laboratorio.

### Labratorio 18
Al igual que en el laboratorio 17, este laboratorio fue implementado en el proyecto para el socioformador. En este caso, ya se presenta todo lo que se le agregó al proyecto para que cumpliera con lo pedido en el laboratorio 18 en el documento Explicacion_Laboratorio_18_19.txt que se puede encontrar en el repositorio grupal dentro de la carpeta de Avance 3. La versión del proyecto que incluye este avance está en ls caprte comprimida del repositorio grupal (también en la carpeta de Avance 3) llamada PrototipoEsplendor_ver3.8.zip; versión que se comparte también con el Laboratorio 19, pues igualmente contiene todo lo que se solicita en ese laboratorio. Las preguntas a este laboratorio se encunetran en este repositorio en la carpeta Lab18.

### Laboratorio 19
Al igual que el Laboratorio 17 y 18, este laboratorio se implementa en el proyecto para el socioformador. Como ya se mencionó, este archibo es compartido por el Laboratorio 18, por lo que se usa la misma versión del proyecto para ambos (cuya ruta es la misma), e igualmente el documento que indica en qué partes incorporamos el laboratorio 19 en el proyecto viene también en el archivo Explicacion_Laboratorio_18_19.txt. En este caso, el laboratorio sólo implementa la visualización de datos y de interfaz según el ususario debido a ciertas complicacione sy falta de tiempo para implementar otras funciones como agregar datos, modificarlos o eliminarlos según los permisos de rol del usuario, pero eso es algo que sí estaremos implementando a futuro. Las preguntas a este laboratorio se encunetran en este repositorio en la carpeta Lab19.

### Laboratorio 20
Agrego el Laboratorio 20, donde contesto cada pregunta que me pide y hago todos los sricpts y soicitudes que me piden, mostrando como evidencia tanto los scripts SQL que usé como una captura de pantalla de que en efecto estoy usando el código que dije que usaba y el resultado de la tabla luego de hacer la consulta.

### Laboratorio 21
Hago las consultas que se me solicitan de la base de datos TC2005B_DB

### Laboratorio 22
Actualizamos el proyecto del socioformador de modo que se implementan nuevas funciones para descargar (en pdf, excel o csv) o subir (en csv) archivos a la base de datos, y también para poder ver, agregar, editar o eliminar datos dentro de la base de datos. Este avance se encuentra en el repositorio grupal en la carpeta de Avance 4, dentro de archivo Avance4.zip, y de entre todos los programas es el que se llama PrototipoEsplendor_ver4.1.zip. Sigan las instrucciones del documento "Explciación del Laboratorio 22" para entender que cambios se hicieron en la base de datos y ver dónde se encuentran y cómo se usan las nuevas funcionalidades.

### Laboratorio 23
Hago los procedures que se me solicitan de la base de datos TC2005B_DB

### Laboratorio 24
Genero un archivo desde 0 que trabaje con AJAX para que cuando un usuario ingrese un nuevo producto a la lista de compras, se imprima el producto de forma automática sin necesidad de reiniciar la página (lo único que sí requiere recarga es la tabla grid). Aparte de que respondo las preguntas del laboratorio.

### Laboratorio 25
Realizo la investigación que se me solicitó acerca de los deadlocks en un contexto de bases de datos. 
