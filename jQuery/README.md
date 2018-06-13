# ![Logo](./icon.png) Jquery

[jQuery](https://jquery.com/ "Pagina oficial de jQuery") es una de las librerias mas famosas de javascript que tiene como objetivo el facilitar la sintaxis de este lenguaje, permitiendo que el obtener objetos del DOM, manejar eventos, establecer conexciones asincronas, etc., sean tareas mas simples.

## Tabla de contenidos

* [Descarga y uso](#descarga-y-uso)
* [Sintaxis](#sintaxis)
&nbsp;&nbsp;&nbsp;[Obtencion de elementos del DOM](#obtencion-de-elementos-del-dom)

## Descarga y uso

Existen varias formas para añadir el script de jQuery al documento. La primera es incluyendo la librearia desde la red de distribucion de contenido (CDN o content delivery network) de Microsoft y Google o de la propia pagina de jQuery:

```html
<head>
                            <!-- Solo es necesaria una inclusion -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script> <!-- Pagina de jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> <!-- CDN  de Google -->
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script> <!-- CDN de Microsoft -->
</head>
```

O bien se puede descargar el archivo fisico e incluirlo desde el template HTML. Existen dos versiones de la libreria. La **version de produccion** que es la que se debe incluir en el template, ya que atravezo un proceso de minificacion previo, es decir, se comprimio el codigo (esta escrito todo en una misma linea, no hay tabulaciones, espacios y las variables y funciones tendran nombres poco descriptivos) para que sea mas ligero y el navegador tarde menos en cargarlo. Puede reconocerse facilmente esta version de una libreria ya que el nombre del archivo tendra el siguiente formato: `nombre.min.js`.<br/>
La **version de desarollo** esta escrita de tal forma que sea facil a la lectura y esta destinada principalmente a su modificacion.<br/>
Se puede descargar la libreria de jQuery desde su propia [pagina](http://jquery.com/download/ "jQuery Download"), haciendo click derecho en el enlace > Guardar enlace como..., o bien, usar el gestor de paquetes de node lanzando el siguiente comando:

```
npm install --save jquery
```
El archivo se encontrara almacenado en la siguiente ruta: `./node_modules/jquery/dist/jquery.min.js` y es asi como debe ser referenciada desde el template HTML.<br/>
Incluir la libreria desde las CDN de Microsoft o Google resulta ser mas beneficioso, por que si el usuario visita alguna pagina de estas empresas, almacenara una copia de la libreria en su cache, se cargara mas rapido y ademas, una CDN se asegura que la copia que descargue, sea del servidor mas proximo a su posicion.<br/>
Es importante incluir la libreria de jQuery antes que otros scripts que hagan uso de ello, ya que la carga de elementos por parte del navegador es secuencial. Si se incluye primero el script que hace uso de jQuery, se hara referencia a funciones que todavia no han sido definidas y como traera como consecuencia un error.

```html
<head>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="libreria-o-script-que-hace-uso-de-jquery.js"></script>
</head>
```

## Sintaxis

### Obtencion de elementos del DOM

La sintaxis para seleccionar un elemento del DOM es la siguiente:

```javascript
$(selector);
```

El signo pesos "$" invocara a la libreria de jQuery. Dentro de los parentesis se especificara el elemento del DOM que se desea seleccionar. Este puede ser un objeto en si o un string que apunte a un elemento. Dentro de las comillas se escribira [sintaxis basada en CSS](https://github.com/1caruxx/Desarollo_web/tree/master/CSS#sintaxis). Por ejemplo, para obtener un elemento en base a su id:

```javascript
$("#id-del-elemento");
```

El mismo resultado se podia obtener con la siguiente linea en javascript nativo:

```javascript
document.getElementById("id-del-elemento");
```

Estas podrian ser otras comparaciones:

```javascript
$("div");                        /* | */ document.getElementsByTagName("div");
$(".clase-del-elemento");        /* | */ document.getElementsByClassName("clase-del-elemento");
$("[name=nombre-del-elemento]"); /* | */ document.getElementsByName("nombre-del-elemento");
```

Si bien a simple vista, estas funciones de jQuery contra los metodos de javascript nativo parece que hacen lo mismo, el valor que estas devuelven no lo es. Las funciones de jQuery retornaran un objeto de tipo javascript (JSON) que contendra todos los nodos resultantes de la seleccion. Las claves de estos nodos, seran un indice que ira desde el valor 0 hasta n (length - 1).<br/>
Los metodos de javascript nativo pueden retonar distintos tipos de datos. En el caso del metodo `.getElementById()`, retornara un nodo, `.getElementsByTagName()` retornara un `HTMLcollection` al igual que `.getElementsByClassName()` y `.getElementsByName()` retornara un `Nodelist`. Estos dos ultimos pueden ser muy similares a un array y es posible recorrerlos como tales, sin embargo, los metodos convencionales de arrays no tendran efecto.
Por esta razon, los metodos propios de jQuery no funcionaran con elementos obtenidos a traves de javascript nativo y viceversa.<br/>

Seguido del elemento, ira una accion que se quiera hacer con el (un metodo):

```javascript
$(elemento).accion();
```

Siguiendo con la tarea de obtener elementos del DOM, jQuery brinda metodos para obtener elementos en base a la relacion que tienen con el elemento seleccionado:

```javascript
$(selector).children(); /* | */ document.getElementById("id").children; // Retorna todos los elementos hijos del elemento seleccionado.
$(selector).parent();   /* | */ document.getElementById("id").parentElement; | document.getElementById("id").parentNode; // Retorna el elemento padre del elemento seleccionado.
$(selector).prev();     /* | */ document.getElementById("especial").previousElementSibling; // Retorna el elemento hermano anterior
$(selector).prevAll();  /* | */ // No se puede de forma directa. Retorna todos los elementos hermanos que anteceden al elemento seleccionado.
$(selector).next();     /* | */ // Retorna el elemento hermano posterior.
$(selector).nextAll();  /* | */ // No se puede de forma directa. Retorna todos los elementos hermanos que posponen al elemento seleccionado.
$(selector).siblings(); /* | */ // No se puede de forma directa. Retorna todos los elementos hermanos al elemento seleccionado.
$(selector).first();    /* | */ document.getElementById("id").firstElementChild; // Sus funcionamientos no son los mismos pero si parecidos, first() obtiene el primer elemento, en cambio firstElementChild obtiene el primer elemento hijo.
$(selector).last();     /* | */ document.getElementById("id").lastElementChild;  // idem solo que obtiene el ultimo
```

Como se menciono previamente, dentro de los parentesis del selector tambien se puede asignar un objeto. El ejemplo mas basico seria `document` acompañado del evento `.ready()` para que los scrits se carguen solamente si lo hizo la pagina previante:


```javascript
$(document).ready(function() {
    // ...
});
```

La palabra reservada `this` tambien se puede emplear para hacer referencia a la instancia actual del objeto:

```javascript
$("#btn").click(function() {
    $(this).css("background-color", "red");
});
```

