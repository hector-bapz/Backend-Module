const fs = require("fs/promises");

async function readKoder() {
  const file = await fs.readFile("./koders.json", "utf8");
  console.log(file)
}

readKoder()
.catch((error)=>{
  console.log(error)
})
