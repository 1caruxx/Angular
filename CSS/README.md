# ![Logo](./icon.png) Introduccion a CSS

CSS (Cascading Style Sheets, por su traduccion al español, hojas de estilo en cascada) es un lenguaje de estilos que permite personalizar y mejorar visualmente paginas. Puede ser escrito dentro del mismo template HTML o en un archivo externo el cual debe tener una extesion .css.

## Tabla de contenidos

* [Forma de uso](#forma-de-uso)
* [Sintaxis](#sintaxis)<br>
&nbsp;&nbsp;&nbsp;[Selectores](#selectores)<br/>
&nbsp;&nbsp;&nbsp;[Pseudo-clases](#pseudo-clases)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Pseudo-clase "child"](#pseudo-clase-child)<br/>
&nbsp;&nbsp;&nbsp;[Pseudo-elementos](#pseudo-elementos)<br/>
&nbsp;&nbsp;&nbsp;[Vendor prefix](#vendor-prefix)<br/>
&nbsp;&nbsp;&nbsp;[Especificacion en CSS](#especificacion-en-css)<br/>
* [Valores](#valores)
* [Propiedades](#propiedades)<br/>
&nbsp;&nbsp;&nbsp;[Background](#background)<br/>
&nbsp;&nbsp;&nbsp;[Width y Height](#width-y-height)<br/>
&nbsp;&nbsp;&nbsp;[Border](#border)<br/>
&nbsp;&nbsp;&nbsp;[Outline](#outline)<br/>
&nbsp;&nbsp;&nbsp;[Margin](#margin)<br/>
&nbsp;&nbsp;&nbsp;[Padding y Box-sizing](#padding)<br/>
&nbsp;&nbsp;&nbsp;[Texto](#texto)<br/>
&nbsp;&nbsp;&nbsp;[Display](#display)<br/>
&nbsp;&nbsp;&nbsp;[Position y z-index](#position)<br/>
&nbsp;&nbsp;&nbsp;[Float y Clear](#float-y-clear)<br/>
&nbsp;&nbsp;&nbsp;[Box-shadow](#box-shadow)<br/>
* [Funciones](#funciones)

## Forma de uso

Para añadir CSS a un  template, existen tres posibles formas.<br/>
1) Enlazar el template con una hoja de estilos externas, para ello, se debera añadir la siguiente linea en la cabecera del template:

```
<link rel="stylesheet" type="text/css" src="./laUbicacionDelRecurso/recurso.css"/>
```

El atributo "src" puede contener la direccion de un archivo fisico almacenado en la maquina host, o bien se puede incluir mediante un vinculo de internet. Ejemplo: 

```
<link rel="stylesheet" type="text/css" href="https://www.w3schools.com/w3css/4/w3.css">
```

2) Declarar explicitamente los estilos en el propio template, para ello, se declararan los estilos dentro de los tags "style" en el encabezado del template:

```
<head>
    <style>
        .
        .
        .
    </style>
</head>
```
3) Declarar los estilos en la propia etiqueta HTML:

```
<p style="color:red;">...</p>
```

Si una etiqueta, tiene declarados varios estilos en distintas partes, el orden de prioridad de los estilos sera el siguiente:
1) Estilos propios de las etiquetas.
2) Estilos incluidos en el encabezado del template (en este caso, tendra prioridad el ultimo en ser invocado):

```
<head>
    <link rel="stylesheet" type="text/css" href="estilo.css">
    <style>
        .
        .
        .
    </style> <------- Tiene prioridad al ser declarado luego de la relacion a la hoja de estilos externa.
</head>
```
3) Estilos predeterminaos del navegador en el cual se este visualizando el template.

Esto se debe a la especificidad en CSS.

## Sintaxis

### Selectores

La sintaxis de un estilo escrito en CSS3 es la siguiente:

```
        2
   -----------
p { color: red; background-color: black; }
-  -----  ---
1    3     4
```
1) El selector, es decir, la etiqueta HTML que sera afectada por las declaraciones contenidas por las llaves.
2) Declaracion, son separadas por puntos y comas.
3) La propiedad, es decir, el aspecto que se desea modificar de la etiqueta. <span style="color:red;">La asignacion valores a las propiedades es secuencial.</span>

```
div {
    background-color: red; <---- Primero se setea el fondo de color rojo
    background-color: green; <---- La declaracion anterior sera pisada por esta reasignando un valor a la misma propiedad, lo que quiere decir que el fondo del elemento sera verde.
}
```
4) El valor, osea, como se desea que el aspecto sea modificado.

En este caso, las declaraciones afectaran a todas las etiquetas `<p>` del template que utilize esta hoja de estilos. Si se desea elegir individualmente la etiqueta a la cual afectara un estilo, se puede usar el selector de clase usando el carater punto ".".

```
.clase { color: red; background-color: black; }
```
Para usar esta clase, se debe asignar su nombre a el atributo "class" del elemento al cual se le quiere dar el estilo:

```
<div class="clase">Hola mundo!</div>
<p class="clase">Hola mundo!</p>
```

El estilo se vera reflejado en todas las etiquetas que lo implementen.<br/>

Tambien es posible asignar varias clases de esta forma:

```
<div class="fondoRojo letrasGrandes">Hola mundo!</div>
```

Tambien se puede especificar a que tipo de etiqueta quiere que se afecte esta clase:

```
div.clase { color: red; background-color: black; }
```

De esta manera, la clase solo afectara a las etiquetas `<div>` que la implementen:

```
<div class="clase">Hola mundo!</div> <---- Funciona
<p class="clase">Hola mundo!</p> <-------- No funciona
```

Si a un elemento se le añade un estilo y ademas se crea una clase y la implementa, heredara todas las propiedades. De ahi el nombre de "hoja de estilos en cascada". Por ejemplo:

```
<head>
    <style>
        div {
            background-color: red;
        }

        .letras-blancas {
            color: white;
        }
    </style>
</head>
<body>
    <div class="letras-blancas">Hola mundo!</div> <---- El fondo sera rojo y las letras blancas
</body>
```

Es posible tambien añadir un estilo a varias etiquetas a la vez, separando los selectores con comas ",".

```
p, div, h1 {color: red; background-color: black;}
```

El asterisco "*" puede utilizarse para seleccionar todos los elementos del DOM y asignarles un estilo en comun. Por otro lado, el numeral "#" permite seleccionar un elemento segun su atributo id.

```
<head>
    <style>
        * { font-family: Verdana; }
        #elementoSeleccionado { color: orange; }
    </style>
</head>

<body>
    <div>Hola mundo!</div> <---- La fuenta sera Verdana
    <span id="elementoSeleccionado">Hola mundo!</span> <---- La fuente sera Verdana y de color naranja
</body>
```

### Combinadores

Los combinadores son selectores compuestos que permiten describir una relacion entre selectores.

#### descendant selector (espacio)

Si se escribe un selector seguido de otro sin separlo por comas, estare definiendo un estilo unico que afectara a la etiqueta contenida por otra etiqueta. Por ejemplo:

```
<head>
    <style>
        div p { /* El div sera la etiqueta contenedora al ser escrita primero y p la etiqueta que sera contenida */
            background-color: violet;
        }
    </style>
</head>

<body>
    <div> <---- Etiqueta padre
        <p>Hola mundo!</p> <---- Esta etiqueta "p" se vera afectada por el estilo
    </div>

    <div>
        <span>
            <p>Hola mundo!</p> <---- Esta etiqueta tambien se vera afectada
        </span>
    </div>

    <p>Hola mundo!</p> <---- Esta etiqueta no
</body>
```
#### child selector (>)

Un comportamiento similar podria verse usando el selector ">". La diferencia es que se vera afectada la etiqueta hija si y solamente si la etiqueta que esta a la izquierda del operador ">" es su etiqueta padre directa. Por ejemplo:

```
<head>
    <style>
        div > p { /* El div debe ser la etiqueta padre directa de la etiqueta p */
            background-color: violet;
        }
    </style>
</head>

<body>
    <div> <---- Etiqueta padre
        <p>Hola mundo!</p> <---- Esta etiqueta "p" se vera afectada por el estilo
    </div>

    <div>
        <span>
            <p>Hola mundo!</p> <---- Esta no, ya que su etiqueta padre directa es "span"
        </span>
    </div>

    <p>Hola mundo!</p> <---- Esta etiqueta tampoco
</body>
```

#### adjacent sibling selector (+)

El selector "+" se usa para seleccionar aquella etiqueta que este junta a otra (sean adyacentes) y ademas tengan la misma etiqueta padre en comun. A estas etiquetas se las denomina <b>"etiquetas hermanas"</b> o <b>"sibling tags"</b>. Por ejemplo:

```
<head>
    <style>
        div + div { /* La etiqueta afectada sera la que este a la derecha del operador y debe estar junto a una etiqueta especificada a la izquierda del operador */
            background-color: gray;
        }
    </style>
</head>
<body>
    <div><Hola mundo!></div> <---- Esta etiqueta no se vera afectada
    <div><Hola mundo!></div> <---- Esta etiqueta si
    <br/>
    <div><Hola mundo!></div> <---- Esta etiqueta no se vera afectada
</body>
```

Puede verse una lista completa de los selectores que CSS3 brinda a traves del siguiente [enlace](https://www.w3schools.com/cssref/css_selectors.asp "W3 School: CSS Selectors").

### Pseudo-clases

Las pseudo-clases, que forman parte de la familia de los selectores, son palabras reservadas que se usan para especificar un estado especial de un elemento. Siempre son precedidas por el caracter doble punto ":". Su sintaxis es la siguiente:

```
Selector:pseudo-clase {declaraciones}
```

Un ejemplo podria ser la pseudo-clase ":hover".

```
div:hover {
    background-color: green;
}
```
En este ejemplo, se seteara el color de fondo a verde de todos los elementos div, mientras el usuario mantenga el cursor por encima de ese elemento. En resumen, la pseudo-clase ":hover" se encarga de aplicar un estilo mientras el cursor este encima del elemento al cual esta asociada.<br/>

Otra pseudo-clase es ":not()" que permite establecer excepciones a las etiqueas que seran afectadas por el estilo. Como parametro recibira un selector u otra pseudo-clase. Por ejemplo:

```
div i:not(.negrilla) {
    color: red;
}
```

Las etiquetas que se veran afectadas por este estilo seran las `<i>` que esten dentro de una etiqueta `<div>` y ademas no implementen la clase "negrilla". Si una etiqueta `<i>` esta fuera de una etiqueta `<div>` o implementa la clase "negrilla" no se vera afectada.<br/>
En el argumento del ":not()" solo se puede incluir una clase o pseudo-clase, sin embargo, si se desea hacer otra excepcion, se puede colocar otro ":not()" al lado.<br/><br/>

Pueve verse una lista completa de todas las pseudo-clases que CSS3 brinda a traves del siguiente [enlace](https://www.w3schools.com/css/css_pseudo_classes.asp "W3 School: CSS Pseudo-class").

#### Pseudo-clase "child"

"Child" (que significa niño por su traduccion del ingles) es un abanico de pseudo-clases que permiten seleccionar un elemento segun su posicion respecto a su elemento padre. Por ejemplo, la pseudo-clase ":first-child", seleccionara el primer elemento dentro de su etiqueta padre.

```
<head>
    <style>
        p:first-child { color: red; }
    </style>
</head>

<body>
    <p>Hola mundo!</p> <---- Su etiqueta padre es <body> y al ser el primer elemento de tipo <p>, se vera afectada por el estilo
    <p>Hola mundo!</p> <---- Su etiqueta padre tambien es <body>, pero es el segundo elemento de tipo <p>, asi que no se vera afectado

    <div>
        <p>Hola mundo!</p> <---- Su etiqueta padre es <div> y es el primer elemento de tipo <p>, es afectado por el estilo
        <p>Hola mundo!</p> <---- No es afectado por el estilo
        <span>
            <p>Hola mundo!</p> <---- Si es afectado por el estilo al ser el primer elemento de su etiqueta padre <span>
        </span>
    </div>
</body>
```

La pseudo-clase ":last-of-type" hace algo similar, pero selecciona el ultimo elemento de una etiqueta padre.<br/>
A su vez, ":nth-child(n)" permite seleccionar el elemento numero n (donde n es el numero que se le pasa como parametro a esta pseudo-clase) de cada etiqueta padre. Tambien es posible pasarle como parametro las palabras reservadas "odd", para seleccionar los elementos impares y "even" para los pares. Si se desea un comportamiento mas especifico, puede asignarse como parametro una formula del siguiente estilo:

```
td:nth-child(an + b) {
    background-color: grey;
}

- La letra a representa un numero que se debe colocar para determinar el intervalo de elementos con el que se quiere que se seleccionen.
- La letra n sera un ciclo automatico que se ira remplazando de forma constante por un numero real.
- La letra b es el numero del primer elemento que se desea seleccionar.
```

### Pseudo-elementos

Los pseudo-elementos permiten seleccionar un trozo de un elemento, la primer letra, primera linea, contenido que se desea colocar antes y/o despues del elemento, que aspecto quiere se tenga un elemento cuando esta seleccionado. Siempre son antecedidos por el caracter compuesto, doble doble punto "::" para ser diferenciados de las pseudo-clases. Su sintaxis es la siguiente:

```
selector::pseudo-elemento {
    declaraciones
}
```
La lista de pseudo-elementos resulta no ser demasiado extensa:

* <b>::before:</b> Permite imprimir contenido antes de la ocurrencia del elemento al cual apunte. Para determinar que contenido insertar, se debera usar la propiedad <b>"content"</b>. Segun el valor que se le asigne a esta propiedad, generara un contenido u otro. Se le puede asignar la url de un archivo para que genere un recurso, un string, hacer que muestre un atributo mediante la funcion attr().
* <b>::after:</b> Funciona de una forma muy similar a al pseudo-elemento "::before", pero el contenido sera añadido despues de la ocurrencia del elemento.
* <b>::first-line:</b> Este pseudo-elemento hace referencia a la primera linea de un elemento.
* <b>::first-letter:</b> Este pseudo-elemento hace referencia a la primera letra de un elemento.
* <b>::selection:</b> Este pseudo-elemento hace referencia a un contenido que el usuario seleccione, por ejemplo, como se debe mostrar el texto seleccionado.

### Vendor prefix

Los prefijos de proveedores son palabras que anteponen a una propiedad no estandarizada de CSS en etapa experimental. Si una propiedad no esta estandarizada, los desarolladores experimentan con ella para intentar lograr nuevas implementaciones para la misma, por lo que si desarollan una funcionalidad que puede poner en peligro el correcto funcionamiento de las paginas de los diseñadores momentaneamente, esta no afecte a todos los exploradores. Su sintaxis es la siguiente:

```
-prefijo-propiedad: valor;
```
Por ejemplo:

```
div{
    -webkit-user-select: none; /* Safari 3.1+. Si no se coloca, la propiedad no tendra efecto en Safari u otro exploradores basados en "webkit" */
    -moz-user-select: none; /* Firefox 2+ Si no se coloca, la propiedad no tendra efecto en Firefox */
    -ms-user-select: none; /* IE 10+ Si no se coloca, la propiedad no tendra efecto en Internet explorer o Microsoft Edge */
    user-select: none; /* Standard syntax */
}
```

Puede observarse una lista completa de los prefijos en el siguiente [enlace](https://en.wikipedia.org/wiki/CSS_hack#Browser_prefixes "Lista de prefijos de proveedores").

### Especificacion en CSS

Los estilos en CSS asi como todos sus elementos (selectores, pseudo-clases, lo que sea) tienen una jerarquizacion que determinara que estilo final sera el que tendra el elemento y el orden que debe serguir el navegador para aplicar los estilos. Esta jerarquizacion estara determinada por la "distancia" que tenga el estilo respecto al elemento asi como su grado de especificacion. Si se setea dos veces la misma propiedad, la que este mas cerca del elemento sera la que finalmente sea aplicada (es decir, la que mas abajo este declarada en la hoja de estilos). Por el mismo factor, el orden en que se coloque la etiqueta `<style>` o se establezca una relacion con una hoja de estilos externa importa.<br/>
A su vez, los elementos de una hoja de estilos, tiene un grado de especificacion. El grado de especificacion es un numero comprendido entre el 0 (inclusive) y el 1000 (inclusive). Por ejemplo, el selector universal (*) o el elemento "body" tienen un grado de especificacion igual a 0, el mas bajo. Lo que quiere decir que sus estilos pueden ser pisados por cualquier elemento. A su vez, los estilos que se declaren en la propia etiqueta HTML tendran un grado de especificacion igual a 1000. La siguiente lista determina el grado de especificacion de algunos elementos:

* *, body: 0
* Elementos (h1, div, etc): 1
* Selectores de atributo, clases, pseudo-clases: 10
* Selectores de ID (#): 100
* Estilos declarados en la propia etiqueta: 1000

Si en un mismo selector, se declara un un elemento y una pseudo-clase por ejemplo, se deben sumar su grados de especificacion para determinar el grado de especificacion total del estilo. Por ejemplo:

```
a { /* Especificacion: 1 */
    color: red;
}

a:link { /* Especificacion: 10 + 1 = 11 */
    color: green;
}
```

Existe una palabra reservada que permite darle una mayor prioridad a la propiedad en la cual sea seteado. Se trata de "!important". Esta palabra reservada debe colocarse antes del punto y coma ";"

```
div {
    border: solid green 2px !important;
    border: solid red 2px;
}
```

El resultado final del anterior ejemplo dado es que todos los elementos `<div>` tendran bordes de color verde. Si a las dos declaraciones se les añadese "!important", se mantendria el criterio convencional para seleccionar el estilo, pero solo entre estas dos.

```
div {
    border: solid green 2px !important; /* A */
    border: solid red 2px !important; /* B */
    border: solid violet 2px; /* C */
}
```

El resultado final sera que los elementos `<div>` tendran un borde de color rojo, por que la declaracion "B" fue la ultima enser escrita y que tenga la palabra "!important".

## Valores

## Propiedades

Anotacion: Muchos elementos HTML ya tienen estilos predefinidos. Por ejemplo, la etiqueta `<a>` tiene la propiedad "text-decoration-line" seteada con el valor "underline" asi como un color. La etiqueta `<body>` tiene un pequeño margen ya establecido, lo que quiere decir que para quitarlas o modificarlas, habra que sobreescribirlas.

### background

Es una propiedad que hace referencia al fondo de un elemento y sus variaciones seran:

1) **background-color:** Hace referencia al color del fondo.<br/>
   Valores: nombre valido de color: (red, green, tomato) | codigo rgb (red green blue): rgb(255, 100, 9[, 0.8 (opacidad)]) | codigo exadecimal: #ffffff
2) **background-image:** Hace referencia a la imagen que tendra el fondo. Es posible añadir tambien varias imagenes separadas por comas. Por ejemplo:

```
body {
    background-image: url('./src/imagen.jpg'), url('./src/otraImagen.jpg');
}
```
La primer imagen asignada estara por encima de todas las demas, la segunda estara por encima de la tercera y todas las que le sigan y asi sucesivamente.<br/>
Valor: url('La ruta de la imagen, sea el archivo fisico o un vinculo de internet').
3) **background-position:** La posicion del fondo que tendra en la pagina. Si se coloca un valor, lo aplicara tanto vertical como horizontalmente. Si se le asignan dos valores, el primero sera la posicion horizontal (eje x) y el segundo sera la posicion vertical (eje y). Esto tambien se puede especificar usando las propiedades <b>"background-position-x"</b> y <b>"background-position-y"</b>. Si se seteo mas de una imagen como fondo, se podra modificar cualquier propiedad de las mismas seprandolas con comas. Por ejemplo:

```
body {
    background-image: url('./src/imagen.jpg'), url('./src/otraImagen.jpg');
    background-postion: top left, bottom right /* Los primeros dos valores hacen referencia a la posicion de la primer imagen asignada, los siguientes dos a la segunda. */
}
```

Valor: Una unidad de medicion | Una palabra posicional reservada.
4) **background-size:** El tamaño del fondo. Si se le asigna un valor, afectara tanto a la anchura como a la altura. Si se le asignan dos valores, el primero afectara a la anchura y el segundo a su altura.<br/>
Valores: 
Una unidad de medida.
* cover: El tamaño del fondo, ocupara todo el elemento contenedor. Si la imagen es demasiado grande, habra partes de la misma que no se veran.
* contain: El fondo ocupara el maximo espacio posible, pero respetando las dimensiones de la imagen, lo que quiere decir que habra partes del elemento contenedor que puede que no sean cubiertas por la imagen.
Para ambas palabras reservadas, es conveniente setear el alto del elemento contenedor, por ejemplo, si es el `<body>` al 100% ya que si no, lo resultados pueden no ser los esperados. Por ejemplo, si el `<body>` esta completamente vacio, tendra un alto de 0px. Si el background-size se establece como contain, la imagen sera muy pequeña ya que tratara de reescalarla. Si se establece como cover, puede que no ocupe todo el alto ya que al no estar fijado, realmente no queda claro al navegador como adaptar la imagen.
5) **background-repeat:** Si la imagen de fondo es muy pequeña, se repetira tanto horizontal como verticalmente.<br/>
Valores:
* repeat: El valor asignado por defecto, la imagen de fondo se repetira tanto vertical como horizontalmente.
* no repeat: El fondo no se repetira.
* repeat-x: El fondo solo se repetira horizontalmente.
* repeat-y: El fondo solo se repetira verticalmente.
6) **background-attachment:** Indica el comportanmiento que debe tener el fondo ante el scroll de la pagina.<br/>
Valores:
* scroll: El valor asignado por defecto, el fondo se quedara estatico y no se mantendra en pantalla si se baja el contenido de la pagina.
* fixed: El fondo sera siempre visible aun haciendo scroll en la pagina.
7) **background-clip:** Permite especificar hasta donde debe llegar el fondo de un elemento.<br/>
Valores:
* border-box: Este es el valor por defecto de la propiedad. El fondo cubrira hasta el borde del elemento (incluido).
* padding-box: El fondo cubrira hasta el padding del elemento (incluido).
* content-box: El fondo cubrira solamente el contenido del elemento.
<span style="color:red;">Existen propiedades que sirven para englobar a otras con el fin de ahorrar lineas de codigo. A estas se las denominan <b>"shorthand properties"</b>. La propiedad "background" es un ejemplo de este tipo de propiedades.</span>
8) **background:** Permite definir las siguientes propiedades:
* background-color
* background-image
* background-repeat
* background-attachment
* background-position<br/>
Se debe respetar el orden de las propiedades segun como se escribio anteriormente, aunque no importa si alguna propiedad se omite, por ejemplo:

```
div {
    background: red url('./ruta/imagen.jpg') no repeat center; /* La propiedad background-attachment se omitio, pero de otra forma se deberia haber asignado entre la propiedad background-repeat y background-position */

    background: center red url('./ruta/imagen.jpg') no repeat; /* Si no se respeta el orden, funcionara con normalidad siempre y cuando las palabras reservadas de una misma propiedad, se mantengan juntas */

    background: red top url('./ruta/imagen.jpg') center no repeat; /* Esto no funcionara, por que las palabras reservadas para especificar la propiedad "background-position" estan separadas por la ruta de la imagen. */
}
```

### width y height

Permiten especificar la altura o anchura de un elemento. width para la anchura y height para la altura. La anchura y altura de un elemento solo incluye el contenido en si y no los bordes (propiedad border), margins (propiedad margin) y padding (espacio entre los bordes y el contenido), Esto quiere decir que la altura y anchura final del elemento, la que se puede observar una vez impreso en el template HTML, sera la suma de los valores que se le asignaron a las propiedades "margin", "padding" y finalmente las del contenido establecidas por la propiedad "width" y "heigth". Esto puede ser modficado con la siguiente declaracion:

```
div {
    box-sizing: border-box;
}
```
Esta propiedad se encarga de que las propiedades "margin", "padding" y "border" pasen a formar parte de la anchura y del alto del elemento.<br/>
Si se le asigna un porcentaje a estas propiedades, ese porcentaje sera calculado en base a la medida del elemento contenedor. Por defecto, a estas propiedades les son asignadas el valor "auto", lo que quiere decir que sera el navegador quien determine la anchura y la altura del elemento. Por ejemplo:

```
<body>
    <div></div>
</body>
```

Si se coloca un `<div>` vacio en el template, este tendra una anchura del 100% del `<body>`. Esto se debe a que la propiedad "display" de los elementos `<div>` esta seteada por defecto a "block". El alto de este elemento sera de 0px, ya que al ser su valor "auto" por defecto, se ajusta a su contenido. Si no tiene contenido, no tendra alto (lo que quiere decir, que aunque se le setee un color a su fondo, no sera visible. No obstante, eso no quiere decir que el elemento no este ahi). Lo mismo pasara con el `<body>`. Su contenido es el `<div>` y su alto es de 0px.

### border

Es una propiedad que hace referencia a los bordes de un elemento y sus variaciones seran:

1) **border-width:** Hace referencia a la anchura del borde.<br/>
Valor: Una unidad de medida
2) **border-style:** Hace referencia al estilo del borde. Puede ser totalmente liso, puntillado, hecho a base de lineas, etc. Esta propiedad es requerida, lo que quiere decir que si no es seteada, el borde no se vera.
3) **border-color:** Hace referencia al color del borde.
4) **border-radius:** Hace referencia al grado de curva de las puntas de un elemento. Si se le asigna un valor, afectara a todas las esquinas del elemento. Si se le asignan cuatro valores, afectara a cada esquina individualmente segun el orden (sentido de las agujas del reloj). Tambien es posible afectar a cada esquina individualmente mediante las siguientes propiedades:

```
div {
    border-top-left-radius: 0px; /* Esquina superior izquierda. */
    border-top-right-radius: 5px; /* Esquina superior derecha. */
    border-bottom-left-radius: 10px; /* Esquina inferior izquierda. */
    border-bottom-right-radius: 15px; /* Esquina inferior derecha. */
}
```

5) **border-image:** Permite asignar una imagen como borde de un elemento.

<span style="color:red;">Las propiedades que hacen referencia a los bordes, pueden recibir de un solo valor hasta cuatro. Si reciben un solo valor, afectaran a los cuatro bordes de un elemento.<br/>
Si reciben dos valores, el primer valor afectara al borde de arriba y al de abajo y el segundo al de la izquierda y al de la derecha.<br/>
Si reciben tres valores, el primero afectara al borde de arriba, el segundo a los laterales y el tecero al borde de abajo.
Si reciben cuatro valores, segundo el orden en que sean asignados, afectaran a los bordes en el sentido de las agujas del reloj. Por ejemplo:</span>

```
div {
    border-style: solid; /* Todos los bordes seran solidos. */
    border-color: green black; /* Los bordes de arriba y abajo seran verdes y los laterales negros. */
    border-width: 0px 5px 10px 15px; /* El borde de arriba tendra 0px, el de la derecha 5px, fondo 10px e izquierda 15px. */
}
```
<span>Tambien es posible especificar el borde en la misma propiedad. Por ejemplo:</span>

```
div {
    border-style: solid;
    border-top-color: red; /* El borde de arriba sera rojo. */
    border-right-width: 5px; /* La anchura del borde de la derecha sera de 5px. */
    border-bottom-style: dotted; /* El estilo del borde del fondo sera puntillado. */
    border-left-color: violet; /* El borde de la izquierda sera violeta. */
}
```

6) **border-collapse:** Permite seleccionar entre un borde simple o doble.<br/>
Valores: separate (doble) | collapse (simple)

7) **border:** Propiedad que engloba a:
* border-color
* border-width
* border-style

