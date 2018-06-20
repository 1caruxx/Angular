# ![Logo](./icon.png) Pug

[Pug](https://pugjs.org/api/getting-started.html "Pagina oficial de Pug"), que anteriormente era conocido como [Jade](http://jade-lang.com/ "Pagina oficial de Jade"), es un pre-procesador para HTML. Este permite crear un template HTML mucho mas limpio con una sintaxis mas acotada. La razon por la que antes se llamaba "jade" y cambio al nombre "Pug" es que jade era una marca registrada.

## Instalacion y primeros pasos

El template escrito en Pug debe almacenarse en un archivo con extension `.pug`. Los navegadores sin embargo, no reconoceran esta nueva sintaxis, por lo que previamente sera necesario transformar el codigo escrito en pug a codigo HTML. A este proceso se le conoce como "traspilacion".<br/>
Para comenzar a usar pug, sera necesario descargar su CLI (Command Line Interface o interfaz de lineas de comandos) a traves del [gestor de paquetes de node](https://nodejs.org/es/ "Pagina oficial de node.js") (npm o node package manager).<br/>
Para instalarlo, se debera abrir una consola de comandos, no importa cual, y escribir el siguiente comando:

```
npm install -g pug-cli
```

De esta forma, Pug CLI habra sido instalado de forma global en el sistema operativo, por esa razon se coloca el parametro `-g`.<br/>
Para comprobar si se instalo correctamente asi como la version actualmente instalada, se puede lanzar alguno de los siguientes comandos:

```
pug --version
pug -V (mayuscula)
```

Tambien se pueden consultar la lista de comandos de la siguiente manera:

```
pug --help
pug -h
```

El siguiente paso sera crear el archivo con extencion .pug. Una vez escrito en este archivo, como se menciono antes, sera necesaria la traspilacion a codigo HTML. Esto se puede conseguir a traves del siguiente comando:

```
pug ./nombreDelArchivo.pug
```

Simplemente se debe llamar al comando `pug` y pasarle como parametro la ruta del archivo con extension .pug. Si dentro de la consola de comandos, se esta posicionado en el mismo directorio que el archivo, opcionalmente se puede colocar "./" que hace referencia al directorio actual. El resultante sera un nuevo archivo con el mismo nombre pero con extension .html. Tambien es posible traspilar varios archivos a la vez de la siguiente forma:

```
pug ./nombreDelArchivo.pug ./otroArchivo.pug
```

El comando pug tambien permite pasarle como parametro un directorio o varios en el que buscara todos los archivos con extension `.pug` para posteriormente traspilarlos.

```
pug ./nombreDelDirectorio
```

Ademas, pueden añadirse parametros al proceso de traspilacion. El parametro `--pretty` o `-P` (mayuscula) permite que el archivo resultante de la traspilacion, sea facil a la lectura. De otra forma, el codigo resultante estaria comprendido todo en una misma linea y seria casi incomprensible.<br/>
El parametro `--watch` o `-w` permite añadir el o los archivos a la observacion, esto quiere decir que se comenzara a ejecutar un proceso que estara a la espera de cambios en el archivo. Si se edita alguno de los archivos que estan en observacion y se guardan, se traspilaran automaticamente, evitando el proceso de traspilar de forma manual cada vez que se quiera hacerlo. Para finalizar con este proceso, en la consola de comandos se debe pulsar la combinacion de teclas `ctrl + C`.<br/>
El parametro `--out` o `-o` permite seleccionar el directorio en el que se almacenaran los archivos resultantes de la traspilacion. Por ejemplo:

```
pug -w -P ./pug --out ./
```

De esta forma, yo añado a la observacion los archivos con extension `.pug` alojados en el directorio `./pug` y el resultado de su traspilacion se almacenara en el directorio `./` (raiz o en el directorio en el que se estaba posicionado al momento de lanzar el comando).

## Sintaxis

whitespace sensitive
https://www.youtube.com/watch?v=aBb8-kvczsc

