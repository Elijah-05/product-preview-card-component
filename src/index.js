import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import image from './images/image-product-mobile.jpg'
import cart from './images/icon-cart.svg'

function App() {
  

  return(
    <main>
      <div className='image-container container'>
        <img src={image} alt='Perfume (Gabrielle Essence Eau De Parfum)'/>
      </div>
      <div className='desc-container container'>
        <p>perfume</p>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>A floral, solar and voluptuous interpretaion composed by Olivier 
        <br/> Polge, Perfumer-Creator for the House of CHANEL.</p>
        <p id='price'> <span id='discount-price'>$149.99</span> <span id='original-price'><strike>$169.99</strike></span> </p>
        <button><img src={cart} alt='cart icon'/> <span> Add to Cart</span></button>
      </div>
    </main>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