### outline
Esta propiedad crea un borde adicional que estara entre la propiedad "border"  y la propiedad "margin". Su comportamiento es muy similar a "border", pudiendo modificar el estilo, anchura y color, pero no se podra alterar el radius asi como cada direccion individualmente (no existe outline-left, outline-top, etc). Su propiedad derivada mas destacable es "outline-offset" que es el espacio vacio que habra de por medio entre el borde (o padding o el propio contenido si que es no existe un borde) y el outline.<br/>
La propiedad "outline" engloba a "outline-width", "outline-color" y "outline-style".

### margin

Esta propiedad hace referencia al espacio que hay entre el borde de un elemento y el exterior. El margen es invisible y puede servir para separar la distancia que uno desee unos elementos de los otros. Se puede especificar el margen de cada lado de un elemento con las propiedades:

* margin-top
* margin-right
* margin-bottom
* margin-left

La propiedad "margin" engloba a estas cuatro anteriores y al igual que muchas propiedades derivadas de border, pueden asignarsele de uno a cuatro valores que seguiran el mismo orden en sentido de las agujas del reloj.<br/>
Si dos elementos adyacentes tienen un margen de 25px cada uno, el espacio que habra entre los dos no sera de 50px (25px + 25px) sino de 25px. Esto se debe al "margin collapse" (o colapso de margenes), que establecera que el espacio entre dos elementos con un margen seteado sera equivalente al tamaño del margen mas grande que tenga alguno de los dos elementos.

