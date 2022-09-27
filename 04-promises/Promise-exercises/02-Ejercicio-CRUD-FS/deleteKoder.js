const fs = require("fs/promises");

deleteKoder(8)
.catch((error)=>{
  console.log(error)
})

async function deleteKoder(id) {
  const data = await fs.readFile("./koders.json", "utf8")
  const jsonData = JSON.parse(data);
  let koders = jsonData.koders;
  findKoder(koders, id)
}

function findKoder(koders, id){
    for (let index = 0; index < koders.length; index++) {
        const element = koders[index];
        if(element.id == id){
            borrando(koders, index)
            break;
        }
    }
}

function borrando(koders, index){
    koders.splice(index, 1)
    createJSON(koders)
    .catch((error)=>{
      console.log(error)
    })
}

async function createJSON(koders) {
  let objectKoder = { "koders": koders };
  let newJSON =  JSON.stringify(objectKoder, null, 2);
  await fs.writeFile("./koders.json", newJSON);
}

