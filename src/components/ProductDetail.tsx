import { useParams } from "react-router-dom";
import { productDetailSelector, productsSelector } from '../store/selectors';
import { Product } from "./Product";
import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDetail } from "../store/actions";

function ProductDetail() {
    const products = useSelector(productsSelector);
    const productDetail = useSelector(productDetailSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        fetch(`https://assets.fc-dev.instore.oakley.com/assets/products/product.json`)
          .then(response => response.json())
          .then(product => {
    
            dispatch(setDetail(product));
          }
            )
        }, [dispatch]);
        
        console.log(products);
        
        const { UPC } = useParams<{UPC: string}>();
        const findProduct = products.find(e => e.UPC === UPC);
        const propertiesList = Object.keys(productDetail);
        
        if(productDetail===undefined){
            return(
                <div>
                    The product is loading . . . 
                </div>
            )
        }
        return (
            <>
            <div className='product-card'>
                <div>
                    <img src="https://via.placeholder.com/350" alt="product picture" />
                </div>
                <div className="product-name">
                    {findProduct!=undefined ? findProduct.name : 'Il prodotto non esiste'}
                </div>
                <div className="product-price">
                    {findProduct!=undefined ? findProduct.price.current.value : 'Il prodotto non esiste'}
                </div>

                <div className="product-in-stock">
                    {findProduct!=undefined ? findProduct.availability ? "in stock" : "out of stock" : 'Il prodotto non esiste'}
                </div>
            </div>
            <div className="variants-card">
                {productDetail["color-variants"].map((variant =>
                    <div className="variant">
                        <div className="variant-img">
                            <img src={variant.img} alt="immagine variante" />
                        </div>
                        <div>
                            Name: {variant.name}
                        </div>
                        <div>
                            Lens Color: {variant["lens-color"]}

                        </div>
                        <div>

                            Size: {variant.size}
                        </div>
                        <div className="price">
                            Price: {variant.price.currency} 
                            <div>

                            {variant.price.current.value}
                            </div>

                        </div>
                        <div>
                            Availability: {variant.availability.stock}
                        </div>
                    </div>
                    ))}
            </div>
        </>
    )
}

export default ProductDetail;