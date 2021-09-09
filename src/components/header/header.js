import React, { useState, useEffect, useContext } from "react"
import { SnipcartContext } from 'gatsby-plugin-snipcart-advanced/context'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Icon } from 'antd'
import './style.scss'

const Header = ({ siteTitle }) => {

  const [cartState, setCartState] = useState()
  const localSnipcartContext = useContext(SnipcartContext)

  useEffect(() => {
    localSnipcartContext && setCartState(localSnipcartContext.state)
  }, [localSnipcartContext])
  
  return (
    cartState ? 
    <header>
      <div className='custom-header'>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <button className='snipcart-checkout custom-cart'>
            <div className='custom-cart-icon'>
              <Icon
                  style={{fontSize: '2em'}}
                  type="shopping-cart" 
                  key="shopping-cart" /> 
            </div>
            <div className='custom-snipcart'>
              {/* <div className='custom-cart-detail'>
                <span className='snipcart-total-price custom-cart-detail'></span> 
              </div> */}
              <div className={`${cartState.cartQuantity !== 0 && 'custom-count' } `}>
                <span>{cartState.cartQuantity !== 0 && cartState.cartQuantity}</span> 
              </div>
            </div>
        </button>
      </div>
    </header> : <></>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
