import { useParams } from "react-router-dom";
import { productsSelector } from '../store/selectors';
import { useSelector } from 'react-redux';
import { Product } from "./Product";
function ProductDetail() {
    const products = useSelector(productsSelector);

    console.log(products);
    
    const { UPC } = useParams<{UPC: string}>();
    const findProduct = products.find(e => e.UPC === UPC);

    console.log(findProduct);
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
        </>
    )
}

export default ProductDetail;