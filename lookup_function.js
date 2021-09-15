var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
  // Only change code below this line
    var out = ""
    for(let i = 0; i < contacts.length; i++) {
        console.log(i, contacts.length)
        if (contacts[i]['firstName'] === name) {
            if (contacts[i].hasOwnProperty(prop) === true) {
                out =  contacts[i][prop]
                break
                }
            else {
                out =  "No such property"
                break
            }
        }
        else {
            out =  "No such contact"
        }
    }
    return out
}
  // Only change code above this line


console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"));