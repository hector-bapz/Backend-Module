const fs = require("fs");

editKoder(5, 'annie', 'gutierrez', 26);

function editKoder(id, name, lastname, age) {
  fs.readFile("./koders.json", "utf8", (error, data) => {
    if (error) {
      console.log("Ha ocurrido un error: ", error);
      return;
    }

    const jsonData = JSON.parse(data);
    let koders = jsonData.koders;
    let founded = findKoder(koders, id)   
    editando(founded, koders, name, lastname, age)
  });
}

function findKoder(koders, id){
    for (let index = 0; index < koders.length; index++) {
        const element = koders[index];
        if(element.id == id){
            let array = [element.id, index]
            return array
        }
    }
}

function editando(founded, koders, name, lastname, age) {  
    koders[founded[1]].name= name
    koders[founded[1]].lastName = lastname;
    koders[founded[1]].age = age;
  
    createJSON(koders)
  }
  

function createJSON(koders) {
  let objectKoder = { "koders": koders };
  let newJSON =  JSON.stringify(objectKoder, null, 2);
    fs.writeFile("./koders.json", newJSON,(error) => {
        if (error) {
          console.log("Ha ocurrido un error: ", error);
          return;
        }
      }
    );
}