### padding

Hace referencia al espacio que habra de por medio entre el borde de un elemento y su contenido. Puede afectarse cada lado de forma individual al igual que en margin y border.<br/>
La propiedad "padding" engloba a las cuatro propiedades direccionales derivadas, padding-top, padding-right, padding-bottom y padding-left y el sistema de asignacion sigue siendo el mismo. El padding no es considerado parte de la anchura de un elemento asi como de su altura, lo que quiere decir que entre mas padding se le añada a un elemento, este se ira agrandando. Para que el padding asi como el border formen parte de la altura y anchura, se puede utilizar la propiedad <b>"box-sizing"</b> a la que se le debe asignar el valor "border-box". Ahora la anchura del elemento sera fija si se especfica la propiedad "width" y al altura sera fija si se especifica la propiedad "height". Si el padding o el contenido resulta ser demasiado para caber dentro del elemento, este desbordara de los limites del mismo.

### Texto

1) **color:** Hace referencia al color del texto de un elemento.
2) **text-align:** Hace referencia a la posicion horizontal de un elemento.<br/>
Valores: left | center | right | justify
3) **text-decoration:** Hace referencia a una linea que decorara el texto. Puede estar debajo, por encima o tacharlo. Tambien pueden ser asignadas a la vez para tachar y subrayar el texto por ejemplo. El ancho de la linea no puede ser modificado, sin embargo, puede utilizarse la propiedad "border" para generar una linea. La propiedad "border" si permite modificar el ancho.<br/>
Esta propiedad engloba a las propiedades "text-decoration-style", "text-decoration-color" y "text-decoration-line" (esta ultima determina si la linea debe estar por encima, debajo o tachara el texto. Es requerida).<br/>
Valores: overline (por encima) | line-through (tachado) | underline (subrayado) | un color valido | un estilo
4) **text-transform:** Hace referencia si el texto escrito sera en minusculas, mayusculas y la primer letra de cada palabras en mayusculas y el resto en minusculas.<br/>
Valores: uppercase | lowercase | capitalize
5) **text-indent:** Hace referencia a la sangria del texto.
6) **letter-spacing:** Hace referencia al espaciado que debe haber entre los caracteres. Es posible asignarle un valor negativo para que los caracteres esten mas juntos entre si.
7) **word-spacing:** Hace referencia al espaciado que debe haber entre palabra y palabra. Es posible asignarle un valor negativo para que las palabras esten mas juntas entre si.
8) **line-height:** Hace referencia al espaciado que debe haber entre linea y linea.
9) **text-shadow:** Añade una sombra al texto. Puede recibir de dos a cuatro valores. Dos valores son requeridos y representaran la posicion de la sombra respecto al texto. El primero sera la posicion horizontal y el segundo la vertical. Se le deberan pasar unidades de medida que pueden ser positivas asi como tambien negativas. En el caso de la posicion horizontal, si se le asigna un valor negativo, la sombra se posicionara al izquierda del elemento y respecto a la posicion vertical, por encima. Los otros dos valores opcionales seran el color y la difuminacion. Tambien es posible asignar varias sombras si se las separa con comas.

