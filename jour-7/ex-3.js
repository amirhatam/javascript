var longNames = [
    {
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "John",
        lastName: "Smith"
    }
]

// console.log(longNames);

var shortNames = longNames.map(function (str) {

 
    return {
        name: str.firstName + " " + str.lastName
    }

    // console.log("name : ", str.firstName + " ", str.lastName);
});

console.log(shortNames);
