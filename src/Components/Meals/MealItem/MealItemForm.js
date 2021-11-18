import React, { useState, useRef } from "react";
import Input from "../../UI/Input";

export default function MealItemForm(props) {
	const [amountIsValid, setAmountIsValid] = useState(true);
	const amountInputRef = useRef();

	const formSubmitHandler = (e) => {
		e.preventDefault();

		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;

		if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
			setAmountIsValid(false);
			return;
		}

		// console.log(enteredAmountNumber);
		props.onAddToCart(enteredAmountNumber);
	};

	return (
		<div className="item-form">
			<form onSubmit={formSubmitHandler}>
				<Input
					ref={amountInputRef}
					config={{
						id: "amount_" + props.id,
						type: "number",
						min: "1",
						max: "5",
						step: "1",
						defaultValue: "1",
					}}
				/>
				<button type="submit">Add</button>
				{!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
			</form>
		</div>
	);
}