```
.sombreado {
    text-shadow: 2px 2px 5px violet, -2px -2px 5px orange;
}
```

Valores: posicion-x (una unidad de medida) | posicion-y (una unidad de medida) [ | color | difuminacion (una unidad de medida)]
10) **user-select:** Hace referencia a como sera seleccionado el texto cuando el usuario clickee.<br/>
Valores: none (el usuario no podra seleccionar el texto) | text (el texto si podra ser seleccionado) | all (se seleccionara todo el texti automaticamente tras que el usuario haga solo un click)
11) **font-family:** Cambia la fuente del texto. Esta propiedad permite asignarle varios valores que seran los nombres de las fuentes. Se asignan varios valores ya que en el caso de que el explorador no soporte la fuente o el usuario no la tenga instalada, se pueda visualisar otra que el desarollador desee. A esto se le donimina "Font-Stacks".<br/>
La primera fuente del font-stack es la que el diseñador desea que se cargue por defecto, las siguientes seran los reemplazos y el ultimo valor sera una "generic-family". generic-family es un termino que alude a un cunjunto de fuentes que tienen un aspecto similar. El explorador buscara entre ese conjunto de fuentes hasta encontrar una que pueda visualizar.<br/>
Si el nombre de una fuente, esta compuesto por varias palabras, este tiene que estar entre comillas dosbles para que el explorador pueda reconocer que se trata de un unico nombre. Los nombres deben ser separados por comas. Ejemplo:

