const fs = require("fs/promises");

editKoder(3, "Cinthia", "Ruiz", 25)
.catch((error) => {
  console.log(error);
});

async function editKoder(id, name, lastname, age) {
  const data = await fs.readFile("./koders.json", "utf8");
  const jsonData = JSON.parse(data);
  let koders = jsonData.koders;
  let founded = findKoder(koders, id);
  editando(founded, koders, name, lastname, age);
}

function findKoder(koders, id) {
  for (let index = 0; index < koders.length; index++) {
    const element = koders[index];
    if (element.id == id) {
      let array = [element.id, index];
      return array;
    }
  }
}

function editando(founded, koders, name, lastname, age) {
  koders[founded[1]].name = name;
  koders[founded[1]].lastName = lastname;
  koders[founded[1]].age = age;

  createJSON(koders)
  .catch((error)=>{
    console.log(error)
  })
}

async function createJSON(koders) {
  let objectKoder = { koders: koders };
  let newJSON = JSON.stringify(objectKoder, null, 2);
  await fs.writeFile("./koders.json", newJSON);
}
