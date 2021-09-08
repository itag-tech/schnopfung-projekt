import React, {useEffect, useState, useContext} from 'react'
import { Link, graphql,  } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Card, Icon, Spin } from 'antd'
import { SnipcartContext } from 'gatsby-plugin-snipcart-advanced/context'
import Layout from '../components/layout'
import Seo from '../components/seo'
import 'antd/dist/antd.css'

const { Meta } = Card;

const IndexPage = ({data}) => {

  const [products, setProduct] = useState()
  const snipcartContext = useContext(SnipcartContext);
  
  useEffect(() => {
    setProduct(data.allDatoCmsProduct.edges)
  }, [data])
  
  if(!products) {
    return(<Spin size="large" />)
  } else {
    return (
      <SnipcartContext.Provider value={snipcartContext}>
        <Layout>
          <Seo title="Accueil" />
          <main className='grid-container'>
          {products.map(({node : product}) => (
          <Card
              style={{ width: 300 }}
              cover={
                <Link to={product.path}>
                  <GatsbyImage image={product.image.gatsbyImageData}/>
                </Link>
              }
              className='custom-card'
              actions={[
                <a href='#'
                    className='snipcart-add-item' // obligatoire
                    data-item-id={product.id}
                    data-item-description={product.description}
                    data-item-price={product.price}
                    data-item-image={product.image.url}
                    data-item-name={product.name}
                    data-item-url={product.path}>
                  <Icon type="shopping-cart" key="shopping-cart" />
                </a>,
                <Link to={product.path}>
                  <Icon type="eye" key="eye" />
                </Link>,
                <Icon type="heart" key="heart" />,
              ]}
            >
              <Meta
                title={product.name}
                description={product.description}
              />
            </Card>
          ))}

          </main>
        </Layout>
      </SnipcartContext.Provider>
      )
    }
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
          path: gatsbyPath(filePath: "/products/{datoCmsProduct.id}")
        }
      }
    }
  }
`