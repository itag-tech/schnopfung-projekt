import React from "react"
import { graphql  } from "gatsby"
import './style.scss'

import Layout from "../../components/layout"

const Test = ({data, pageContext}) => {

    const product = data.allDatoCmsProduct.edges.filter(item => {
        return item.node.id === pageContext.id
    })
    const productName = product[0].node.name
    return (
        <Layout>
            <div className='toto'>
            Voici le nom de mon produit : {productName}
            </div>
        </Layout>
        )
}

export default Test

export const query = graphql`
  query Products {
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