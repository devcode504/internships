## Antes de la prueba técnica:

### HTML  (Requerido)
Deberás tener un conocimiento sólido de HTML y su sintaxis, así como de los diferentes elementos, etiquetas y atributos que se utilizan para construir una página web.
 ```html
 <h1>Título principal de la página</h1>
<p>Este es un párrafo de ejemplo.</p>
<img src="imagen.jpg" alt="Descripción de la imagen">
<a href="https://www.ejemplo.com">Enlace a la página de ejemplo</a>
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ul>
<table>
  <tr>
    <th>Encabezado 1</th>
    <th>Encabezado 2</th>
  </tr>
  <tr>
    <td>Dato 1</td>
    <td>Dato 2</td>
  </tr>
  <tr>
    <td>Dato 3</td>
    <td>Dato 4</td>
  </tr>
</table>
<form>
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre"><br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email"><br>
  <input type="submit" value="Enviar">
</form>

<div>
  <h2>Título de sección</h2>
  <p>Este es un párrafo de ejemplo.</p>
</div>

<strong>Texto en negrita</strong>
<em>Texto en cursiva</em>
<u>Texto subrayado</u>
 
 ```
### CSS  (Requerido)
Deberás tener un buen conocimiento de CSS y cómo se utiliza para dar estilo a una página web. Esto incluye el uso de selectores, propiedades y valores, y la comprensión de cómo se aplican estilos a diferentes elementos en una página.
```css
body {
  background-color: #f2f2f2;
}

p {
  color: blue;
}

img {
  border: 1px solid black;
}

h1 {
  text-align: left;
}

h2 {
  font-size: 24px;
}

```
### JavaScript (Requerido)
El conocimiento de JavaScript es esencial para cualquier desarrollador web. Deberás tener una comprensión sólida de los conceptos básicos de programación, como variables, funciones, estructuras de control de flujo y objetos.
```javascript
// Asignación de una variable
let nombre = "Juan";

// Imprimir un mensaje en la consola del navegador
console.log("Hola, " + nombre);

// Obtener un elemento del DOM y cambiar su contenido
let titulo = document.querySelector("h1");
titulo.textContent = "Bienvenidos a mi sitio web";

// Añadir un evento a un elemento del DOM
let boton = document.querySelector("button");
boton.addEventListener("click", function() {
  alert("¡Has hecho clic en el botón!");
});

// Crear una función personalizada
function sumar(num1, num2) {
  return num1 + num2;
}

// Llamar a la función y asignar el resultado a una variable
let resultado = sumar(4, 7);

// Comprobar si una condición se cumple y ejecutar un bloque de código en consecuencia
if (resultado > 10) {
  console.log("El resultado es mayor que 10");
} else {
  console.log("El resultado es menor o igual a 10");
}

// Bucle "for" que cuenta del 0 al 4
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Bucle "while" que cuenta del 5 al 9
let j = 5;
while (j < 10) {
  console.log(j);
  j++;
}

// Bucle "do-while" que cuenta del 10 al 14
let k = 10;
do {
  console.log(k);
  k++;
} while (k < 15);

let texto = "Hola, mundo!";

// length: devuelve la longitud del string
console.log(texto.length);

// toUpperCase: convierte el string a mayúsculas
console.log(texto.toUpperCase());

// slice: devuelve una porción del string
console.log(texto.slice(0, 4));

let numero = 42;

// toFixed: devuelve el número con un número específico de decimales
console.log(numero.toFixed(2));

// toString: convierte el número en un string
console.log(numero.toString());

// isNaN: comprueba si el número es un valor "NaN"
console.log(isNaN(numero));

let numero = 42;

// toFixed: devuelve el número con un número específico de decimales
console.log(numero.toFixed(2));

// toString: convierte el número en un string
console.log(numero.toString());

// isNaN: comprueba si el número es un valor "NaN"
console.log(isNaN(numero));

let verdadero = true;
let falso = false;

// toString: convierte el boolean en un string
console.log(verdadero.toString());

// valueOf: devuelve el valor primitivo del boolean
console.log(falso.valueOf());

// logical AND: devuelve true si ambos operandos son true
console.log(verdadero && falso);

let indefinido;

// typeof: devuelve el tipo de la variable
console.log(typeof indefinido);

// instanceof: comprueba si la variable es una instancia de "Undefined"
console.log(indefinido instanceof Undefined);

// comparison: devuelve "false" al comparar con cualquier otro valor
console.log(indefinido == null);

let nulo = null;

// typeof: devuelve el tipo de la variable
console.log(typeof nulo);

// instanceof: comprueba si la variable es una instancia de "Null"
console.log(nulo instanceof Null);

// comparison: devuelve "true" al comparar con "null" o "undefined"
console.log(nulo == null);

let persona = {
  nombre: "Juan",
  edad: 30,
  altura: 1.80,
  casado: false
};

// keys: devuelve un array con las claves del objeto
console.log(Object.keys(persona));

// values: devuelve un array con los valores del objeto
console.log(Object.values(persona));

// hasOwnProperty: comprueba si el objeto tiene una propiedad específica
console.log(persona.hasOwnProperty("nombre"));

let numeros = [1, 2, 3, 4, 5];

// length: devuelve la longitud del arreglo
console.log(numeros.length);

// push: añade un elemento al final del arreglo
numeros.push(6);
console.log(numeros);

// slice: devuelve una porción del arreglo
console.log(numeros.slice(0, 3));

```
### Frameworks de desarrollo web  (Opcional)
Deberás tener experiencia en al menos un framework de desarrollo web, como React, Vue.js, Angular, etc. Debes comprender cómo se utiliza el framework y cómo se integra con otros elementos de la página web. En el proyecto estaremos trabajando con Vue.js
### Git
Git es una herramienta esencial para cualquier desarrollador web. Deberás estar familiarizado con los conceptos básicos de Git, como la creación de repositorios, la gestión de ramas y la resolución de conflictos.
```bash
// Inicializar un nuevo repositorio Git en una carpeta existente
git init

// Agregar todos los archivos nuevos y modificados al área de preparación
git add .

// Confirmar los cambios en el repositorio con un mensaje descriptivo
git commit -m "Mensaje de confirmación"

// Mostrar el historial de confirmaciones en el repositorio
git log

// Crear una nueva rama en el repositorio
git branch nueva-rama

// Cambiar a la rama especificada
git checkout nueva-rama

// Fusionar una rama en la rama actual
git merge otra-rama

// Descargar los cambios del repositorio remoto a la rama actual
git pull

// Subir los cambios de la rama actual al repositorio remoto
git push

// Clonar un repositorio remoto a una carpeta local
git clone url-del-repositorio
```

