import { PRODUCTS } from "../../constants/data/index";


const initialState = {
    products: PRODUCTS,
    filtteredProducts: [],
    selected: null
}

const productReducer = (state = initialState, action) => {
    return state;
};

export default productReducer;  