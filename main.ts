function displaySomething () {
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Sad)
    basic.showIcon(IconNames.Heart)
}
input.onButtonPressed(Button.A, function () {
    displaySomething()
})
basic.forever(function () {
	
})
