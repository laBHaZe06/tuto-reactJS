import React from 'react';
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Recommandation from '../Data/recommandation';
import logoLeaf from '../assets/img/logoLeaf.png'
import Footer from './Footer'
import {useState} from 'react'
import '../styles/layout.css'
function App(){

  const [cart, updateCart] = useState([])

  return (<React.Fragment>
            <Banner>
              <img src={logoLeaf} alt='La maison jungle' className='lmj-logo' />
              <h1 className='lmj-title'>La maison jungle</h1>
              < Recommandation />
			      </Banner>
            <div className='lmj-layout-inner'>
              <Cart cart={cart} updateCart={updateCart} />
              <ShoppingList cart={cart} updateCart={updateCart} />
			      </div>
            < Footer />
          </React.Fragment>)
}
export default App;
