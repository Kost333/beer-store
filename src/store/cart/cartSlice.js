import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem('cartItems') || '[]'),
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);

            if (existingItem) {
                state.items = state.items.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            count: item.count + 1
                        }
                    }

                    return item
                })
            } else {
                state.items = [...state.items, action.payload];
            }
        },
        increaseItem: (state, action) => {
            state.items = state.items.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        count: item.count + 1
                    }
                }

                return item
            });
        },
        decreaseItem: (state, action) => {
			state.items = state.items.map((item) => {
				if (item.id === action.payload) {
					const canDecrease = item.count - 1 >= 1;

					return {
						...item,
						count: canDecrease ? item.count - 1 : 1
					}
				}

				return item
			});
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const addItemToCart = (item) => (dispatch) => {
    dispatch(cartSlice.actions.addItem(item));
};

export const removeItemFromCart = (id) => (dispatch) => {
    dispatch(cartSlice.actions.removeItem(id));
};

export const increaseItemInCart = (id) => (dispatch) => {
    dispatch(cartSlice.actions.increaseItem(id));
};

export const decreaseItemInCart = (id) => (dispatch) => {
    dispatch(cartSlice.actions.decreaseItem(id));
};

export default cartSlice.reducer;
