import { useState } from "react";
import {ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components"
import { Product } from '../interfaces/interfaces';
import "../styles/custom-styles.css";
import { products } from "../data/products";
import {useShoppingCart} from "../hooks/useShoppingCart"

export const ShoppingPage = () => {

  const {onProductCountChange, shoppingCart} = useShoppingCart();

  return (
    <div className="">
        <h1> Shopping Store</h1>
        <hr/>
        <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
        }}>
          {
            products.map(product =>(
              <ProductCard 
                key={product.id}
                product={product}
                className="bg-dark"
                onChange={onProductCountChange}
                value={ shoppingCart[product.id]?.count || 0 }    
              >
                <ProductImage className="custom-image"/>
                <ProductTitle className="text-white"/>
                <ProductButtons className="custom-buttons" style={{display: 'flex', justifyContent:"center"}}/>
              </ProductCard>    

            ))
          }              
        </div>
        <div className="shopping-cart">
          {
            Object.entries(shoppingCart).map(([key, productInCart]) =>(
              <ProductCard 
              key={productInCart.id}
              product={productInCart}
              className="bg-dark"    
              style={{ width: "100px"}}  
              onChange={onProductCountChange}
              value={productInCart.count} 

            >
              <ProductImage className="custom-image"/>

              <ProductButtons className="custom-buttons" style={{display: 'flex', justifyContent:"center"}}/>                
            </ProductCard>    
            ))
          }
        </div>
        <div>
          <code>
           {JSON.stringify(shoppingCart, null, 5)}
          </code>
        </div>
    </div>
  )
}
