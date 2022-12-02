import { useParams } from "react-router-dom";
import { productDetailSelector, productsSelector } from '../store/selectors';
import { Product } from "./Product";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDetail } from "../store/actions";
import { NavbarWrapper, MenuWrapper, MenuItem, VariantsBox, VariantCard, MenuItemImgWrapper, ProductCard, ProductCardImg, ProductCardInfoWrapper, ProductCardBrandName, ColorBox } from "./components";
function ProductDetail() {

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



    if (productDetail === null) {
        return (
            <div>
                The product is loading . . .
            </div>
        )
    }
    return (
        <>
            <NavbarWrapper>
                <img src="https://image-placeholder.com/images/actual-size/120x60.png" alt="placeholder" />
                <MenuWrapper>
                    <MenuItem> Sunglasses </MenuItem>
                    <MenuItem> Eyeglasses </MenuItem>
                    <MenuItem> Lenses </MenuItem>
                </MenuWrapper>
            </NavbarWrapper>
            
            <ProductCard>
                <ProductCardImg src={productDetail.img} alt="immagine prodotto" />
                <ProductCardInfoWrapper>
                    <ProductCardBrandName>
                        {productDetail.brand}
                    </ProductCardBrandName>
                    <div className="upc"> Product Code: {productDetail.UPC}</div>
                    <div>
                        {productDetail.name}
                    </div>
                    <div>
                        $ {productDetail.price.current.value}
                    </div>
                    <div>
                        Size: {productDetail.size}
                    </div>
                    <div> Color: Acid Light Green <ColorBox></ColorBox> </div>
                    <div> Model: {productDetail.model} </div>
                </ProductCardInfoWrapper>
            </ProductCard>
            <VariantsBox>
                {productDetail["color-variants"].map((variant =>
                        <VariantCard>
                            <div className="variant-img">
                                <MenuItemImgWrapper src={variant.img} alt="immagine variante" />
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
                        </VariantCard>
                ))}
            </VariantsBox>

        </>
    )
}

export default ProductDetail;