let students = {
    "Anna":{
        age: 16,
        email: "ania@gmail.com",
        phone: "+375296460261",
        marks: "10 10 10 10",
        gems: 1000,
        coins: 200,
        attendance: 100,

    },
}
function addStudent(object) {
    const {name, age, email, phone, marks, attendance, gems, coins} = object;
    if(name && age && email && phone && marks && attendance && gems && coins){
        students[name] = {
            age: +age,
            email: email,
            phone: phone,
            marks: marks,
            gems: +gems,
            coins: +coins,
            attendance: +attendance
        }
        return students[name];
    }
    return null;
}
function maxAvgMark(){
    const keys = Object.keys(students);
    const avgMarks = [];
    for(const key of keys){
        let marks = students[key].marks.split(" ");
        if(marks[marks.length-1] == ''){
            marks.pop();
        }
        let avgMark = 0;
        for(let i = 0; i < marks.length; i++){
            avgMark += +marks[i];
        }
        avgMarks.push(avgMark/marks.length);
    }
    let index = avgMarks.indexOf(Math.max(...avgMarks))
    let name = Object.keys(students)[index];
    return name;
}

function maxGemCount(){
    const keys = Object.keys(students);
    let name = "Anna";
    for(const key of keys){
        if(students[key].gems > students[name].gems){
            name = key;
        }
    }
    return name;
}
function maxCoinCount(){
    const keys = Object.keys(students);
    let name = "Anna";
    for(const key of keys){
        if(students[key].coins > students[name].coins){
            name = key;
        }
    }
    return name;
}

module.exports = {addStudent, maxAvgMark, maxCoinCount, maxGemCount};
