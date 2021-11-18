import React from "react";
import MealItem from "./MealItem/MealItem";
import "./Meals.scss";

const DUMMY_MEALS = [
	{
		id: "m1",
		name: "Chicken Khichuri",
		description: "Lorem ipsum dolor sit amet.",
		price: 4.35,
		imgSrc: "burger.png",
	},
	{
		id: "m2",
		name: "Pizza Gold 2",
		description: "Lorem ipsum dolor sit amet.",
		price: 7.47,
		imgSrc: "pizza.png",
	},
	{
		id: "m3",
		name: "Cheese Burger",
		description: "Lorem ipsum dolor sit amet.",
		price: 6.25,
		imgSrc: "burger.png",
	},
	{
		id: "m4",
		name: "Fried Rice Bowl",
		description: "Consectetur adipisicing nemo elit!",
		price: 9.1,
		imgSrc: "burger.png",
	},
	{
		id: "m5",
		name: "Beef Biryani",
		description: "Lorem ipsum dolor sit amet.",
		price: 4.35,
		imgSrc: "burger.png",
	},
	{
		id: "m6",
		name: "Chicken Biryani",
		description: "Lorem ipsum dolor sit amet.",
		price: 7.47,
		imgSrc: "pizza.png",
	},
	{
		id: "m7",
		name: "Chicken Tehari",
		description: "Lorem ipsum dolor sit amet.",
		price: 6.25,
		imgSrc: "burger.png",
	},
	{
		id: "m8",
		name: "Beef Tehari",
		description: "Consectetur adipisicing nemo elit!",
		price: 9.1,
		imgSrc: "burger.png",
	},
];

export default function Meals(props) {
	const mealsList = DUMMY_MEALS.map((meal) => {
		return (
			<div className="col-md-4" key={meal.id}>
				<MealItem meal={meal} />
			</div>
		);
	});

	return (
		<section className="meals-sec">
			<div className="container">
				<div className="row">{mealsList}</div>
			</div>
		</section>
	);
}