## Recomendaciones generales:

- Asegúrate de prepararte revisando los puntos clave mencionados anteriormente, así como cualquier otra tecnología o lenguaje que se requiera para la prueba técnica.
- Asegúrate de que tu entorno sea adecuado para una entrevista virtual. Esto incluye la iluminación, el ruido de fondo y la conexión a Internet.
- Si se te proporciona alguna prueba técnica o requisitos previos, asegúrate de haberlos revisado y completado con éxito antes de la entrevista.
- Es importante que te comuniques claramente durante la entrevista. Si no comprendes una pregunta o no sabes la respuesta, es mejor pedir aclaración o admitir que no sabes la respuesta en lugar de tratar de adivinar.
- Debes mostrar una actitud positiva y profesional durante la entrevista. Esto incluye ser puntual, ser amable y ser respetuoso con el entrevistador.

## Ejercicios prácticos (Opcional)
### HTML
1.  Crea una página HTML que contenga un encabezado, un párrafo y una imagen. El encabezado debe ser "Mi primer página web". El párrafo debe contener una descripción corta de ti y la imagen debe ser una foto tuya o de algo que te guste.
    
2.  Crea una página HTML que contenga un encabezado, una lista desordenada y una tabla. El encabezado debe ser "Mi lista de compras". La lista debe contener al menos cinco artículos que quieras comprar en el supermercado. La tabla debe tener dos columnas: una para el artículo y otra para la cantidad que quieres comprar.
    
3. Crea una página HTML que contenga un encabezado, un formulario y una sección de resultados. El encabezado debe ser "Calculadora de IMC". El formulario debe tener dos campos de entrada de texto para la altura y el peso, y un botón de envío. La sección de resultados debe mostrar el índice de masa corporal (IMC) calculado a partir de los datos ingresados en el formulario.

### CSS
1. Crear una página con un título centrado y un párrafo debajo del título. El título debe tener un tamaño de letra de 36px y un color de texto rojo. El párrafo debe tener un tamaño de letra de 18px y un color de texto negro.

2. Crear una página con una imagen centrada en el medio. La imagen debe tener un tamaño de 400px por 400px. Agregar un borde alrededor de la imagen de 5px de ancho y color negro. Agregar un sombreado a la imagen con un radio de 10px.


3. Crear una página con un menú de navegación horizontal. El menú debe tener al menos 5 elementos de menú y estar alineado en el centro de la página. Cada elemento de menú debe tener un color de fondo diferente y un tamaño de letra de 18px. Al pasar el cursor sobre un elemento de menú, el color de fondo debe cambiar a un color más claro. Cuando se hace clic en un elemento de menú, debe llevar a una sección de la página correspondiente.

### Javascript
1. Crea una función llamada esNumeroPar que tome un número como argumento y devuelva true si es par y false si es impar.

2. Crea una función llamada calcularPromedio que tome un array de números como argumento y devuelva el promedio de dichos números.

3. Crea una función llamada ordenarPalabras que tome un string de palabras separadas por espacios como argumento y devuelva un nuevo string con las palabras ordenadas alfabéticamente.

### Juego de Memoria (Nivel intermedio)
Crea una página web con una cuadrícula de 16 tarjetas boca abajo.
Al hacer clic en una tarjeta, se voltea para mostrar su contenido. El usuario debe encontrar todas las parejas de tarjetas iguales.
Las tarjetas deben estar en una posición aleatoria cada vez que se inicia el juego.
Cuando se encuentra una pareja de tarjetas, estas deben desaparecer de la pantalla.
Cuando se encuentran todas las parejas, se muestra un mensaje de "Juego terminado" y se muestra el tiempo que tomó al usuario completar el juego. 