```
div {
                                4
                 -------------------------------
    font-family: Arial, "times new roman", serif;
                 -----   ---------------   -----
                   1            2            3
}

1) Fuente especifica que el diseñador quiere que se vizualice por defecto.
2) Fuente un poco mas generica que sirve como reemplazo en el caso de que no este disponible la primera. Al esta el nombre compuesto por varias palabras, se coloca entre comillas dobles.
3) generic-family.
4) Font-Stack, el orden de asignacion de las fuentes sera desde la mas especifica a la mas generica.
```
Se puede observar un listado bastante completo de fuentes para usar en los templates HTML en el siguiente [enlace](https://fonts.google.com/ "Google Fonts").

12) **font-style:** Permite cambiar la fuente a italica o hacerla oblicua. Si bien a simple vista son exactamente iguales, la diferencia entre ambas es que las fuentes italicas, son otra version de la propia fuente y la fuente oblicua es un ligero grado de inclinacion que se le aplica a cada letra.<br/>
Valores: italic | oblique
13) **font-size:** Hace  referencia al tamaño de la fuente.
14) **font-weight** Hace referenca al grosor de la fuente.<br/>
Valores: bold (negrilla) | un numero que va desde el 100 al 900
15) **font-variant:** Si se le asigna el valor "small-caps", transformara la fuente a una version en mayuscula pero mas pequeña de lo normal.
16) **font:** Propiedad que engloba a "font-family" (requerido), "font-style", "font-size" (requerido), "font-weight" y "font-variant".

