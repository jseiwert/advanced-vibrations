basic.forever(function () {
    serial.writeValue("Vibration", input.acceleration(Dimension.Strength))
    led.toggle(0, 0)
    basic.pause(100)
})
