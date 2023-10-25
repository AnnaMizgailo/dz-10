function getRandomInt(min, max){
    return Math.floor(Math.random()*min + (max-min-1));
}

function getRandomElement(array){
    return array[getRandomInt(0, array.length-1)];
}

module.exports = {getRandomInt, getRandomElement};