import {ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components"
import "../styles/custom-styles.css";
const product = {
    id: "1",
    title: "Coffe Mug",
    img: "./coffee-mug.png"
}



export const ShoppingPage = () => {
  return (
    <div className="">
        <h1> Shopping Store</h1>
        <hr/>
        <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
        }}>

            <ProductCard 
              product={product}
              className="bg-dark"
              style={{
                backgroundColor: "green"
              }}

            >
              <ProductImage
                 className="custom-image"
              />
              <ProductTitle 
                className="text-white"
              />
              <ProductButtons
              className="custom-buttons"
              />
            </ProductCard>        

            <ProductCard product={product} className="bg-dark">
              <ProductCard.Image className="custom-image"/>
              <ProductCard.Title   className="text-white"/>
              <ProductCard.Buttons className="custom-buttons"/>
            </ProductCard>        

        </div>
    </div>
  )
}
