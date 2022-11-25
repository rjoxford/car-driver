radio.onReceivedValue(function (name, value) {
    if (name == "forward") {
        if (value > 0) {
            kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, value)
            kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, value)
        }
        if (value < 0) {
            kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Reverse, value)
            kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Reverse, value)
        }
    }
})
basic.showLeds(`
    . . # . .
    . . # . .
    # . # . #
    . # # # .
    . . # . .
    `)
