import React, {useEffect, useState, useContext} from 'react'
import { graphql } from 'gatsby'
import { Spin } from 'antd'
import { SnipcartContext } from 'gatsby-plugin-snipcart-advanced/context'
import Layout from '../components/layout/'
import Seo from '../components/seo'
import Card from '../components/card'
import 'antd/dist/antd.css'
import './index.scss'

/**
 * Page d'accueil du site
 * @param {data} Données provenant d'une requêtes GraphQL ci-dessous (= DatoCMS).
 * @returns 
 */
const IndexPage = ({data}) => {

  const [products, setProduct] = useState()
  const snipcartContext = useContext(SnipcartContext); // snipcart context.
  
  useEffect(() => {
    let datoCmsProducts = data.allDatoCmsProduct.edges // liste de produits de DatoCMS.
    setProduct(datoCmsProducts)
  }, [data])


  //---------------------------------------------------------------------------------------------------
  //-----------------------------------  ↓  RENDER  ↓   -----------------------------------------------
  //---------------------------------------------------------------------------------------------------

  if(!products && snipcartContext) {
    return(
      <div className='spinner'>
        <Spin size="large" />
      </div>
      )
  } else {
    return (
      // Injection du context dans les éléments enfants du Provider.
      <SnipcartContext.Provider value={snipcartContext}>
        <Layout>
          <Seo title="Accueil" />
          <main className='grid-container'>
          {products.map(({node : product}) => (
            <Card product={product} />
          ))}

          </main>
        </Layout>
      </SnipcartContext.Provider>
      )
    }
}

export default IndexPage

  //---------------------------------------------------------------------------------------------------
  //-----------------------------------  ↓  GraphQL Request  ↓   --------------------------------------
  //---------------------------------------------------------------------------------------------------

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
            gatsbyImageData(
              width: 400
            )
          }
          path: gatsbyPath(filePath: "/products/{datoCmsProduct.id}")
        }
      }
    }
  }
`