let Y = 0
let X = 0
basic.forever(function () {
    Y = 0
    for (let X = 0; X <= 3; X++) {
        led.plot(X, 0)
        basic.pause(100)
        led.toggle(X, 0)
    }
    X = 4
    for (let Y = 0; Y <= 3; Y++) {
        led.plot(4, Y)
        basic.pause(100)
        led.toggle(4, Y)
    }
    for (let X = 0; X <= 3; X++) {
        led.plot(4 - X, 4)
        basic.pause(100)
        led.toggle(4 - X, 4)
    }
    X = 0
    for (let Y = 0; Y <= 3; Y++) {
        led.plot(0, 4 - Y)
        basic.pause(100)
        led.toggle(0, 4 - Y)
    }
})
