let students = {
    Anna:{
        age: 16,
        email: "ania@gmail.com",
        phone: "+375296460261",
        marks: [10, 10, 10, 10],
        gems: 1000,
        coins: 200,
        attendance: 100
    },
}

const {getRandomInt, getRandomElement} = require("../utils/random");

const names = ["Alex", "Alvis", "Stepan", "Anton", "Stephani", "Kathy", "Livia", "Alina"];
const emails = ["200726", "okeokeoke", "lalalala", "dululu", "trululu", "mango", "cat-person", "IloveAnton"];
const mails = ["@mail.ru", "@gmail.com", "@icloud.com"];

function createRandomName(){
    return getRandomElement(names);
}

function createRandomAge(){
    return getRandomInt(12, 30);
}

function createRandomEmail(){
    return getRandomElement(emails) + getRandomElement(mails);
}

function createRandomPhone(){
    return "+37529" + getRandomInt(1000000, 9999999);
}
function getRandomMarks(){
}