### display

Esta propiedad hace referencia a como seran mostrados los elementos en la pagina. Existen distintos valores que se le pueden asignar, entre los cuales, los mas importantes son:
* **inline:** El elemento ocupara el minimo espacio posible en base a su contenido y puede posicionarse uno al lado del otro. Las propiedades width y height no pueden ser modificadas. Un elemento que por defecto tenga esta propiedad puede ser el "span". Entre elemento y elemento habra un espacio de pocos pixeles que no se podra eliminar.
* **block:** El elemento ocupara todo el ancho de la pantalla, si bien las propiedades width y height pueden ser modificadas para que otras propiedades afecten a una porcion del elemento. No es posible posicionar a dos elementos en la misma linea si tienen asignado este valor. El elemento "div" puede ser un buen ejemplo.
* **inline-block:** Muy similar al valor "inline" con la diferencia de que las propiedades width y height si pueden ser modificadas. Entre elemento y elemento habra un espacio de pocos pixeles que no se podra eliminar.
* **none:** El elemento desaparecera tanto VISIBLE como FISICAMENTE de la pagina. Puede volverse a mostrar o hacerlo desaparecer usando codigo JavaScript.<br/><br/>

La propiedad <b>"visibility"</b> puede cumplir una funcion similar a display=none si se le asigna el valor "hidden", pero se diferencian en que este ultimo hara de desaparezca solo de forma visible, fisicamente el elemento seguira estando y la pagina no se reacomodara.

