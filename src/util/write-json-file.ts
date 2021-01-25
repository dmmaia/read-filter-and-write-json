const fs = require('fs').promises;
import ReadFile from './read-json-files'

export default {
    setProduct:async()=>{
      let products =  await ReadFile.getProduct();
      let productNumber = products.length
      let productsNotRepeat = []
      products.map(product=>{
        let quantityProducts = products.filter((produto)=> produto.nome_comercial === product.nome_comercial)
        productsNotRepeat.push(quantityProducts[0])
        if(quantityProducts.length > 1){
          for(let p in quantityProducts){
            products.splice(products.findIndex(i => i.nome_comercial === product.nome_comercial), 1)
          }
          
        }
      })

      await fs.writeFile('src/util/dados-produto-filtrados.json', JSON.stringify(productsNotRepeat), 'utf8')

      let productNumberSaved = productsNotRepeat.length
      return {sucess:`${productNumber} registers read, ${productNumberSaved} registers written`}
  }
}