import React from 'react'
import Component from './card'

/**
 * Représente une carte de présentation produit avec photo, titre, boutons d'actions
 * @param {product} produit à afficher 
 * @returns 
 */
const Card = ({product}) => {
    return(
        <Component product={product} />
    )
}

export default Card