### Posicion

* **top:** Esta propiedad se encarga de añadir o quitar una determinada distancia a la posicion original del elemento desde el borde superior, lo que quiere decir que si se le asigna un valor positivo, el elemento se deplazara hacia abajo, caso contrario si se le asigna un valor negativo.
* **right:** Esta propiedad se encarga de añadir o quitar una determinada distancia a la posicion original del elemento desde el borde lateral derecho, lo que quiere decir que si se le asigna un valor positivo, el elemento se deplazara hacia la izquierda, caso contrario si se le asigna un valor negativo.
* **bottom:** Esta propiedad se encarga de añadir o quitar una determinada distancia a la posicion original del elemento desde el borde inferior, lo que quiere decir que si se le asigna un valor positivo, el elemento se deplazara hacia arriba, caso contrario si se le asigna un valor negativo.
* **left:** Esta propiedad se encarga de añadir o quitar una determinada distancia a la posicion original del elemento desde el borde lateral izquierdo, lo que quiere decir que si se le asigna un valor positivo, el elemento se deplazara hacia la derecha, caso contrario si se le asigna un valor negativo.

#### position

Esta propiedad se encarga de posicionar un elemento en la pantalla. Segun el valor que se le asigne, el elemento tendra un comportamiento u otro. Los posibles valores para esta propiedad son:
* **static:** Este es el valor por defecto de la propiedad. Los elementos seguiran el flujo normal de la pagina, lo que quiere decir que se posicionaran uno al lado del otro o debajo (segun el atributo display). Las propiedades "top", "right", "bottom" y "left" no tendran efecto mientras esta propiedad tenga este valor asignado. De ahi su nombre, "static".
* **relative:** Su comportamiento es muy similar al valor "static" con la diferencia que sobre este si tendran efecto las propiedades "top", "right", "bottom" y "left".
* **absolute:** Este valor provoca que el elemento no siga el flujo normal de la pagina, lo que quiere decir que podra estar por encima o debajo de otros elementos. Para determinar el plano en el que estara el elemento, se puede usar la propiedad <b>"z-index"</b>.
* **fixed:** El elemento estara en un flujo de la pagina diferente al igual que el valor "absolute" con la diferencia que este siempre se mostrara en pantalla, es decir, aunque se descienda demasiado, siempre sera visible, seguira el scroll del mouse.
* **sticky:** Se comporta como un elemento cuya "position" sea igual a "relative", pero cuando se alcanza cierto desplazamiento con el scroll, este pasara a ser de valor "fixed". El desplazamiento que se debe alcanzar para que el elemento se transforme a "fixed" esta dado por las propiedades "top", "right", "bottom" y "left". Cuando el elemento este posicionado a la distancia establecida en estras propiedades, mutara a este valor.

