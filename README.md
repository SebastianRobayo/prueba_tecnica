// Creación de la API REST

Para la correcta ejecución de la api lo primero que debemos hacer luego de haber clonado el proyecto, es abrirlo en su editor de texto favorito, seguido de esto abrir una teminal con la ruta de nuestro proyecto e ingresamos a la carpeta "server" y una ves dentro ejecutamos el siguiente comando

    ```
    npm i o npm install
    ```

Esto para que se instalen todos los paquetes que se encuentran en el archivo package.json, luego creamos la base de datos, en este caso use mysql con el gestor phpmyadmin y llame la base de datos inventario a la base. Luego ya de haberla creado descomente un fragmento de código del archivo index.js el cual está indicado en el mismo y vamos a la consola nuevamente y escribimos el siguiente comando (configure dos ejecuciones para levantar el servidor)

    ````
    npm start -> node src/index.js
    npm run dev -> nodemon src/index.js
    ```

En mi caso usé la segunda opción ya que estaba desarrollando la aplicación y luego de ejecutar este comando el, automaticamente realiza la ejecución y creación de los modelos de mis tablas en la base (hago un parentesis aquí, si quieren saltarse este paso dentro del proyecto se encuenta el archivo con la base de datos solo es que lo monten y ya)

Realicé la revisión de los controladores directamente desde postman, pero aparte cree un cliente algo básico con ReactJS, Tailwind y DaisyUI ya hablaré más adelante sobre el.

Ya sin más la estructura del proyecto es algo parecida a MVC

// Creación del cliente

Esto creo que no era parte de la prueba, pero quise realizarlo para que revisaran la conexión del cliente con la api y para la ejecución correcta de este, deben dirigirse a la carpeta del proyecto y acceder a la siguiente ruta src/client una ves se encuentren ahí desde la terminal ejecutaran los siguientes comandos:
   
    ```
    npm i o npm install -> para instalar todos los paquetes requeridos
    npm start -> para la ejecución del programa
    ```

Debo decir que hubieron cosas que quedaron inconlusas, realmente me hubiera gustado un poco más de tiempo, ya que el login quedo inconcluso pero funciona accediendo con usuarios que se encuentren registrados en la base de datos para esta parte del login pense en agregarle cookies para que me almacenara datos importantes como el rol del usuario y asi de esta forma dependiendo del usuario logeado le mostrará algo diferente ya que los modulos quedaron visibles tanto el de administrador como el del cliente, actualmente  pueden acceder a ellos desde el navegador con la url la cual encuentran en el archivo App.js del cliente, el modulo del admin puede realizar el crud completo.

Si les queda algo de tiempo quisiera contarles lo que pense en implementar debido que el modulo del cliente me quedo inconcluso, pense en que el cliente apenas ingresara a la aplicación viera la página de productos, los cuales estaban disponibles en una tabla y asi mismo al oprimir el boton del carrito le revelará una card donde se irian agregando las compras. Una vez el cliente le diera comprar ese envio de datos alimentaba mi tabla llamada historial la cual mostraria los datos de los historicos de ventas y compras de ambas partes, tambien pensé en hacer asignación a la compra por parte del cliente para que este solo pudiera ver sus compras y en el tema de la facturación lo ejecutaria en un modal que se abriria luego de realizar la compra.

Me diverti con este proyecto y en lo personal lo terminaré.

Gracias.

