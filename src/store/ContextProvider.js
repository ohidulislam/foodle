import React, { useReducer } from "react";
import CartContext from "./cart-context";

// console.log(CartContext);

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === "ADD") {
		// update total amount
		const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
		const exitingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
		const exitingCartItem = state.items[exitingCartItemIndex];

		let updatedItem;
		let updatedItems;

		if (exitingCartItem) {
			updatedItem = { ...exitingCartItem, amount: exitingCartItem.amount + action.item.amount };
			updatedItems = [...state.items];
			updatedItems[exitingCartItemIndex] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.item);
		}

		return {
			items: updatedItems,
			totalAmount: +updatedTotalAmount.toFixed(2),
		};
	}

	if (action.type === "REMOVE") {
		// console.log(action.id);
		const exitingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
		const exitingCartItem = state.items[exitingCartItemIndex];
		const updatedTotalAmount = state.totalAmount - exitingCartItem.price;

		let updatedItems;
		if (exitingCartItem.amount === 1) {
			// if only ONE item exits, remove it
			updatedItems = state.items.filter((item) => item.id !== action.id);
		} else {
			const updatedItem = { ...exitingCartItem, amount: exitingCartItem.amount - 1 };
			updatedItems = [...state.items];
			updatedItems[exitingCartItemIndex] = updatedItem;
		}

		return {
			totalAmount: updatedTotalAmount,
			items: updatedItems,
		};
	}

	return defaultCartState;
};

const ContextProvider = (props) => {
	const [cartState, dispatchCartAciton] = useReducer(cartReducer, defaultCartState);

	const addItemToCartHandler = (item) => {
		dispatchCartAciton({ type: "ADD", item });
	};

	const removeItemFromCartHandler = (id) => {
		dispatchCartAciton({ type: "REMOVE", id });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};

	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default ContextProvider;