Mas informacion acerca de los valores de la propiedad "position" en el siguiente [enlace](https://es.stackoverflow.com/questions/37930/cual-es-la-diferencia-entre-position-relative-position-absolute-y-position "stackoverflow: Diferencia entre relative, absolute y fixed").

### overflow

Es una propiedad que se encargara de como mostrar el contenido de un elemento, en el caso de que este desborde del mismo. Solo funciona con elementos de tipo bloque.<br/>
Sus valores son:
* **visible:** El valor por default, si el contenido de un elemento es demasiado, se mostrara y este rebalsara el limite inferior.
* **hidden:** El contenido que no entre dentro de los limites del elemento, no se mostrara.
* **scroll:** Si el contenido es demasiado, se mostrara una barra de scroll en el borde derecho e inferior del elemento. Si se desea elegir entre la barra vertical u horizontal, se pueden usar las propiedades <b>"overflow-x"</b> para solo mostrar la barra de desplazamiento horizontal y <b>"overflow-y"</b> para la vertical.
* **auto:** Solo se mostraran las barras de scroll si es necesario.

### float y clear

Permite a un elemento flotar sobre la pagina, lo que quiere decir que los proximos elementos impresos, se colocaran a su alrededor. La propiedad "display" deja de ser respetada para ese elemento. A diferencia de los valores "inline" o "inline-block" de la propiedad "display", el elemento no estara en hilera con los demas.<br/>
Valores: none (por defecto) | left | right

La propiedad <b>"clear"</b> hace que un elemento, no respete la propiedad "float" de otro elemento. Se puede especificar el lado que no se quiere respetar.<br/>
Valores: left | right | both

### box-shadow

Esta propiedad permite agregar una o varias sombras a un elemento. Funciona de la misma forma que la propiedad "**text-shadow**". Recibira de dos a cuatro valores. Los dos primeros valores son obligatorios y marcan la posicion de la sombra, el primero representa la posicion horizontal respecto al elemento y otro representa la posicion vertical:

```
.sombra {
    box-shadow: 3px 3px;
}
```

Los valores opcionales son, la difuminacion "blur" al cual se le debe asignar una unidad de medida y el color.


## Fuentes

Una fuente de texto esta compuesta por varios archivos cuya extension puede variar segun el tipo de fuente que sea. Para ver los tipos de fuentes se puede visitar el siguiente [enlace](https://www.w3schools.com/css/css3_fonts.asp "W3 School: CSS3 Fonts"). Con CSS es posible importar las fuentes que el propio desarollador haya creado o tenga los archivos fisicos de las mismas. Ademas, usando este metodo, la fuente se descargara automaticamente en la computadora cliente, lo que quiere decir que no es necesario preoucuparse por setear fuentes de reemplazo.<br/>
Para lograr esta tarea, sera necesario usar la regla "@font-face" que en cuya declaracion, habra dos propiedades que son obligatorias. Una de ellas sera <b>"font-family"</b>. En esta ocasion, se le debera asignar un nombre de fuente inventado, ya que se esta creando una propiea fuente en CSS. La otra propiedad sera <b>"src"</b>, a la cual se le asignara la ruta donde encuentre alojado el archivo de la fuente. Por ejemplo:

```
@font-face {
    font-family: mifuente; /* Es aconsejable usar solamente minusculas porque internet explorer puede presentar problemas */
    src: url('./fonts/Roboto-Regular.ttf');
}

div {
    font-family: mifuente; /* Aca se esta usando la fuente previamente creada en la regla @font-face */
}
```

Tambien es posible asignar un archivo para un estilo especifico de la fuente:

```
@font-face {
    font-family: mifuente;
    src: url('./fonts/Roboto-Bold.ttf');
    font-weight: bold; /* Si es especifica un estilo, el navegador usara este archivo cuando se le pida que renderize la fuente con ese estilo, en este caso, negrilla, pero puede ser con cualquier otro */
}

div {
    font-family: mifuente;
    font-weight: bold;
}
```

[Google Fonts](https://fonts.google.com/) tambien permite descargar los archivos de todas sus fuentes. Ademas proporciona estilos para cada una de ellas que pueden ser aplicados como clases. Para mas informacion, serguir este [enlace](https://developers.google.com/fonts/docs/getting_started)

## Funciones

### linear-gradient() y radial-gradient()

Ambas funciones se encargan de generar un degradado entre dos o mas colores. Su sintaxis es la siguiente:

```
div {
    background: linear-gradient([direccion], color-stop1, color-stop2 [, color-stop3, ... , color-stopn]);
}
```

Los parametros obligatorios de esta funcion son dos colores, que se denominan "color-stop". Estos serian los colores de los que se haran el degradado entre medio y los que finalmente apareceran los extremos de la pagina. Añadir mas color-stops es opcional y apareceran todos en el orden en que hayan sido asignados. Se puede a su vez, asignar una medida a cada color-stop para establecer el porcentaje que ocupara el mismo.

```
body {
    background: linear-gradient(yellow 70%, orange);
    background: linear-gradient(yellow, orange 1200px);
}
```

Otro parametro opcional es la direccion. El parametro por defecto es "to bottom". Los posibles parametros direccionales son:
* **to bottom:** El valor por defecto. Los colores se imprimiran de arriba hacia abajo en el orden en que se asignaron.
* **to top:** Los colores se imprimiran de abajo hacia arriba en el orden en que se asignaron.
* **to right:** Los colores se imprimiran de la izquierda hacia la derecha en el orden en que se asignaron.
* **to left:** Los colores se imprimiran de la derecha hacia la izquierda en el orden en que se asignaron.<br/><br/>
Tambien es posible combinar estos valores direccionales para generar cierto grado de inclinacion en el degradado. Por ejemplo:

```
body {
    background: linear-gradient(to left top, green, blue);
}
```

Tambien es posible asignar un angulo para lograr una inclinacion mas precisa:

```
body {
    background: linear-gradient(75deg, violet, white);
}
```

**radial-gradient** es una funcion similar, solo que el degradado de colores sera en forma de radio y no lineal. Su sintaxis es la siguente:

```
body {
    background: radial-gradient(forma tamaño at posicion, color-stop, color-stop2 [, color-stop3, ... , color-stopn]);
}
```
Los parametros para modificar la forma son:
* ellipse: Valor asignado por defecto. El gradiente tendra forma de elipse.
* circle: El gradiente tendra forma de circulo.<br/>
Y por su parte, para modificar el tamaño:

* closest-side
* farthest-side
* closest-corner
* farthest-corner

