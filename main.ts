input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    strip.clear()
    basic.showString("Inhale", 100)
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Indigo))
    strip.show()
    basic.pause(1000)
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Indigo))
    strip.show()
    basic.showString("Hold", 100)
strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Indigo))
    strip.show()
    basic.pause(1000)
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Indigo))
    strip.show()
    basic.showString("Exhale", 100)
strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Indigo))
    strip.show()
    basic.pause(1000)
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Indigo))
    strip.show()
    basic.showString("Hold", 100)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Indigo))
    strip.show()
    basic.pause(1000)
    strip.clear()
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("Look for 5 things", 100)
basic.pause(5000)
    basic.showString("Touch objects on box", 100)
basic.pause(5000)
    basic.showString("Listen", 100)
music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    basic.showString("Smell 2 things", 100)
basic.pause(4000)
    basic.showString("Taste 1 thing", 100)
basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    strip.clear()
    strip.show()
    strip.setPixelColor(randint(0, 6), neopixel.rgb(randint(1, 255), randint(1, 255), randint(1, 255)))
    strip.show()
    strip.setPixelColor(randint(0, 6), neopixel.rgb(randint(1, 255), randint(1, 255), randint(1, 255)))
    strip.show()
    strip.setPixelColor(randint(0, 6), neopixel.rgb(randint(1, 255), randint(1, 255), randint(1, 255)))
    strip.show()
    basic.pause(2000)
    strip.clear()
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P9, 7, NeoPixelMode.RGB)
