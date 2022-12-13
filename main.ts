function turn_only (turn: number) {
    if (Math.abs(turn) > 70) {
        if (turn < 0) {
            kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, Math.abs(turn))
            kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Reverse, Math.abs(turn))
        }
        if (turn < 0) {
            kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Reverse, Math.abs(turn))
            kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, Math.abs(turn))
        }
    } else {
    	
    }
}
function drive_forward_and_turn (forward: number, turn: number) {
    if (forward > 0) {
        kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, forward * ((turn_only_thresh - turn) / turn))
        kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, forward)
    } else {
        kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, Math.abs(forward))
        kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, Math.abs(forward) * ((turn_only_thresh - Math.abs(turn)) / Math.abs(turn)))
    }
}
radio.onReceivedValue(function (name, value) {
    if (name == "forward") {
        rforward = value
    }
    if (name == "turn") {
        rturn = value
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
let rturn = 0
let rforward = 0
let turn_only_thresh = 0
basic.showLeds(`
    . # # # .
    # # # # #
    . . # . .
    # . # . #
    . # # # .
    `)
turn_only_thresh = 70
loops.everyInterval(100, function () {
    if (Math.abs(rturn) >= turn_only_thresh) {
        turn_only(rturn)
    } else {
        if (Math.abs(rturn) >= 30) {
            drive_forward_and_turn(rforward, rturn)
        } else {
            drive_forward(rforward)
        }
    }
})
