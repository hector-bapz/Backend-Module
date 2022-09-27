const fs = require("fs/promises");

findKoders('', '', '')
.catch((error)=>{
    console.log(error)
})

async function findKoders(name, lastname, age) {
  const data = await fs.readFile("./koders.json", "utf8");
  const jsonData = JSON.parse(data);
  let koders = jsonData.koders;
  if (name != "") {
    findName(koders, name);
  } else if (lastname != "") {
    findLastname(koders, lastname);
  } else {
    findAge(koders, age);
  }
}

function findAge(koders, age){
    let array = []
    for (let index = 0; index < koders.length; index++) {
        const element = koders[index];
        if(element.age >= age){
            array.push(element)
        }
    }
    console.log(array)
}

function findName(koders, name){
    let array = []
    for (let index = 0; index < koders.length; index++) {
        const element = koders[index];
        if(element.name == name){
            array.push(element)
        }
    }
    console.log(array)
}

function findLastname(koders, lastname){
    let array = []
    for (let index = 0; index < koders.length; index++) {
        const element = koders[index];
        if(element.lastName == lastname){
            array.push(element)
        }
    }
    console.log(array)
}