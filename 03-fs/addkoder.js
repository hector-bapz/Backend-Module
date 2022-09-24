const fs = require("fs");

updateKoders("benja", "trujillo", 27);

function updateKoders(name, lastName, age) {
  fs.readFile("./koders.json", "utf8", (error, data) => {
    if (error) {
      console.log("Ha ocurrido un error: ", error);
      return;
    }

    const jsonData = JSON.parse(data);
    let koders = jsonData.koders;
    let appendKodervar = appendKoder(koders, name, lastName, age);

    createJSON(appendKodervar);
  });
}

function appendKoder(koders, name, lastname, age) {
  let koder = {
    id: "",
    name: "",
    lastName: "",
    age: "",
  };

  let lastId;
  for (let index = 0; index < koders.length; index++) {
    const element = koders[index];
    lastId=element.id
}

  koder.id = lastId + 1;
  koder.name = name;
  koder.lastName = lastname;
  koder.age = age;
  koders.push(koder);

  return koders;
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

