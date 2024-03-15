
const firstNames = ["Adam", "Bob", "Charlie", "David", "Eve", "Frank", "George", "Helen", "Ivy", "Jack", "Katie", "Liam", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Sam", "Tina", "Ulysses", "Violet", "Wendy", "Xander", "Yvonne", "Zach"];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson", "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez", "Moore", "Martin", "Jackson", "Thompson", "White", "Lopez", "Lee", "Gonzalez", "Harris",]

function getRandomName() {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
}
    
function getRandomAge(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getEmail(firstName, lastName) {
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
}

function getRandomUser() {
    const name = getRandomName();
    const age = getRandomAge(18, 80);
    const email = getEmail(name.split(" ")[0], name.split(" ")[1]);
    return {
        name,
        age,
        email
    }
}

module.exports = {
    getRandomUser
}
