# ![Logo](./icon.png) Introduccion a Angular

## Tabla de contenidos

* [Instalacion y primeros pasos](#instalacion-y-primeros-pasos)<br>
&nbsp;&nbsp;&nbsp;[npm scripts](#npm-scripts)
* [Estructura de un proyecto](#estructura-de-un-proyecto)
* [Flujo del codigo de un proyecto de Angular](#flujo-del-codigo-de-un-proyecto-de-angular)
* [Componentes](#componentes)<br>
&nbsp;&nbsp;&nbsp;[Creacion de un componente](#creacion-de-un-componente)
* [Piezas declarables de una vista](#piezas-declarables-de-una-vista)
* [Modulos](#modulos)
* [Directivas](#directivas)

## Instalacion y primeros pasos

(pagina 86 del manual)<br>
Angular es un framework que permite desarollar aplicaciones dinamicas del lado del cliente (front-end).<br>
Sus aplicaciones estaran escritas en TypeScript (se instala por defecto con Angular), HTML y CSS. [Angular CLI](https://cli.angular.io/ "Pagina oficial de Angular CLI") (Command Line Interface) es una herramienta que permite facilitar la tarea de iniciar un proyecto de Angular. Para instalar Angular CLI sera necesario usar el gestor de paquetes de [Node](https://nodejs.org/es/ "Pagina oficial de Node.JS") (Node Package Manager o NPM) y lanzar el siguiente comando en una terminal.

```
npm install -g @angular/cli
```

De esta forma, Angular CLI se instalara globalmente en el equipo y no sera necesaria su instalacion por cada proyecto. Para comprobar que se haya instalado correctamente se puede lanzar alguno de los siguientes comandos que ademas permiten comprobar su version.

```
ng -v
ng --version
```

Si se desea instalar la ultima version de Angular en el caso de que la nuestra no este actualizada, primero sera necesario desinstalar Angular CLI:

```
npm uninstall -g @angular/cli
```

Luego borrar la cache de npm:

```
npm cache clean
```

Y finalmente volver a instalarlo.

Esta herramienta permitara crear una plantilla basica de un proyecto de Angular. Si no se quiere descargar cada vez que se cree un nuevo proyecto y consumir internet, se puede copiar la carpeta recien generada y usarla tantas veces se quiera. El comando es:

```
ng new nombreDelProyecto
```

De esta manera se creara un directorio en donde se este posicionado en la ventana de comandos que contendra los archivos de la aplicacion.<br>
Para poder visualizar mi aplicacion en un navegador, se debera lanzar el siguiente comando en la raiz del proyecto (SHIFT + click derecho sobre la raiz para abrir una ventana de comandos).

```
ng serve
```

Este comando abrira la aplicacion en un servidor, en este caso en el localhost y para poder verla se debe escribir localhost:4200 en la barra de direcciones. Con los parametros --open o -o se abrira una nueva pestaña en el navegador por defecto que permite visualizar el proyecto. Los cambios que se le hagan al mismo, se veran reflejados de forma automatica en el navegador, siempre y cuando no se interrumpa con el proceso serve en la consola de comandos. En dicho caso, se tendra que volver a arojar el comando y actualizar la pagina para ver los cambios.

Para subir el proyecto a un host, primero se tiene que crear la version de produccion del proyecto lanzando el siguiente comando en la raiz del proyecto:

```
ng build --prod
```

Esto generara un directorio llamado "dist" en la raiz cuyo contenido sera el proyecto final que puede ser subido a un host usando Filezilla.
<p color="red">Si se ejecuta el index.html de la version de distribucion de mi proyecto, no funcionara de forma local, sino que tendra que ser a travez de un servidor.</p>

## npm scripts

Los scripts de npm son alias o pseudonimos de los comandos de Angular CLI. Estos pueden ser encontrados en el archivo "package.json" generado junto al proyecto de angular.

```
"scripts": {
  "ng": "ng",
  "start": "ng serve",
  "build": "ng build --prod",
  "test": "ng test",
  "lint": "ng lint",
  "e2e": "ng e2e"
}
```

Las claves seran los scripts y el valor de las mismas, los comandos que se ejecutaran. De esta forma, al abrir una consola en la raiz de mi proyecto y ejecutar el comando "npm start", se disparara el comando "ng serve". Es posible modificar los valores para crear nuestros propios comandos, pero no crear nuevos scripts.

## Estructura de un proyecto

```
root
  |---> e2e
  |---> node_modules
  |---> src
  |---> .angular-cli.json
  |---> .editorconfig
  |---> .gitignore
  |---> karma.conf.js
  |---> package-lock.json
  |---> package.json
  |---> protactor.conf.js
  |---> README.md
  |---> tsconfig.json
  |---> tslint.json
```
**node_modules:** En este directorio se almacenan todas las librerias que npm descargo y que se necesitan para el funcionamiento de un proyecto de Angular.<br>
**src:** Probablemente, el directorio con mas importancia del proyecto y donde la mayor parte del tiempo se estara desarollando. Contendra la app del proyecto asi como sus componentes, modulos, servicios, etc. Su estructura es la siguiente:

```
src
  |---> app
  |      |---> app.component.css
  |      |---> app.component.html
  |      |---> app.component.spec.ts
  |      |---> app.component.ts
  |      |---> app.module.ts
  |
  |---> assets
  |      |---> .gitkeep
  |
  |---> environments
  |      |---> environment.prod.ts
  |      |---> environment.ts
  |
  |---> favicon.ico
  |---> index.html
  |---> main.ts
  |---> polyfills.ts
  |---> styles.css
  |---> test.ts
  |---> tsconfig.app.json
  |---> tsconfig.spec.json
```
**app:** El directorio de la aplicacion de Angular, en el se encontraran los componentes, modulos, servicios, etc. Angular CLI genera un componente base, conocido como el componente principal o componente root con sus respectivos tres archivos, .ts, .html y .css. Ademas genera el modulo principal de la aplicacion.<br>
**assets:** En este directorio se deberan guardar imagenes y demas recursos que al momento de compilar el proyecto y crear la version de distribucion, seran copiados.<br>
**favicon.ico:** El icono que aparecera en la pestaña del navegador.<br>
**index.html:** El template que cargara por default en el navegador. En su cuerpo sera invocado el componente principal. La programacion orientada a componentes sigue una logica de estructura de arbol, en donde el componente principal que es llamado en este archivo, se ramificara en componentes mas pequeños y estos a su vez tambien se ramificaran. De esta forma, la capa de abstraccion es mayor que en otros paradigmas.<br>
**main.ts:** Cuando sea traspilado, este se encargara de arrancar la aplicacion una vez sea cargardo en index.html en el navegador. Este importa las dependencias especificadas en el archivo package.json y y el modulo principal de la app. Este archivo es el que le indica a [Webpack](https://webpack.js.org/ "Pagina oficial de Webpack") la herramienta encargada de la traspilacion del codigo a js, los paquetes de scripts que tiene que inyectar cuando se arroje el comando ng serve o se compile la version de distribucion con el comando ng build --prod.<br>
**styles.ccs:** Los estilos que sean declarados a este archivo, se aplicaran a todos los elementos de la app.

<b>.angular-cli.json:</b> Es el archivo de configuracion de Angular CLI para nuestro proyecto. En el podemos encontrar y modificar informacion tal como el nombre del proyecto, el archivo index del proyecto, el directorio donde se almacenara la version de distribucion de nuestro proyecto,etc.<br>
<b>.editorconfig:</b> Archivo de configuracion que se aplica sobre el editor de codigo, para que la configuracion, sea comun en todos los proyectos de Angular, sin importar que editor se este usando.<br>
<b>.gitignore:</b> Archivo el cual contendra el nombre de todos los archivos y directorios que desean ser ignorados a la hora de subirlos a traves de la tecnologia [git](https://es.wikipedia.org/wiki/Git).<br>
**package.json:** Un archivo con formato JSON que resume las depencias y librerias que utiliza este proyecto asi como las versiones necesararias de las mismas. Tambien se encuentran los scripts para Angular CLI.<br>
**README.md:** Un archivo que puede ser encontrado en cualquier proyecto que contiene informacion util acerca del mismo. En este caso, contiene informacion sobre los comandos de Angular CLI.<br>
**tsconfig.json:** Archivo de configuracion del compilador de TypeScript. Siempre es creado en el directorio root de una aplicacion escrita en este lenguaje.

## Flujo del codigo de un proyecto de Angular

1) El archivo index.html es cargado en el navegador
2) Webpack crea los paquetes de scripts en base al archivo main.ts y los inyecta en el documento html, ya sea para la version de produccion o cuando se sirve el proyecto de forma local.
3) En el main.ts se importa el modulo principal de la aplicacion, app.module.ts asi como las depencias.
4) El modulo principal importa todos los elementos del proyecto, el componente root siendo el primero.
5) Se carga el componente root en el body y se visualiza la aplicacion.

## Componentes

Un componente sera cualquier elemento de la aplicacion, es una etiqueta que mezcla los lenguajes HTML, CSS y JavaScript. Es un elemento logico que conforma mi aplicacion y controla una porcion de la pantalla. Los archivos que contienen los componentes de la aplicacion pueden ser encontrados en la siguiente ruta:

```
./src/app/
```

Siendo app.component.ts el componente root o principal que crea Angular junto al proyecto. Es el primer componente que se carga en mi aplicacion.<br>
Un componente tendra la siguiente estructura:

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my first app';
}
```

La primer linea sera la que importara los recursos necesarios para la creacion de un componente y me proveera de un decorador.
Lo que vendra abajo sera el decorador. Este provee de caracteristicas y funcionalidades adicionales a la o las clases que vienen debajo. Tambien se encarga de relacionar el componente con un template html y una o varias plantillas de estilos.<br>
Como parametro, el decorador recibira un JSON (este contenido que se le pasa como parametro se le conoce como "anotacion") en donde las claves (ahora llamadas propiedades) asi como los valores que se le asignen, seran los METADATOS que se aplicaran a las clases. Los metadatos son informacion que utiliza Angular para saber que archivos va a requerir o enlazar. Estos pueden ser encontrados en los decoradores de mis componentes (@component) y modulos (@ngmodule). Se identifican ya que todos empiezan con el caracter "@".<br>
La propiedad "selector" sera la directiva que indica la etiqueta a utilizar para cargar el componente. Se puede observar que en el body del index.html, el componente root es cargado a travez de las etiquetas definidas por esa propiedad. Se debe escribir todo en minuscula (ya que html no distingue entre minusculas y mayusculas) y cada palabra se sepera con guiones medios. Siempre se coloca el prefijo app (cuanso se crea de forma automatica mediante el comando ng generate component nombre, este prefijo se puede modificar en el archivo .angular-cli.json cambiando el valor de la clave "prefix"). Para las clases y metodos se mantiene por convencion el estilo PascalCase (todas las palabras juntas y la primera letra de cada una sera en mayuscula).<br>
La propiedad "templateUrl" asocia el componente a una vista. Dicho de otra forma, a una plantilla HTML o template que exteriorizara informacion del componente.<br>
Todos los estilos que asocie asi como las propiedades que llame, solo tendran visibilidad en este fichero, ya que fue al que vincule con mi componente.<br>
La ultima de las propiedades que genera por defecto Angular en el proyecto es "styleUrls" a la cual se le asigna un array ya que pueden ser varios los ficheros CSS que se asocien a mi componente.<br>
Finalmente, debajo del decorador, vendran distintas clases que brindan funcionalidades al componente y le dan un nombre. Las propiedades que estas contengan por defecto son publicas, aunque es una buena practica escribir la palabra reservada "public" delante de ellas.<br>
Para que un componente pueda funcionar, tiene que ser registrado en el archivo app.module.ts con la siguiente linea:

```
import { AppComponent } from './app.component';
```

En donde la palabra reservada "import" me permite importar el componente cuyo nombre ira encerado entre llaves y la palabra "from" indicara el archivo en el cual se puede encontrar. No es necesario indicar la extension, ya que por defecto tomara el archivo con extension .ts ademas de que luego del traspilado, en la version de distribucion, los archivos con esta extension dejaran de existir.

## Creacion de un componente

Los componentes que creemos pueden ser todos alojados en un directorio especial dentro de app que tambien se debe crear, o bien cada componente almacenarlo en un directorio diferente que vayamos creando. Todo siempre dentro del directorio app.<br>
Puedo crear un componente de forma MANUAL, creando un archivo dentro de este directorio. El nombre de este archivo debe respetar la siguiente estructura: nombre.component.ts para asi distinguir a simple vista que se trata de un componente. Dentro de el, se debe escribir la estructura basica de un componente. Ademas se debe darlo de alta en el archivo app.module.ts como se menciono en el apartado anterior y agregarlo al decorador "declarations" del decorador "@NgModule" que se encuentra en el mismo archivo. De esta manera, los componentes de este modulo estaran relacionados entre si y se podran utilizar en el template de cualquiera. En esta propiedad, se cargan todos los componentes, directivas y pipes. En la propiedad "imports", se cargaran los modulos. En "providers" por su parte, se cargaran todos los servicios.

```
@NgModule({
  declarations: [ ----------------------> Componentes
    AppComponent,
    nuevoComponente --------------------> El nombre de mi nuevo componente
  ],
  imports: [
    BrowserModule ----------------------> Modulos
  ],
  providers: [], -----------------------> Servicios
  bootstrap: [AppComponent]
})
```

Tambien es posible crear un componente a traves del siguiente comando:

```
ng generate component nombreDelNuevoComponente
```

Este comando puede ser lanzado desde cualquier directorio de mi proyecto, Angular sabe que el componente debe crearlo deontro del directorio app. Tambien posee un alias, "g", de tal forma que es indiferente escribir "generate" o "g" para utilizar esta herramienta. El comando "generate" no solo permite generar un componente, sino otros elementos que Angular nos provee. El nombre del componente no debe ser acompañado por el .component.ts ya que de esto se encargara Angular CLI. El resultado final sera un directorio con el nombre que se le dio al componente con cuatros componentes en su interior, el .ts, el .html y .css (vacios) y un .spec.ts. No sera necesario darlo de alta en el archivo app.module.ts ya que esto lo hara automaticamente Angular.<br>
Tambien se podra observar que en el componente.ts, se implementara la interfaz "OnInit", que consta de la definicion de un solo metodo con el mismo nombre y que devuelve void. En concepto, este metodo puede asemejarse a un constructor, se ejecuta despues de la creacion de un componente. La diferencia es que los contructores estan destinados a realizar tareas acostadas, especificas y simples. Por ejemplo, la asignacion de valores a las propiedades del componente. Este metodo especial, se usa para realizar tareas mas complejas. Siempre que sea invocado, debe ser debajo del constructor. [Mas informacion](http://www.enrique7mc.com/2017/04/diferencia-entre-constructor-y-ngoninit-en-angular-2/)

## Piezas declarables de una vista

Se escriben al lado del nombre de la etiqueta y sirven para modificar la misma o cambiar su comportamiento.

**Propiedad:** Es un atributo de la etiqueta al cual se le puede agregar o cambiar un valor. Siempre se escribe entre corchetes. El atributo puede ser propio de HTML, agregado por Angular o personalizado por el desarollador si se trata de un componente.<br>
**Binding:** Angular permite el enlaze doble entre el elemento del DOM y una propiedad de una etiqueta o componente y viceversa, de tal forma que si se cambia alguno de los dos, el cambio se vera reflejado en el mismo momento en ambas partes. <br>
**Eventos:** Se escriben entre parentesis y consisten en un metodo que sera autoinvocado ante la ocurrencia de un suceso. A los metodos que asignan a un suceso se los denomina "manejadores".

## Modulos

Un modulo, es un elemento de Angular que permite agrupar logicamente otros elementos, tales como componetes, servicios, pipes o incluso otros modulos. El modulo principal de la aplicacion es app.module.ts. Para generar un nuevo modulo, se puede utilizar el siguiente comando

```
ng generate module nombreDelModulo
ng g module nombreDelModulo
```

Esto generara un directorio con el nombre del modulo que contendra el correspondiente .ts y el .spec.ts para su testeo. Su estructura es la siguiente:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

El primer import se encargara de importar directivas y servicios que nos brinda Angular para usar en un template tales como *ngIf o *ngFor.<br>
El segundo import sera el encargado de importar la definicion de un modulo y el que suministrar un decorador para este que vendra debajo de todos los imports. El decorador estandar para los modulos es "@ngModule". En la seccion de componentes se detallaron los metadatos que este decorador recibe.<br>
Para asociar un componente a un modulo, se puede hacer de forma manual añadiendo su respectivo import y el nombre de la clase del componente en el array "declarations". Sin embargo, al momento de crear un nuevo componente mediante el comando ng generate, tambien se puede especificar de la siguiente manera a que modulo se desea asociarlo:

```
ng generate component nombreDelModulo/nombreDelComponente
```
En donde "nombreDelModulo" sera el nombre del archivo del modulo al cual se apunta, sin el .module y sin el .ts.<br>
Entonces, el componente se creara dentro del directorio del modulo al cual se asocio y tambien Angular se encargara de realizar el respectivo import asi como darlo de alta en el array "declarations". Este componente sera visible en los demas templates asociados a este modulo, sin embargo, si se desea que sea visible en otros modulos, se debera añadir un nuevo array llamado "exports":

```
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [nombreDelComponente],
  exports: [nombreDelComponente] <---------------- array de exports
})
```

El componente ahora sera posible que sea visible desde el exterior, sin embargo, resta importar este modulo en el modulo que sea desea ver el componente para poder usarlo:

```
import { NombreDelModuloModule } from "./ruta-del-modulo/nombre-del-modulo.module"; <------ importo la definicion del modulo

@NgModule({
  imports: [
    CommonModule,
    NombreDelModuloModule <--------- Doy de alta el modulo en el array imports
  ],
  declarations: [...]
})
```

## Directivas

Las directivas son marcadores (herramientas que nos proporciona Angular) que apuntan a un elemento del DOM para hacerlo dinamico o transformarlo.<br>
Existen tres tipos de directivas:
- Directivas component (componentes): Los componentes de los cuales anteriormente se explicaron en esta guia, son directivas referenciadas en el DOM a traves de su selector.
- Directivas estructurales: Estas directivas tienen como caracteristica alterar la estructura de un elemento del DOM. Se escriben despues del nombre de una etiqueta. Ejemplo:

```
<li *ngFor="let item of colection"></li>
```
En este caso, se esta mostrando la implementacion de la directiva ngFor. Esta se encarga de repetir un numero determinado de veces, el "elemento host". En este caso, seria la etiqueta li. La repetira tanas veces como elementos tenga la coleccion "colection". Su comportamiento es el mismo al de la estructura repetitiva foreach. Tambien se debe resaltar que la sintaxis de este tipo de directivas, exije estrictamente el uso de un asterisco (*) por delante de ellas. Otros ejemplos pueden ser ngIf o ngSwitch.
- Directivas de atributo: Se usan para cambiar el estilo o comportamiento de un elemento. Ejemplos pueden ser ngClass o ngStyle.
ngClass es una directiva que permite modificar la clase de un elemento del DOM, se escribe entre corchetes y se le debe asignar un string con el nombre de una propiedad de la clase del componente asociado. Esta propiedad contendra el nombre de una clase de CSS.

```
<button [ngClass]="propiedad">Texto aqui...</button>
```

Tambien es posible asociar varias clases CSS a un mismo elemento, y que se visualice una u otra en base a una condicion:

```
<button [ngClass]="{unaClaseCSS: condicion, otraClaseCSS: condicion}">Texto aqui...</button>
```

## ngModel

ngModel es una directiva que permite enlazar (el bindeo o binding) entre una propiedad del controlador (el componente .ts) y una etiqueta de la vista (el template .html). Su principal caracteristica es que permite una relacion en ambas direcciones, es decir, si se modifica el valor desde un template, la propiedad se vera afectada y viceversa. Para poder utiliazar esta directiva, primero sera necesario importar  el modulo "FormsModule" en el modulo el cual se este trabajando para que Angular pueda reconocerla como una propiedad de la etiqueta "input".

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'; <---- Importo la definicion del modulo

@NgModule({
  imports: [
    CommonModule,
    FormsModule <---- Lo añado al array de imports donde se dan de alta todos los modulos
  ],
  declarations: [
    ...
  ],
})
export class ModuloDePruebaModule { }
```

De esta forma se podra comenzar a usar ngModel. Un ejemplo practico podria ser: 

```
<input (ngModel)="nombreDeUnaPropiedad"/>
```

De esta forma, este input esta relacionado UNIDIRECCIONALMENTE con la propiedad que se le pase al ngModel. Esto quiere decir que si se modifica el valor que almacena la propiedad, tambien lo hara el valor que posee el input, pero no al reves. Para poder hacer esta relacion BIDIRECCIONAL, sera necesario colocar dos corchetes por afuera de los parentesis como en este ejemplo:

```
<input [(ngModel)]="nombreDeUnaPropiedad"/>
```

Ahora, si se modifica un dato desde el template, tambien se vera alterado el valor que almacene la propiedad.<br>
Un dato curioso, para ayudar a memorizar esta sintaxis, es que la notacion en Angular de dos direcciones "[(...)]" se la conoce como "Banana in a box". Una imagen dice mas que mil palabras:
!["Banana in a box"](https://www.bennadel.com/resources/uploads/2016/two-way-data-binding-box-of-bananas-in-angular2.png)


## Interpolacion

En una plantilla HTML, es posible imprimir propiedades de la clase del componente al cual esta asociada encerando la misma en dobles llaves, por ejemplo:

```
{{propiedad}}
```
A esto se le conoce como, "binding por interpolacion". La interpolacion es un mecanismo que brinda Angular que consiste en reemplazar un valor por un string. En este caso, el valor que posea la propiedad encerada, sin importar su tipo (en el caso del que el valor sea justamente una cadena, se imprimira tal cual sin una conversion previa), sera convertido a string para luego ser impreso en la plantilla.<br>
Algunos de sus usos pueden ser:

Asignacion de un contenido para un etiqueta:

```
<p>{{text}}</p>
```

Asignacion de un valor a una propiedad de una etiqueta HTML:

```
<img src={{resource}}/>
```

Un detalle a tener en cuenta es que este tipo de binding (unidireccional) es dinamico, lo que quiere decir que si yo modifico la propiedad contenida por las llaves desde el controlador (el interior del componente), Angular reimprimira el valor en la plantilla en tiempo real. Sin embargo, no puedo modificar el valor de una propiedad usando la interpolacion ya que dara como resultado un error. Lo que quiere decir que los operadores de asignacion quedan totalmente prohibidos, por ejemplo:

```
<img src={{resource = "una direccion"}}/>
```

Tambien es posible realizar operaciones aritmeticas y logicas dentro de las llaves dobles:

```
El resultado de su suma es: {{numero + otroNumero}}
```

O invocar a metodos del componente asociado:

```
El IVA discriminado es: {{CalcularIVA()}}
```

En este caso, se imprimira el valor de retorno del metodo. Un detalle a tener en cuenta es que en ese metodo, si es posible modificar el valor de una propiedad del componente asociado, y Angular no devolvera ningun error, pero no resulta ser una buena practica. Otro detalle a tener en cuenta, es que este metodo se disparara por cada modificacion a una propiedad o cambio de estado del componente, lo que quiere decir que seria conveniente, que este metodo realize una tarea muy simple para no afectar el rendimiento de la aplicacion. Tambien es posible modificar el valor de una propiedad interna del componente, que mediante la asignacion directa dentro de las llaves provocaba un error, sin embargo esto no es para nada recomendable.

## Property binding (bindeo de propiedades)

Los atributos, son elementos a los que se le asignan un valor y modifican la etiqueta la cual los contiene, por ejemplo:

```
<a href="https://github.com/1caruxx">Mi github</a>
```

En este caso, la etiqueta "a" tiene un atributo, "href" al que se le asigna la variable "https://github.com/1caruxx" y lo que hace establecer el enlace al cual se redireccionara una vez se clickee el elemnto que tenga en su interior. Sin embargo, este valor es estatico. Si bien se puede modificar utilizando metodos de TypeScript, Angular permite convertir esta etiqueta en una propiedad del template HTML y de esta forma, volverlo dinamico. Para ello se debe usar la siguiente sintaxis impuesta por Angular:

```
<a [href]="vinculo">Mi github</a>
```
Ahora, a es la etiqueta, [href] sera la propiedad de esa etiqueta, "vinculo" es una propiedad de el componente asociado. Entonces, los corchetes son los que le indican a Angular que debe convertir el atributo en una propiedad y enlazarla unidireccionalmente con la propiedad que se le asigne. Al igual que en el caso de la interpolacion, es importante evitar efectos laterales, es decir, modificar el estado del componente.<br/>
La interpolacion asi como el bindeo de propiedades pueden parecer similares, aunque su funcionamiente es diferente.

```
<a href={{vinculo}}>Mi github</a>
<a [href]="vinculo">Mi github</a>
```

En este ejemplo se demuestra que pueden llegar a usarse para resolver la misma problematica, sin embargo, se mantiene una convencion en donde la interpolacion de string debe ser usada para ese tipo de datos, asi evitar que Angular realice la conversion. Para el resto de tipo de datos, se debe usar el bindeo de propiedades.

```
<p [hidden]="estado">{{contenido}}</p>
```
