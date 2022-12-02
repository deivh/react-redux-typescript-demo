import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { productDetailSelector } from "../store/selectors";

export const NavbarWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border-top: 1px solid black;
border-bottom: 1px solid black;
padding: 0 1rem;
`;

export const MenuWrapper = styled.ul`
display: flex;
list-style-type: none;
margin: 0 2em;
`

export const MenuItem = styled.li`
cursor: pointer;
padding: 0.25rem;
margin: auto 0;
font-weight: 500;
text-transform: uppercase;
text-align: center;
border-bottom: 3px solid transparent;
&:hover {
    border-bottom: 3px solid black;
}
`
export const MenuItemImgWrapper = styled.img`
width:160px;
height: auto;

`

export const ProductCard = styled.div`
display: flex;
align-items: center;
`
export const ProductCardImg = styled.img`
width: 50%;
height: auto;
`

export const ProductCardInfoWrapper = styled.ul`
display: flex;
flex-direction: column;
`
export const ProductCardBrandName = styled.div`
font-weight: 600;
font-size: 1.25rem;
display: flex;
flex-direction: column;
`

export const ColorBox = styled.span`
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: #00ff00;
    `

export const VariantsBox = styled.div`
display: flex;

`

export const VariantCard = styled.div`
display: flex;
flex-direction: column;
margin: 0.5rem;
padding: 0.5rem;
`