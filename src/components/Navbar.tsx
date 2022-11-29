import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { filterSelector } from '../store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/actions';
const Navbar = () => {
    const dispatch = useDispatch();
    const stockState = useSelector(filterSelector);
    function setStockStateTrue() {
        stockState === null ? true : null;
        dispatch(setFilter(stockState));
    }
    function setStockStateFalse() {
        stockState === null ? false : null;
        dispatch(setFilter(stockState));
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
                    // value={searchQuery}
                    // onInput={e => setSearchQuery(e.target.value)}
                    type="text"
                    placeholder="search product by name"
                    name="src"
                />
            </Box>

            <button value="reset">
                RESET
            </button>
            <div className="search">
            </div>
        </div>
    )
}








export default Navbar;