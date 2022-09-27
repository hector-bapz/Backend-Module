const fs = require("fs/promises");

updateKoders("Fanny", "Leyva", 19)
.catch((error)=>{
  console.log(error)
})

async function updateKoders(name, lastName, age) {
  const data = await fs.readFile("./koders.json", "utf8")

    const jsonData = JSON.parse(data);
    let koders = jsonData.koders;
    let appendKodervar = appendKoder(koders, name, lastName, age);

    createJSON(appendKodervar)
    .catch((error)=>{
      console.log(error)
    })
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

async function createJSON(koders) {
  let objectKoder = { "koders": koders };
  let newJSON =  JSON.stringify(objectKoder, null, 2);
  await fs.writeFile("./koders.json", newJSON);
  console.log(koders)
}

