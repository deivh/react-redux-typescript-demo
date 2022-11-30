import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { fetchDataSelector, filterSelector, productsSelector, searchSelector } from '../store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setProducts, setSearchTerm } from '../store/actions';
import { Product } from './Product';
const Navbar = () => {
    const dispatch = useDispatch();
    const stockState = useSelector(filterSelector);
    const productsToFilter = useSelector(productsSelector);
    const productsOg = useSelector(fetchDataSelector);
    const searchTerm = useSelector(searchSelector);
    const setStockStateTrue = (() => {
       let stockCheck = stockState === null ? true : null;
        dispatch(setFilter(stockCheck));
        dispatch(setProducts(productsToFilter.filter(e => e.availability.stock > 0)))
    })
    const setStockStateFalse = (() => {
        
        let stockCheck = stockState === null ? false : null;
        dispatch(setFilter(stockCheck));
        console.log(stockState);
        dispatch(setProducts(productsToFilter.filter(e => e.availability.stock === 0)));
        console.log(productsToFilter);
        
    })
    
    const SearchProduct = (event: React.ChangeEvent<string>, searchTerm: string) => {
        dispatch(setSearchTerm(searchTerm))
    }

    console.log(productsOg);
    function resetProducts(){
        dispatch(setProducts(productsOg))
    }
    return (
        <div className="search-bar">
                <img src="https://via.placeholder.com/150x80" alt="placeholder" />
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <label className="stock-button" htmlFor="stockTrue">
                    in stock
                    <input className="hidden" type="radio" id="stockTrue" name="stockValue" onClick={setStockStateTrue}/>
                </label>

                <label className="stock-button" htmlFor="stockFalse">
                    out of stock
                    <input className="hidden" type="radio" id="stockFalse" name="stockValue" onClick={setStockStateFalse}/>
                </label>

                <label htmlFor="outlined-basic">
                    <span className="visually-hidden">Search products</span>
                </label>

                <TextField
                    id="outlined-basic"
                    label="search product by name"
                    variant="outlined"
                    value={searchTerm}
                    onChange={ (e) => {
                        dispatch(setSearchTerm(e.target.value.toLowerCase()));
                        dispatch(setProducts(productsToFilter.filter(prod => searchTerm ? prod.name.toLowerCase().includes(searchTerm) : true)));
                    } }
                    type="text"
                    placeholder="search product by name"
                    name="src"
                />
            </Box>

            <button value="reset" onClick={resetProducts}>
                RESET
            </button>
            <div className="search">
            </div>
        </div>
    )
}








export default Navbar;