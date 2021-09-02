const { SiteClient } = require('datocms-client')
const client = new SiteClient('0b2da491ae97ffdc0d787f61848c89')
const config = require('./gatsby-config')

config.siteMetadata.products.reduce(
  (chain, product) =>
    chain
      .then(() =>
        client.uploadImage(
          `https://raw.githubusercontent.com/AnthonyWelc/bebecoders-images/master/${product.id}.jpg`
        )
      )
      .then(image =>
        client.items.create({
          name: product.name,
          image,
          price: product.price,
          itemType: '164994'
        })
      ),
  Promise.resolve()
)
