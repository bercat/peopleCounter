function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

function running() {
    console.log(' x x |  x x')
    console.log(' x x |  x x')
    console.log(' x x 42  x x')
    console.log(' x x |  x x')
    console.log(' x x |  x x')
}

let lapsCompleted = 0

// Create a function 
//that increments the lapsCompleted variable with one
function incrementLaps() {
    lapsCompleted = lapsCompleted + 1;
    console.log(lapsCompleted)

}

let lap1 = 34
let lap2 = 33
let lap3 = 36
// Create a function 
//that logs out the sum of all the lap times
function lapTimes() {
    let totalTime = lap1 + lap2 + lap3;
    console.log('lapTime: ' + totalTime)
}

function finished() {
    console.log(' x x 🍾  x x')
    
}

// Setting up the the race 🏎 🏎 🏎
// countdown()

// GO! 🏁
// Players are running the race 🏎 💨
running() 
incrementLaps()
incrementLaps()
incrementLaps()
lapTimes()
// Race is finished! 🍾
finished()

// Get ready for a new race 🏎 🏎 🏎
// countdown()
