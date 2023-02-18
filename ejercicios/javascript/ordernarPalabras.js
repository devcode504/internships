function ordenarPalabras(string) {
  const palabras = string.split(" ");
  palabras.sort();
  return palabras.join(" ");
}

console.log(ordenarPalabras("hoy es un buen día para programar")); // buen día es hoy para programar un
