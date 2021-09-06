/**
 * Ce script permet d'importer en masse des objets "Product" dans DatoCMS. Cela évite de tout renseigner à la main.
 * 
 * Si besoin de le rejouer :
 *    1- Dans gatsby-config donner la source de donnée (fichier json) dans 'siteMetadata'
 *    2- Pour jouer ce script en console : "node import.js" tout simplement !
 * 
 */


const { SiteClient } = require('datocms-client')
const client = new SiteClient('0b2da491ae97ffdc0d787f61848c89')
const config = require('./gatsby-config')


config.siteMetadata.products.reduce(
  (chain, product) =>
    chain
      .then(() =>
        client.uploadImage(
          `./public/photo/${product.id}.jpg`
        )
      )
      .then(image =>
        client.items.create({
          name: product.name,
          image,
          price: product.price,
          itemType: '1129332' // id du modèle de donnée (cet ID se trouve dans la configuration du modèle dans DatoCMS)
        })
      ),
  Promise.resolve()
)
