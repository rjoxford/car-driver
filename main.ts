function turn_only (num: number) {
	
}
function drive_forward_and_turn (forward: number, turn: number) {
	
}
radio.onReceivedValue(function (name, value) {
    if (name == "turn") {
        if (value > 0) {
            kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, value)
        } else {
            kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Reverse, Math.abs(value))
        }
    }
    basic.showString("BREAK")
    if (name == "forward") {
    	
    }
    basic.showString("BREAK")
    if (name == "right") {
        if (value > 0) {
            kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, value)
        } else {
            kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Reverse, Math.abs(value))
        }
    }
})
function drive_forward (num: number) {
    if (num > 0) {
        kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, num)
        kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, num)
    } else {
        kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Reverse, Math.abs(num))
        kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Reverse, Math.abs(num))
    }
}
basic.showLeds(`
    . # # # .
    # # # # #
    . . # . .
    # . # . #
    . # # # .
    `)
