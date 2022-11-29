import { productsSelector } from "../store/selectors";
import { filterSelector } from "../store/selectors";
import { searchSelector } from "../store/selectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const ProductList: React.FC = () => {
    const products = useSelector(productsSelector);

    return (
        <>
            <div>

                <ul className="products-list">
                    {products.map((product) =>
                        <li className="product-card" key={product.UPC}>
                            <Link to={`/product/${product.UPC}`}>

                                <div>
                                    <img src="https://via.placeholder.com/350" alt="product picture" />
                                </div>
                                <div className="product-name">
                                    {product.name}
                                </div>
                                <div className="product-price">
                                    {product.price.currency} $ {product.price.current.value}
                                </div>

                                <div className="product-in-stock">
                                    {(product.availability) ? "in stock" : "out of stock"}
                                </div>

                            </Link>
                        </li>

                    )}
                </ul>

            </div>
        </>
    )
}

