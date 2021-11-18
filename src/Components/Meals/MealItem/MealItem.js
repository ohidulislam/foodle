import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import cartContext from "../../../store/cart-context";

export default function MealItem(props) {
	const cartCtx = useContext(cartContext);
	console.log(cartCtx);

	const { id, name, description, price, imgSrc } = props.meal;
	const addItemToCartHandler = (amount) => {
		cartCtx.addItem({
			id,
			name,
			amount,
			price,
			imgSrc,
		});
		// console.log(amount);
	};

	return (
		<div className="meal-item">
			<div className="item-img">
				<img src={require(`../../../assets/img/${imgSrc}`).default} alt="" />
			</div>
			<div className="item-info">
				<h2>
					<a href="#">{name}</a>
				</h2>
				<p>{description}</p>
				<div className="price">${price}</div>
			</div>
			<MealItemForm id={id} onAddToCart={addItemToCartHandler} />
		</div>
	);
}
