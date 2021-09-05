import * as React from "react"
import { Link, graphql,  } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => {
  const products = data.allDatoCmsProduct.edges
  
  return (
    <Layout>
      <Seo title="Accueil" />
      <main className='grid-container'>
      {products.map(({node : product}) => (
        <article className='grid-item' key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <GatsbyImage image={product.image.gatsbyImageData} />
          <a 
            href='#'
            className='snipcart-add-item' // obligatoire
            data-item-id={product.id}
            data-item-description={'Ici une description produit'}
            data-item-price={product.price}
            data-item-image={product.image.url}
            data-item-name={product.name}
            data-item-url='/'
            >Ajouter au panier</a>
        </article>))}
      </main>
    </Layout>
    )
}

export default IndexPage

export const query = graphql`
  query ProductsQuery {
    allDatoCmsProduct {
      edges {
        node {
          id
          name
          price
          image {
            url
            gatsbyImageData
          }
        }
      }
    }
  }
`