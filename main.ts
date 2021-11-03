basic.forever(function () {
    basic.showNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > 25) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 99)
    } else if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        maqueen.servoRun(maqueen.Servos.S2, 90)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
