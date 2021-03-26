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

let rover = {
  direction: "N",
  x: 0,
  y: 0,
};

function turnLeft() {
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

function turnRight() {
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


turnLeft();
turnLeft();
turnLeft();
turnLeft();


