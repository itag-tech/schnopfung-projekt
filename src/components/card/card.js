import React, {useState} from 'react'
import { HeartFilled } from '@ant-design/icons'
import { Card, Icon } from 'antd'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

/**
 * Représente une carte de présentation produit avec photo, titre, boutons d'actions
 * @param {product} produit à afficher 
 * @returns 
 */
const CustomCard = ({product}) => {

    const [productsLiked, setProductsLiked] = useState([])
    const { Meta } = Card;

    // ----------------------------------------------------------------------------------------------------
    // ------------------ ↓ Gestion des produits liked ↓ --------------------------------------------------
    // ----------------------------------------------------------------------------------------------------
    /**
    * Permet de liker / déliker un produits
    * @param {*} productClicked 
    */
    const handleProductLiked = (productClicked) => {
        if(productsLiked.includes(productClicked)) {
            removeProductUnliked(productClicked)
        } else {
            addProductLiked(productClicked)
        }
    }

    /**
     * Permet de supprimer un produit de la liste des produits likés
     * @param {*} productClicked 
     */
    const removeProductUnliked = (productClicked) => {
        const productsLikedFiltered = productsLiked.filter(productLiked => productLiked !== productClicked)
        setProductsLiked(productsLikedFiltered)
    }

    /**
    * Permet d'ajouter un produit à la liste des produits likés
    * @param {*} productClicked 
    */
    const addProductLiked = (productClicked) => {
        let productsLikedArray = [...productsLiked]
        productsLikedArray.push(productClicked)
        setProductsLiked(productsLikedArray)
    }
    // ------------------ FIN ---------------------------------------------------------------------------


    return(
        <Card
            style={{ width: 300 }}
            cover={
                <Link to={product.path}>
                    <GatsbyImage 
                        image={product.image.gatsbyImageData}
                        alt='Image du produit'
                    />
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
                    <Icon fill='red' type="eye" key="eye" />
                </Link>,
                productsLiked.includes(product) ? <HeartFilled className='liked' onClick={() => handleProductLiked(product)}/> : <Icon type="heart" key="heart" onClick={() => handleProductLiked(product)}/>,
            ]}
        >
            <Meta
            title={product.name}
            description={product.description}
            />
        </Card>
    )
}

export default CustomCard