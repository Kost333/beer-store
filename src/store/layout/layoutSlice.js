import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	headerText: {
		title: "BEER SHOP",
		description: "A very warm welcome to our",
	},
};

export const layoutSlice = createSlice({
	name: "layout",
	initialState,
	reducers: {
		changeLayoutText: (state, action) => {
			const { title, description } = action.payload;
			state.headerText.title = title;
			state.headerText.description = description;
		},
		dropLayoutText: (state) => {
			state.headerText.title = initialState.headerText.title;
			state.headerText.description = initialState.headerText.description;
		},
	},
});

export const changeLayoutText = (title, description) => (dispatch) => {
	dispatch(layoutSlice.actions.changeLayoutText({ title, description }));
};

export const { dropLayoutText } = layoutSlice.actions;

export default layoutSlice.reducer;
