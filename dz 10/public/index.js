function getRandomInt(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

function getRandomElement(array){
  return array[getRandomInt(0, array.length-1)];
}

const names = ["Alex", "Alvis", "Stepan", "Anton", "Stephani", "Kathy", "Alina", "Livia"];
const emails = ["200726", "okeokeoke", "lalalala", "dululu", "trululu", "mango", "cat-person", "IloveAnton"];
const mails = ["@mail.ru", "@gmail.com", "@icloud.com"];

function createRandomName() {
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
  const len = getRandomInt(1, 10);
  let arr = "";
  for(let i = 0; i < len; i++){
      arr += getRandomInt(1, 10);
      arr += " ";
  }
  return arr;
}
function getRandomGems(){
  return getRandomInt(0, 700);
}
function getRandomCoins(){
  return getRandomInt(0, 1000);
}
function getRandomAttendance(){
  return getRandomInt(0, 100);
}
createStudentButton.onclick = () => {
    document.querySelector("#name").value = createRandomName();
    document.querySelector("#age").value = createRandomAge();
    document.querySelector("#email").value = createRandomEmail();
    document.querySelector("#phone").value = createRandomPhone();
    document.querySelector("#marks").value = getRandomMarks();
    document.querySelector("#gems").value = getRandomGems();
    document.querySelector("#coins").value = getRandomCoins();
    document.querySelector("#attendance").value = getRandomAttendance();
}

async function saveStudent(){
  let student = {
      name: document.querySelector("#name").value,
      age: +document.querySelector("#age").value,
      email: document.querySelector("#email").value,
      phone: document.querySelector("#phone").value,
      marks: document.querySelector("#marks").value,
      gems: document.querySelector("#gems").value,
      coins: document.querySelector("#coins").value,
      attendance: document.querySelector("#attendance").value
  }
  const content = JSON.stringify(student);
  

  const response = await fetch("/saveStudent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: content,
    });
    if (response.ok) {
      const responseText = await response.text();
      document.querySelector("#age").value = `${responseText}`;
    }

    const response2 = await fetch("/bestStudents", {
      method: "GET",
      headers: {
        "Content-Type": "text/plain",
      }
    });
    if (response2.ok) {
      const responseText2 = await response2.text();
      document.querySelector("#avgMark").value = responseText2.split(" ")[0];
      document.querySelector("#gemsCount").value = responseText2.split(" ")[1];
      document.querySelector("#coinsCount").value = responseText2.split(" ")[2];
      return;
    }
    document.querySelector("#avgMark").value = `ERROR`;
}

