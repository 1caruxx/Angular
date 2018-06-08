# ![Logo](./icon.png) Markdown

Es un lenguaje de marcado ligero que tiene como objetivo, facilitar la escritura y lectura de texto escrito entre marcas. Un archivo escrito en Markdown tendra una extension `.md`. Ademas, si se lo nombra como "README", github lo mostrara automaticamente en la pagina del repositorio. La sintaxis puede variar entre aplicacion y aplicacion, pero generalmente se mantiene un standard. Es totalmente posible insertar etiquetas HTML dentro de markdown. Ademas, puede convertirse Markdown a HTML convencional a traves del siguiente [enlace](https://www.browserling.com/tools/markdown-to-html). Las palabras que se quieran marcar, no deben mas que envolverse en caracters de uso cotidiano.

## Tabla de contenidos

* [Encabezados](#encabezados)
* [Italica](#italica)
* [Negrilla](#negrilla)
* [Tachado](#tachado)
* [Links](#links)
* [Imagen](#imagen)
* [Lista ordenada](#lista-ordenada)
* [Lista desordenada](#lista-desordenada)
* [Tablas](#tablas)
* [Separadores](#separadores)
* [Citas](#citas)
* [Task lists](#task-list)
* [Bloques de codigo de una sola linea](#bloques-de-codigo-de-una-sola-linea)
* [Bloques de codigo](#bloques-de-codigo)
* [Ignorar caracteres Markdown](#ignorar-caracteres-markdown)

## Sintaxis

### Encabezados

Para imprimir encabezados, se debe anteponer de 1 a 6 signos de numeral "#":

```
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6
```

Produce:

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

Tambien se pueden colocar dos o mas signos de igual "==" para headers de nivel 1, o guiones medios "--" para headers de nivel 2:

```
Header 1: Header 1
==================
Header 2: Header 2
------------------
```

Produce:

Header 1
==================
Header 2
------------------

En github, estos encabezados, se autogeneran un id a si mismos que seran el propio texto del encabezado reemplazando todos los espacios por guiones medios y mayusculas por minusculas. Esto quiere decir que es posible generar un vinculo para desplazar al usuario automaticamente a ese encabezado de la siguiente forma.

\[Encabezado 1\](#header-1)

Esta es la sintaxis para declarar un enlace (mas informacion en el siguiente [vinculo](#links)). El numeral "#" se debe colocar por delante de la direccion para especificiar que se trara de un id de la propia pagina. Esto tiene cierta relacion con el tipo de sintaxis que usa <a href="https://github.com/1caruxx/Angular/tree/master/CSS#sintaxis" title="Explicacion de CSS en mi github" target="_blank">CSS</a>.

### Italica

Se usan los signos asterisco "*" o guion bajo "_":

\*Italica\* = *italica*<br/>
\_Italica\_ = _italica_

### Negrilla

Se usan doble asteriscos "**" o doble guion bajo "__":

\*\*Negrilla\*\* = **negrilla**<br/>
\_\_Negrilla\_\_ = __negrilla__

Tambien se pueden combinar italicas con negrilla usando triple asterisco (***) o triple guion bajo (___):<br/>
\*\*\*Italica y negrilla\*\*\* = ***italica y negrilla***<br/>
\_\_\_Italica y negrilla\_\_\_ = ___italica y negrilla___

### Tachado

Para tachar se usa el signo de virgulilla "~":

\~Tachado\~ = ~tachado~

### Links

Si se quiere imprimir un vinculo simple, se debera escribir el mismo entre los signos de tag "<>":

\<https://github.com/1caruxx>: <https://github.com/1caruxx>

Aunque si se quiere una escritura un poco mas personalizable, se puede usar la siguiente sintaxis:

```
[Texto del vinculo que se mostrara](El vinculo "El atributo title, es decir, un texto que se mostrara cuando el usuario posicione el cursor encima del vinculo")
```

\[Ir a mi github\](https://github.com/1caruxx "Seguime!") = [Ir a mi github](https://github.com/1caruxx "Seguime!")


### Imagen

La sintaxis para insertar una imagen es muy similar a la del link, solo hay que anteponer un signo de exclamacion "!":

```
![El atributo alt, es decir, el texto que aparecera si la imagen no puede ser cargada](El vinculo "El atributo title, es decir, un texto que se mostrara cuando el usuario posicione el cursor encima de la imagen")

![No se ha podido encontrar la imagen :(](https://i.pinimg.com/originals/55/15/6b/55156b11d7d12627be5dee3ab3158506.jpg "Batman")
```

Produce:

![No se ha podido encontrar la imagen :(](https://i.pinimg.com/originals/55/15/6b/55156b11d7d12627be5dee3ab3158506.jpg "Batman")

### Lista ordenada

Se pueden usar numeros seguidos de puntos "." o cierre de parentesis ")":

```
1. Un item
2. Un item
3. Un item

1) Un item
2) Un item
3) Un item

1. Un item
1. Un item
1. Un item
```

Produce

1. Un item
2. Un item
3. Un item

1) Un item
2) Un item
3) Un item

1. Un item
1. Un item
1. Un item

### Lista desordenada

Se pueden usar el asterisco "*", signo de suma "+" o guiones medios "-":

```
* Un item
- Un item
+ Un item
```

Produce:

* Un item
- Un item
+ Un item

### Tablas

Es posible generar tablas dibujandolas en markdown, usando guiones medios "-" para los bordes horizontales y los caracteres "|" para los bordes verticales. Si se quiere alinear las celdas hacia el centro, se debe colocar doble puntos ":" en el principio y el final del borde horizontal que divide el encabezado del resto de celdas. Para alinearlas a la derecha, solo se debe colocar doble punto en el final:

```
| encabezado    | encabezado          | encabezado   |
| ------------- |:-------------------:| ------------:|
| celda         | celdas              | celdas       |
| celda         | alineadas           | alineadas    |
| celda         | al centro           | a la derecha |
```

Produce:

| encabezado    | encabezado          | encabezado   |
| ------------- |:-------------------:| ------------:|
| celda         | celdas              | celdas       |
| celda         | alineadas           | alineadas    |
| celda         | al centro           | a la derecha |

### Separadores

Se pueden usar triple guiones medios "---", triple guiones bajos "___" o triple asteriscos "***":

```
---
___
***
```

Produce:

---
___
***

### Citas

Se usa el simbolo de mayor ">":

`> Hola mundo!`

Produce:

> Hola mundo!

### Task list

Se imprimen como si fuera un check box. Para crear las casillas, se usaran los corchetes "[]". Para tildar una casilla, dentro de la misma se escribira una "x". Si se quiere dejar vacia, tendra que haber un espacio de por medio:

```
* [x] Meta 1
* [x] Meta 2
* [ ] Meta 3
```

Produce:

* [x] Meta 1
* [x] Meta 2
* [ ] Meta 3

### Bloques de codigo de una sola linea

Es posible plasmar codigo en una linea y que este no sea interpretado usando los signos de acento grave (`):

\`\<span>Hola mundo!\</span>\` = `<span>Hola mundo!</span>`

### Bloques de codigo

Tambien pueden plasmares varias lineas de codigo a la vez si se usa triple signo de acento grave (```):

```
function AgregarIVA(impuesto) {

    alert("El total a pagar es de: " + impuesto * 1.21);
}
```

Ademas, se puede especificar el lenguaje que sera escrito dentro para que algunas aplicaciones (github es un ejemplo) puedan resaltar la sintaxis. A esto se le conoce como "Highlighting":

```
    ```javascript
    function AgregarIVA(impuesto) {

        alert("El total a pagar es de: " + impuesto * 1.21);
    }
    ```
```

Produce:

```javascript
function AgregarIVA(impuesto) {

    alert("El total a pagar es de: " + impuesto * 1.21);
}
```
Otro ejemplo pero con CSS:

```css
body {
    height: 100%;
    background: url('./src/resource.jpg') no-repeat cover;
    font-family: verdana;
}
```

### Ignorar caracteres Markdown

Si se quiere escribir algun caracter que forma parte de la sintaxis de Markdown y que este no sea interpretado, se debe anteponer el caracter de escape barra invertida "\\":

`\*Ejemplo de italica\*` 

Produce:

\*Ejemplo de italica\*