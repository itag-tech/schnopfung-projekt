import React from "react"
import { graphql  } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import { Carousel, Divider, Icon, Button } from 'antd'
import './style.scss'

import Layout from "../../components/layout"

const Product = ({data, pageContext}) => {

    const product = data.allDatoCmsProduct.edges.filter(item => {
        return item.node.id === pageContext.id
    })[0].node

    console.log('product.description :>> ', product);

    return (
        <Layout>
          <div className='custom-product-page'>
            <Carousel 
              dotPosition={'bottom'} 
              autoplay effect={'fade'} 
              className={'custom-carousel'}>
              {product.carrousel ? product.carrousel.map((image, index) => {
                console.log(index)
                return <div key={index}>
                  <GatsbyImage 
                    image={image.gatsbyImageData}
                    objectFit={'cover'}
                    />
                </div>
              }) : <GatsbyImage 
                    image={product.image.gatsbyImageData}
                    objectFit={'cover'}
                  />
              }
            </Carousel>
            <div className='custom-product-description'>
              <h1>{product.name}</h1>
              <Divider />
              <p>{product.description}</p>
              <Divider />
              <a href='#'
                className='snipcart-add-item'
                data-item-id={product.id}
                data-item-description={product.description}
                data-item-price={product.price}
                data-item-image={product.image.url}
                data-item-name={product.name}
                data-item-url={product.path}
              >
                <Button className='custom-button-add-cart'
                  size={'large'}>
                <Icon 
                    style={{ fontSize: '40px', color: '#08c' }}
                    type="shopping-cart" key="shopping-cart" 
                  />Ajouter au panier
                </Button>
              </a>
            </div>
          </div>
        </Layout>
        )
}

export default Product

export const query = graphql`
  query query {
    allDatoCmsProduct {
      edges {
        node {
          id
          name
          price
          description
          carrousel {
            url
            gatsbyImageData (
              width: 400
            )
          }
          image {
            url
            gatsbyImageData(
              width: 400  
            )
          }
        }
      }
    }
  }
`