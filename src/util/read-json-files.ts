const fs = require('fs').promises;

export default {
    getProduct:async()=>{
      let file = await fs.readFile("src/util/dados_produto.json" , "utf8")
      return JSON.parse(await file)
  }
}