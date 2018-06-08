# ![Logo](./icon.png) Emmet

[Emmet](https://emmet.io/ "Sitio oficial de Emmet") es un plugin disponible para una gran cantidad de editores de codigo que permite escribir de una forma mas sencilla y rapida. Su sintaxis sera adaptable a los lenguajes HTML y CSS.

## Tabla de contenidos

* [Instalacion](#instalacion)
* [Sintaxis](#sintaxis)<br>
&nbsp;&nbsp;&nbsp;[HTML](#html)<br/>
&nbsp;&nbsp;&nbsp;[CSS](#css)<br/>
* [Snippets](#snippets)<br>

## Instalacion

Dependiendo del editor en el cual se quiera instalar Emmet, habra que seguir unos pasos u otros. En el apartado de [descargas](https://emmet.io/download/) del sitio oficial de Emmet se proporciona una lista de los editores para los cuales esta disponible y los pasos que se deben seguir para su instalacion. En el caso del editor [Visual Studio Code](https://code.visualstudio.com/), ya tiene incorporado de por si la sintaxis de Emmet, por lo que no requiere una instalacion previa.

## Sintaxis

Emmet toma el concepto de "snippet" y lo lleva mas alla generando una [sintaxis basada en CSS](). Como se ha dicho previamente, la sintaxis de Emmet es aplicable a los lenguajes HTML y CSS y sus abreviaciones seran detectadas en base a la extension del archivo.

### HTML

El ejemplo mas basico de los beneficios que puede brindar Emmet, es el ahorro de escribir las etiquetas. Simplemente escribiendo el nombre de una etiqueta y pulsando tabulacion o enter (dependiendo del editor), generara la etiqueta de apertura y cierre. Por ejemplo, si se escribe `div` y se pulsa enter, se generara automaticamente `<div></div>`.<br/> Si bien muchos editores ya tienen esta funcion integrada por defecto, forma parte de la sintaxis de Emmet.
El cursor automaticamente se posicionara entre las etiquetas de apertura y cierre. A esto se le denomina <b>"paradas"</b>. Para posicionar el cursor en la proxima parada, se puede presionar tabulacion.<br/>
A su vez, si el editor posee un IntelliSense instalado para Emmet, se podran ver las sugerencias asi como el resultado antes de pulsar enter o tabulacion en una ventana de dialogo proxima a la palabra escrita.<br/>
Un snippet muy beneficioso resulta ser "!" o "doc" que imprimira la estructura basica de una pagina HTML.<br/>
Emmet, al igual que muchas otras tecnologias, emplea [sintaxis CSS](https://github.com/1caruxx/Angular/tree/master/CSS#sintaxis) para hacer referencia a clases, id, atributos, etc de una etiqueta. Por ejemplo, para añadirle una clase a un etiqueta se usa el caracter punto "." como en CSS:

```
p.nombre-de-la-clase
```

produce:

```html
<p class="nombre-de-la-clase"></p>
```

Para colocar dos o mas clases, se deberan escribir una detras de otra siempre con un punto por delante:

```
p.clase.otra-clase
```

produce:

```html
<p class="clase otra-clase"></p>
```

Con el atributo id sucede algo muy similar:

```
p#id-de-la-etiqueta
```

produce:

```html
<p id="id-de-la-etiqueta"><p>
```

Tambien es posible intercalarlos y el resultado sera el esperado:

```
p.clase#id-etiqueta.otra-clase
```

produce:

```html
<p class="clase otra-clase" id="id-etiqueta"></p>
```

Para escribir cualquier otro atributo, se usaran los corchetes:

```
```


## Snippets