
var grid = [
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

function turnLeft(elem) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      console.log("Mars Rover is now West " + rover.direction);
      break;

    case "W":
      rover.direction = "S"
      console.log("Mars Rover is now South " + rover.direction);
      break;

    case "E":
      rover.direction = "N";
      console.log("Mars Rover is now Nord " + rover.direction);
      break;

    case "S":
      rover.direction = "E";
      console.log("Mars Rover is now East " + rover.direction);
      break;

    default:
      console.log("this is not a valid .");
  }
}

function turnRight(elem) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      console.log("Mars Rover is now East " + rover.direction);
      break;

    case "E":
      rover.direction = "S";
      console.log("Mars Rover is now South " + rover.direction);
      break;

    case "S":
      rover.direction = "W";
      console.log("Mars Rover is now West " + rover.direction);
      break;

    case "W":
      rover.direction = "N";
      console.log("Mars Rover is now North " + rover.direction);
      break;
  }
}


turnRight();
turnRight();
turnRight();
turnRight();




function moveForward() {
  var xIncrease = 0;
  var yIncrease = 0;
  rover.travelLog.push({ x: rover.x, y: rover.y })

  

  if (rover.direction = "N") {
    yIncrease = 1;
    console.log("Mars Rover is now at position " + "[" + rover.x + ", " + rover.y + "]");
    console.log("", rover.travelLog);
  }
  else if (rover.direction = "E") {
    xIncrease = 1;
    console.log("Mars Rover is now at position " + "[" + rover.x + ", " + rover.y + "]");
    // console.log(rover.travelLog);
  }
  else if (rover.direction = "S") {
    yIncrease = 1;
    console.log("Mars Rover is now at position " + "[" + rover.x + ", " + rover.y + "]");
    // console.log(rover.travelLog);
  }
  else if (rover.direction = "W") {
    xIncrease = 1;
    console.log("Mars Rover is now at position " + "[" + rover.x + ", " + rover.y + "]");
    // console.log(rover.travelLog);
  }

  rover.x = rover.x + xIncrease;
  rover.y = rover.y + yIncrease;
}


moveForward();
moveForward();
moveForward();
moveForward();



function pilotRover(move) {


  // var max = 10

  for (var i = 0; i < move.length; i++) {


    console.log(move[i])

    switch (move[i]) {
      case "l":
        turnLeft();
        break;

      case "r":
        turnRight();
        break;

      case "f":
        moveForward();
        break;

      default:
        console.log("this is not a valid .");
    }
  }
}
// pilotRover("ll");




var prompt = require("prompt");


prompt.start();

function displayPrompt() {

  prompt.get({
    name: "pilotRover",
    description: "Move Mars Rover with the letters(l, r , f)",
    // validator: /[a-zA-Z]{1,6}/g
  },



    function (err, res) {

      if (res.pilotRover === "l") {
        return pilotRover("l")
        // console.log(pilotRover("l"))

      } else if (res.pilotRover === "r") {
        return pilotRover("r")
      }
      else if (res.pilotRover === "f") {
        return pilotRover("f")
      }
      else {
        console.log("this is not a valid .");
      }
    });
}

displayPrompt()

