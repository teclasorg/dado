input.onGesture(Gesture.Shake, function () {
    // Fíjate en los colores "si-agitado" está en la categoría Entrada
    // "escoger al azar" está en la categoría Matemática.
    // Queremos simular que tiramos un dado: Muestra varios números al azar (del 1 al 6) hasta que se para.
    for (let index = 0; index < randint(3, 6); index++) {
        basic.showNumber(randint(1, 6))
    }
})
basic.showString("dado")
basic.forever(function () {
	
})
