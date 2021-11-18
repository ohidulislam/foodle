import React, { useContext } from "react";
import cartCtx from "../../store/cart-context";
import "./MiniCart.scss";

export default function MiniCart(props) {
	const { items, totalAmount, addItem, removeItem } = useContext(cartCtx);

	console.log({ items, totalAmount, addItem, removeItem });

	const addItemHandler = (item) => {
		addItem({ ...item, amount: 1 });
	};

	const removeItemHandler = (id) => {
		removeItem(id);
	};

	let itemList = <div className="empty-cart">No Items in the cart</div>;
	if (items.length) {
		itemList = (
			<ul>
				{items.map((item) => {
					return (
						<li key={item.id}>
							<figure>
								<img src={require(`../../assets/img/${item.imgSrc}`).default} alt={item.name} />
							</figure>
							<div className="content">
								<h3>{item.name}</h3>
								<p>${item.price}</p>
								<span>x {item.amount}</span>
								<div className="quantity">
									<button onClick={() => removeItemHandler(item.id)}>-</button>
									<button onClick={() => addItemHandler(item)}>+</button>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		);
	}

	return (
		<div className="mini-cart">
			{itemList}
			<div className="sub-total">
				<div className="d-flex">
					<p>Total</p>
					<p>${totalAmount}</p>
				</div>
				<div className="action-btn">
					<a href="#">Cart</a>
					<a href="#">Checkout</a>
				</div>
			</div>
		</div>
	);
}
