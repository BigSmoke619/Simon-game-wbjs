let seq = []
let myseq = []
let buttoncolour = ["red", " yellow ", "blue", "green"]

function randomcolur() {
    let x = Math.floor(Math.random() * 4)
    seq.push(buttoncolour[x])
    return buttoncolour[x]
}
$(document).on("keydown", function(event) {
    if (event.key === 'w' || event.key === 'W') {
        myseq.push("g")
        nextSequence()
        render(green)
    }
    if (event.key === 'a' || event.key === 'A') {
        myseq.push("r")
        nextSequence()
        render(red)
    }
    if (event.key === 's' || event.key === 'S') {
        myseq.push("y")
        nextSequence()
        render(yellow)
    }
    if (event.key === 'd' || event.key === 'D') {
        myseq.push("b")
        nextSequence()
        render(blue)
    }
})

$("[ id='green']").click(function() {
    W: myseq.push("g")
    nextSequence()
    render(green)
})
$("[ id='yellow']").click(function() {
    S: myseq.push("y")
    nextSequence()
    render(yellow)
})
$("[ id='red']").click(function() {
    A: myseq.push("r")
    nextSequence()
    render(red)
})
$("[ id='blue']").click(function() {
    D: myseq.push("b")
    nextSequence()
    render(blue)
})

function nextSequence() {
    let r = (Math.random() * 3 + 1)
    seq.push(r)
}

function render(x) {
    var dio
    $(x).fadeOut(25, function() {
        $(x).fadeIn()
    })
    if (x === green) {
        dio = new Audio('./sounds/green.mp3')
        dio.play
    }
    if (x === yellow) {
        dio = new Audio('./sounds/yellow.mp3')
        dio.play
    }
    if (x === blue) {
        dio = new Audio('./sounds/blue.mp3')
        dio.play
    }
    if (x === red) {
        dio = new Audio('./sounds/red.mp3')
        dio.play
    }
}