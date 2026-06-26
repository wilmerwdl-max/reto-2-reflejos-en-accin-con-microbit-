input.onButtonPressed(Button.A, function () {
    if (Señal == 1) {
        basic.showIcon(IconNames.Happy)
        Puntos += 1
    } else {
        basic.showIcon(IconNames.No)
        basic.showNumber(Puntos)
    }
    if (Señal == randint(1, 2)) {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showArrow(ArrowNames.East)
    }
    if (Puntos == 5) {
        basic.showString("Ganaste!")
    }
})
input.onButtonPressed(Button.B, function () {
    if (Señal == 2) {
        basic.showIcon(IconNames.Happy)
        Puntos += 1
    } else {
        basic.showIcon(IconNames.No)
        basic.showNumber(Puntos)
    }
    Señal = randint(1, 2)
    if (Señal == 1) {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showArrow(ArrowNames.East)
    }
    if (Puntos == 5) {
        basic.showString("Ganaste!")
    }
})
let Señal = 0
let Puntos = 0
Puntos = 0
basic.showString("Listo!")
Señal = randint(1, 2)
if (Señal == 1) {
    basic.showArrow(ArrowNames.North)
} else {
    basic.showArrow(ArrowNames.East)
}
basic.forever(function () {
	
})
