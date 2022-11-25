radio.onReceivedValue(function (name, value) {
    if (name == "left") {
        if (value > 0) {
            kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, value)
        } else {
            kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Reverse, Math.abs(value))
        }
    }
    if (name == "right") {
        if (value > 0) {
            kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, value)
        } else {
            kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Reverse, Math.abs(value))
        }
    }
})
basic.showLeds(`
    . # # # .
    . . # . .
    # . # . #
    # . # . #
    . # # # .
    `)
