import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => {
  const products = data.site.siteMetadata.products
  return (
    <Layout>
      <Seo title="Accueil" />
      <main className='grid-container'>
      {products.map(product => (
        <article className='grid-item' key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <a href='#'>Ajouter au panier</a>
        </article>))}
      </main>
    </Layout>
    )
}

export default IndexPage

export const query = graphql`
  query ProductsQuery {
    site {
      siteMetadata {
        products {
          id
          name
          price
          image
        }
      }
    }
  }
`